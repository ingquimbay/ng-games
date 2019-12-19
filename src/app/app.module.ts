import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';

import { HttpClientModule } from '@angular/common/http';
import { GameViewComponent } from './game-view/game-view.component';
import { GameCreateComponent } from './game-create/game-create.component';
import { GameEditComponent } from './game-edit/game-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameViewComponent,
    GameCreateComponent,
    GameEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
