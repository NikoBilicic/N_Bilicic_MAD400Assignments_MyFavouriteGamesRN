import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { FAVOURITE_GAMES } from '../helper-files/contentDb';
import { GameListService } from '../services/game-list.service';
import { MessageServiceService } from '../services/message-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  list: Content[] = [];

  constructor(private gameListService: GameListService, private messageService: MessageServiceService) {

  }

  ngOnInit(): void {

    this.gameListService.getGames().subscribe(listOfGames => this.list = listOfGames);
    this.messageService.clear();
    this.messageService.add("Games array loaded!");

  }

  selectCard(term: string, valid: boolean) {
    var selected = document.getElementById(term);
    var cards = document.getElementsByTagName("app-content-card");

    if (cards) {
      if (valid) {
        for (var i = 0; i < cards.length; i++) {
          if (cards[i].id == selected?.id) {
            cards[i].classList.add('selected');
          } else {
            cards[i].classList.remove('selected');
          }
        }
      } else {
        for (var i = 0; i < cards.length; i++) {
          cards[i].classList.remove('selected');
        }
      }
    }
  }

  searchContent(term: string): string {

    let input = this.list.find(e => e.title.toLowerCase() === term.toLowerCase());
    let output = document.querySelector(".outputText");

    if (term === "") {
      return "";
    }

    if (output) {
      if (input) {
        output.classList.add('goodSearch');
        output.classList.remove('badSearch');
        this.selectCard(term, true);
        return (term + " exists").toUpperCase();
      } else {
        output.classList.add('badSearch');
        output.classList.remove('goodSearch');
        this.selectCard(term, false);
        return (term + " does not exist").toUpperCase();
      }
    }

    return "Error";
  }

  addGameToList(newGame: Content): void {
    this.messageService.add("New game added, ID is " + newGame.id);
    this.gameListService.getGames().subscribe(listOfGames => {
    this.list = listOfGames;
    this.messageService.add("New game displayed");
    });
    }    

    updateGameOnList(): void{
      this.gameListService.getGames().subscribe(listOfGames => {
        this.list = listOfGames;
        this.messageService.add("Games on the list updated");
      });
    }

}
