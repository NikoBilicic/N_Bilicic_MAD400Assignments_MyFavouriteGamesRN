import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() content?: Content;

  log() {
    console.log('ID:', this.content?.id);
    console.log('Title:', this.content?.type);
  }

  constructor() {
    
  }

  ngOnInit(): void {

  }

}
