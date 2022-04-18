import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { GameListService } from '../services/game-list.service';

@Component({
  selector: 'app-content-dialog',
  templateUrl: './content-dialog.component.html',
  styleUrls: ['./content-dialog.component.scss']
})
export class ContentDialogComponent implements OnInit {
  newGame: Content;
  temptags: string = "";
  tempid: string = "";
  buttText: string = "Add Game";
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateContentEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private gameListService: GameListService, public dialogRef: MatDialogRef<ContentDialogComponent>) {
    this.newGame = { title: '', description: '', creator: ''}
   }

  ngOnInit(): void {
  }

  modifyOrAddItemToParent(id: string, title: string, description: string, creator: string, imgUrl: string, type: string, tags: string): void {
    if (id !== "") {
      this.newGame.tags = tags ? tags.split(",") : [];
      this.newGame.id = parseInt(id);
      this.newGame.title = title;
      this.newGame.description = description;
      this.newGame.creator = creator;
      this.newGame.imgURL = imgUrl;
      this.newGame.type = type;
      this.gameListService.updateGame(this.newGame).subscribe(() => {
        this.updateContentEvent.emit();
        this.newGame = { title: '', description: '', creator: '', imgURL: "", type: "", tags: [] };
        this.temptags = ""; 
        this.tempid = "";
      });
      this.buttText = "Edit Game";
    }
    else {
      this.newGame.tags = tags ? tags.split(",") : [];
      this.newGame.title = title;
      this.newGame.description = description;
      this.newGame.creator = creator;
      this.newGame.imgURL = imgUrl;
      this.newGame.type = type;
      this.gameListService.addGame(this.newGame).subscribe(newGameFromServer => {
        this.newContentEvent.emit(newGameFromServer);
        this.newGame = { title: '', description: '', creator: '', imgURL: "", type: "", tags: [] };
        this.temptags = "";
      });
      this.buttText = "Add Game";
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
