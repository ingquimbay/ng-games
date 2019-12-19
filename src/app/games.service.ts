import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from "./game";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private url: string = 'http://localhost:3000/api/games';
  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.url);
  }

  getGame(id: string): Observable<Game> {
    return this.http.get<Game>(`${this.url}/${id}`);
  }

  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.url, game, httpOptions);
  }

  editGame(game: Game): Observable<Game> {
    return this.http.put<Game>(this.url, game, httpOptions);
  }
}
