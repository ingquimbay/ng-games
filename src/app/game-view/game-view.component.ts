import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GamesService } from "../games.service";
import { Game } from "../game";

import { Router } from '@angular/router';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {

  game: Game;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gamesService: GamesService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getGame(id);
  }

  getGame(id): void {
    this.gamesService.getGame(id).subscribe((response: any) => { this.game = response.game });
  }

  deleteGame(id: string): void {
    if (confirm("are you sure you want to delete " + this.game.gameName)) {
      this.gamesService.deleteGame(id).subscribe(() => { this.router.navigate(['/games']) });
    }
  }

}
