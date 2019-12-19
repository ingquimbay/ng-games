import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from "./games/games.component";
import { GameViewComponent } from "./game-view/game-view.component";
import { GameCreateComponent } from "./game-create/game-create.component";
import { GameEditComponent } from "./game-edit/game-edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'games/view/:id', component: GameViewComponent },
  { path: 'games/create', component: GameCreateComponent },
  { path: 'games/edit/:id', component: GameEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
