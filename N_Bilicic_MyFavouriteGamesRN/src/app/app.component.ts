import { Content } from './helper-files/content-interface';
import { Component, OnInit } from '@angular/core';
import { GameListService } from './services/game-list.service';
import { MessageServiceService } from './services/message-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'N_Bilicic_MyFavouriteGamesRN';
  game?: Content;

  constructor(private gameListService: GameListService, private messageService: MessageServiceService) {
  }

  ngOnInit(): void {

    this.gameListService.getGame(2).subscribe(
      gameAtIndex => this.game = gameAtIndex
    );

  }

  showGame(id: string): void {

    this.messageService.clear();

    if (!parseInt(id)) {
      this.messageService.add("Please enter a valid input.")
      return;
    }

    let gameId = parseInt(id);

    this.gameListService.getGame(gameId).subscribe(gamesArray => {
        this.game = gamesArray
    })

  }
}
