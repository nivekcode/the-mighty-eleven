import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {DreamTeamService} from "../core/dream-team.service";
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {Subject} from "rxjs";
import {Player, position} from "../../../../shared/player.model";

@Component({
  selector: 'tme-dream-team',
  templateUrl: './dream-team.component.html',
  styleUrls: ['./dream-team.component.scss'],
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf,
    NgClass
  ],
  standalone: true
})
export class DreamTeamComponent implements OnInit, OnDestroy {
  dreamTeam$ = this.dreamTeamService.getDreamTeam().result$;
  freshPlayer: null | Player = null;

  private destroy$ = new Subject<void>();

  constructor(private dreamTeamService: DreamTeamService) {
  }

  ngOnInit(): void {
    this.dreamTeamService.subRequired$.subscribe(
      (player) => this.freshPlayer = player
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  substitutePlayer(player: Player) {
    if (player.position !== this.freshPlayer?.position) {
      return;
    }
    this.dreamTeamService.substitutePlayer(this.freshPlayer, player).subscribe(
      () => this.freshPlayer = null
    );
  }
}
