import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

import { GamesService } from "../games.service";
import { Game } from "../game";

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {

  game = new Game();
  errors: Array<any> = [];
  errorMessage: string;

  constructor(
    private gamesService: GamesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  response(response): void {
    if (response.success === false) {
      this.errors = response.error.errors;
      this.errorMessage = response.error.message;
    }
    if (response.success === true) {
      this.router.navigate(['/games/view/', response.game._id]);
    }
  }

  onSubmit(): void {
    this.gamesService.createGame(this.game).subscribe((response) => { this.response(response) });
  }
}
