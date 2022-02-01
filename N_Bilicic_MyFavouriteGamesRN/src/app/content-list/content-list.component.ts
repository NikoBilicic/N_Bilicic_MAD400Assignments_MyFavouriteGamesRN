import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  list: Content[] = [];

  constructor() {

   }

  ngOnInit(): void {

    this.list = [{ 
      id: 0,
      title: 'Enter The Gungeon',
      description: `Enter the Gungeon is a bullet hell dungeon crawler following a band of misfits seeking to shoot, loot, 
      dodge roll and table-flip their way to personal absolution by reaching the legendary Gungeon\'s ultimate treasure: 
      the gun that can kill the past.`,
      creator: 'Dodge Roll',
      imgURL: 'https://cdn.cloudflare.steamstatic.com/steam/apps/311690/header.jpg?t=1622216602',
      type: `Action, Adventure`
     }, {
      id: 1,
      title: `Super Auto Pets`,
      description: `Battle against other players at your own pace in this free-to-play chill auto battler.
      In Super Auto Pets you build a team from a lovable cast of animals who will fight for you. They each have unique abilities, so choose wisely who will join your team!`,
      creator: `Team Wood Games`,
      imgURL: `https://cdn.cloudflare.steamstatic.com/steam/apps/1714040/header.jpg?t=1633434503`,
      type: `Auto-Battler, Strategy, Multiplayer`
     }, {
      id: 2,
      title: `Paper Mario: The Thousand-Year Door`,
      description: `Its plot revolves around Mario, who embarks on a mission to collect the seven Crystal Stars in order to open the Thousand-Year Door. 
      After learning that Princess Peach has been kidnapped, he also sets out on a mission to rescue her from the X-Nauts.`,
      creator: `Intelligent Systems`,
      imgURL: `https://mario.wiki.gallery/images/thumb/c/c4/PMTTYD.jpg/250px-PMTTYD.jpg`,
      type: `RPG`
     }, {
       id: 3,
       title: `DayZ`,
       description: `DayZ is an unforgiving, authentic, open world sandbox online game where each one of 60 players on a server follows a single goal - 
       to survive as long as they can, by all means necessary.`,
       creator: `Bohemia Interactive`,
       imgURL: `https://vulcan.dl.playstation.net/ap/rnd/202006/1014/ORrwkbfh9B1OwfQbPGLBsgs7.png`,
       type: `Survival, Multiplayer, Open-World`
     }, {
      id: 4,
      title: `SCP: Secret Laboratory`,
      description: `Deep within the SCP Foundation during a containment breach, many of the anomalies have bypassed security and escaped from their chambers - 
      without peaceful intentions. Become site personnel, a re-containment agent, or an anomalous entity and fight to take control of or escape the facility!`,
      creator: `Northwood Studios`,
      imgURL: `https://steamcdn-a.akamaihd.net/steam/apps/700330/header.jpg`,
      type: `Multiplayer, Horror`
    }, {
      id: 5,
      title: `Pokemon Legends: Arceus`,
      description: `Pokémon Legends: Arceus is an action role-playing game that preserves the core gameplay of past entries in the main line series.
       The game is set in a bygone era of the Sinnoh region's history, when it was known as the Hisui region, long before the events of Pokémon Diamond and Pearl and their remakes take place.`,
      creator: `Game Freak`,
      imgURL: `https://upload.wikimedia.org/wikipedia/en/9/9c/Pokemon_Legends_Arceus_cover.jpg`,
      type: `Action, RPG`
    }]

  }

}