import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
import { FAVOURITE_GAMES } from '../helper-files/contentDb';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const content: Content[] = FAVOURITE_GAMES;
    return { content };
  }
  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(c => c.id ?? 0)) + 1 : 0;
  }
}
