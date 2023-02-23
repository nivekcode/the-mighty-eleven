import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {QueryClientService, UseQuery} from "@ngneat/query";
import {NEVER, Observable, of, Subject, tap} from "rxjs";

import {Player, position} from "../../../../shared/player.model";

// TODO use env variables here
const BACKEND_URL = 'http://localhost:3000';

const SYSTEM = {
  GK: 1,
  DEF: 4,
  MID: 3,
  FWD: 3,
}

@Injectable({
  providedIn: 'root'
})
export class DreamTeamService {
  private http = inject(HttpClient);
  private useQuery = inject(UseQuery);
  private queryClient = inject(QueryClientService);
  private substitutionRequired = new Subject<Player>();
  public subRequired$ = this.substitutionRequired.asObservable();

  public getDreamTeam() {
    return this.useQuery(['dream-team'], () => {
      return this.http.get(
        `${BACKEND_URL}/dream-team`
      )
    });
  }


  public substitutePlayer(player: Player, playerToReplace: Player) {
    console.log('substitutePlayer', player, playerToReplace);

    return this.http.patch(
      `${BACKEND_URL}/dream-team`,
      {playerId: player.id, playerIdToReplace: playerToReplace.id}
    ).pipe(
      tap(() => this.queryClient.invalidateQueries(['dream-team']))
    );
  }

  public addPlayer(player: Player): Observable<any>{
    const availablePositions = this.getAvailableSpots(player.position);

    if (availablePositions === 0) {
      this.substitutionRequired.next(player);
      return of(null);
    }

    return this.http.patch(
      `${BACKEND_URL}/dream-team`,
      {playerId: player.id}
    ).pipe(
      tap(() => this.queryClient.invalidateQueries(['dream-team']))
    );
  }

  private getAvailableSpots(position: position) {
    const {players} = this.queryClient
      .getQueriesData(['dream-team'])[0][1] as any;

    const playersInPosition = players.filter((player: any) => player.position === position);
    return SYSTEM[position] - playersInPosition.length;
  }
}
