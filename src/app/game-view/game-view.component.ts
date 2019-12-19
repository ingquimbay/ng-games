import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GamesService } from "../games.service";
import { Game } from "../game";

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {

  game: Game;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getGame(id);
  }

  getGame(id): void {
    this.gamesService.getGame(id).subscribe((response: any) => { this.game = response.game });
  }

}
