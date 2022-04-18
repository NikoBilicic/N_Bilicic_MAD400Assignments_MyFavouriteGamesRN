import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentDialogComponent } from '../content-dialog/content-dialog.component';
import { Content } from '../helper-files/content-interface';
import { GameListService } from '../services/game-list.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateContentEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private dialog: MatDialog) {

   }

  ngOnInit(): void {
  }

  openDialog() {
    let dialogRef = this.dialog.open(ContentDialogComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }

}
