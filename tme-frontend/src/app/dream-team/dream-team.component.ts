import {Component, inject} from "@angular/core";
import {DreamTeamService} from "../core/dream-team.service";
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";

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
export class DreamTeamComponent {
  dreamTeam$ = inject(DreamTeamService).getDreamTeam().result$;
}
