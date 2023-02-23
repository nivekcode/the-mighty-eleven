import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UseQuery} from "@ngneat/query";

import {Player} from "../../../../shared/player.model";

const BACKEND_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private http = inject(HttpClient);
  private useQuery = inject(UseQuery);

  public getPlayers() {
    return this.useQuery(['players'], () => {
      return this.http.get<Player[]>(
        `${BACKEND_URL}/players`
      );
    });
  }
}
