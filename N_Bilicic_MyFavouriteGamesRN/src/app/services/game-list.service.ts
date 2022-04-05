import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageServiceService } from './message-service.service';
import { Content } from '../helper-files/content-interface';
import { FAVOURITE_GAMES } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  constructor(private messageService: MessageServiceService) { }

  getGames(): Observable<Content[]> {
    return of(FAVOURITE_GAMES);
  }

  getGame(id: number): Observable<Content> {
    this.messageService.add(`Game at id: ${id}`);
    return of(FAVOURITE_GAMES[id]);
  }
}
