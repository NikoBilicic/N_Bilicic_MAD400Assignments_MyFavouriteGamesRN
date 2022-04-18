import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageServiceService } from './message-service.service';
import { Content } from '../helper-files/content-interface';
import { FAVOURITE_GAMES } from '../helper-files/contentDb';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
    };
    
  constructor(private messageService: MessageServiceService, private http: HttpClient) { }

  getGames(): Observable<Content[]> {
    this.messageService.add("Game array loading");
    return this.http.get<Content[]>("api/content");
  }

  getGame(id: number): Observable<Content> {
    this.messageService.add(`Game with ID: ${id}`);
    return this.http.get<Content>("api/content/" + id);
  }

  addGame(newGame: Content): Observable<Content>{
    this.messageService.add("Adding new game to the server");
    return this.http.post<Content>("api/content", newGame, this.httpOptions);
  }

  updateGame(game: Content): Observable<any>{
    this.messageService.add("Updating content on the server, id: " + game.id);
    return this.http.put("api/content", game, this.httpOptions);
    }
} 
