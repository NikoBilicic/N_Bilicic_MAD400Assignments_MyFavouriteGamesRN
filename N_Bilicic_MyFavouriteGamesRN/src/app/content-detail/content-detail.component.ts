import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { GameListService } from '../services/game-list.service';
import { MessageServiceService } from '../services/message-service.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  id?: number;
  content?: Content;

  constructor(private gameListService: GameListService, private messageService: MessageServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(!params.get('id')) {
        console.error("No ID received")
      }
      this.id = Number(params.get('id') ?? "0");
      this.gameListService.getGame(this.id).subscribe((game) => {
        this.content = game;
        this.messageService.clear()
        if(this.content) {
          this.messageService.add('Game: ${this.content.title}');
        }
      })
    })
  }

}
