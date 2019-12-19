import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

import { GamesService } from "../games.service";
import { Game } from "../game";

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss']
})
export class GameEditComponent implements OnInit {

  game: Game;
  errors: Array<any> = [];
  errorMessage: string;

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getGame(id);
  }
  getGame(id): void {
    this.gamesService.getGame(id).subscribe((response: any) => { this.game = response.game });
  }
  response(response): void {
    if (response.success === false) {
      this.errors = response.error.errors;
      this.errorMessage = response.error.message;
    }
    if (response.success === true) {
      this.router.navigate(['games/view/', response.game._id]);
    }
  }
  onSubmit(): void {
    this.gamesService.editGame(this.game).subscribe((response) => { this.response(response) });
  }

}
