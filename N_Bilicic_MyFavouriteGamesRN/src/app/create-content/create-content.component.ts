import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newItemEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newItem?: Content;

  constructor() { }

  ngOnInit(): void {
    
  }

 addItem(id: string, title: string, desc: string, 
  creator: string, image: string, genre: string, 
  tags: string): void {
    this.newItem = {
      id: parseInt(id),
      title: title,
      creator: creator,
      imgURL: image,
      description: desc,
      type: genre,
      tags: tags.split(" ")
    };
    console.log(this.newItem);
    this.newItemEvent.emit(this.newItem);
  }

}
