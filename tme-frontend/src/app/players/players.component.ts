import {Component, inject, OnDestroy} from "@angular/core";
import {AsyncPipe, JsonPipe, NgForOf} from "@angular/common";

import {Player} from "../../../../shared/player.model";

import {PlayersService} from "./players.service";
import {DreamTeamService} from "../core/dream-team.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'tme-players',
  templateUrl: './players.component.html',
  imports: [
    JsonPipe,
    AsyncPipe,
    NgForOf
  ],
  standalone: true
})
export class PlayersComponent implements OnDestroy {
  players$ = inject(PlayersService).getPlayers().result$;
  dreamTeamService = inject(DreamTeamService);

  private destroy$ = new Subject<void>();

  addPlayer(player: Player) {
    this.dreamTeamService.addPlayer(player).pipe(
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next()
  }
}
