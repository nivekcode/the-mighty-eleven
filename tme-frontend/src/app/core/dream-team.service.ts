import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {QueryClientService, UseQuery} from "@ngneat/query";
import {tap} from "rxjs";

// TODO use env variables here
const BACKEND_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DreamTeamService {
  private http = inject(HttpClient);
  private useQuery = inject(UseQuery);
  private queryClient = inject(QueryClientService);

  public getDreamTeam() {
    return this.useQuery(['dream-team'], () => {
      return this.http.get(
        `${BACKEND_URL}/dream-team`
      )
    });
  }

  public addPlayer(playerId: number, playerIdToReplace?: number) {
    return this.http.patch(
      `${BACKEND_URL}/dream-team`,
      {playerId, playerIdToReplace}
    ).pipe(
      tap(() => this.queryClient.invalidateQueries(['dream-team']))
    );
  }
}
