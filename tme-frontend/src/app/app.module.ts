import {ENVIRONMENT_INITIALIZER, inject, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {PlayersComponent} from "./players/players.component";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {QueryClientService} from "@ngneat/query";
import {HttpClientModule} from "@angular/common/http";
import {DreamTeamComponent} from "./dream-team/dream-team.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PlayersComponent,
    DreamTeamComponent
  ],
  providers: [
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue() {
        const queryClient = inject(QueryClientService);
        import('@ngneat/query-devtools').then((m) => {
          m.ngQueryDevtools({ queryClient });
        });
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
