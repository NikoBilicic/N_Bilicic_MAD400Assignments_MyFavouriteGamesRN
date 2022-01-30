import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  list: ContentList;
  shownContent : string[];

  constructor() {
    this.list = new ContentList;
    this.shownContent = [];

    this.list.addContent({
      id: 0,
      title: 'Enter The Gungeon',
      description: `Enter the Gungeon is a bullet hell dungeon crawler following a band of misfits seeking to shoot, loot, 
      dodge roll and table-flip their way to personal absolution by reaching the legendary Gungeon\'s ultimate treasure: 
      the gun that can kill the past.`,
      creator: 'Dodge Roll',
      imgURL: 'https://cdn.cloudflare.steamstatic.com/steam/apps/311690/header.jpg?t=1622216602',
      type: `Action, Adventure`
    });

    this.list.addContent({
      id: 1,
      title: `Super Auto Pets`,
      description: `Battle against other players at your own pace in this free-to-play chill auto battler.
      In Super Auto Pets you build a team from a lovable cast of animals who will fight for you. They each have unique abilities, so choose wisely who will join your team!`,
      creator: `Team Wood Games`,
      imgURL: `https://cdn.cloudflare.steamstatic.com/steam/apps/1714040/header.jpg?t=1633434503`,
      type: `Auto-Battler, Strategy, Multiplayer`
    });

    this.list.addContent({
      id: 2,
      title: `Paper Mario: The Thousand-Year Door`,
      description: `Its plot revolves around Mario, who embarks on a mission to collect the seven Crystal Stars in order to open the Thousand-Year Door. 
      After learning that Princess Peach has been kidnapped, he also sets out on a mission to rescue her from the X-Nauts.`,
      creator: `Intelligent Systems`,
      imgURL: `https://mario.wiki.gallery/images/thumb/c/c4/PMTTYD.jpg/250px-PMTTYD.jpg`,
      type: `RPG`
    });

    console.log(this.list);

    this.shownContent.push(this.list.getItem(0));
    this.shownContent.push(this.list.getItem(1));
    this.shownContent.push(this.list.getItem(2));

  }

  ngOnInit(): void  {
  }

}
