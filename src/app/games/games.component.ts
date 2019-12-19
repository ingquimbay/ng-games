import { Component, OnInit } from '@angular/core';
import { GamesService } from "../games.service";
import { Game } from "../game";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: Game[];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(): void {
    this.gamesService.getGames().subscribe((response: any) => { this.games = response.games, console.log(this.games) });
  }

}
