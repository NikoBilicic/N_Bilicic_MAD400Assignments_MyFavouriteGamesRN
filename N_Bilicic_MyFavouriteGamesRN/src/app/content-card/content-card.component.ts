import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  shownContent : string[];

  constructor() {
    this.shownContent = [];
  }

  ngOnInit(): void  {
  }

}
