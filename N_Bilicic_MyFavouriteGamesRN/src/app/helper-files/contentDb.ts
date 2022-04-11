import { Content } from "./content-interface"

export const FAVOURITE_GAMES: Content[] = [{
    id: 0,
    title: 'Enter The Gungeon',
    description: `Enter the Gungeon is a bullet hell dungeon crawler following a band of misfits seeking to shoot, loot, 
    dodge roll and table-flip their way to personal absolution by reaching the legendary Gungeon\'s ultimate treasure: 
    the gun that can kill the past.`,
    creator: 'Dodge Roll',
    imgURL: "../assets/gungeon.jpg",
    type: `Action`,
    tags: [`Bullet Hell`, `Roguelike`, `Indie`]
  }, {
    id: 1,
    title: `Super Auto Pets`,
    description: `Battle against other players at your own pace in this free-to-play chill auto battler.
    In Super Auto Pets you build a team from a lovable cast of animals who will fight for you. They each have unique abilities,
     so choose wisely who will join your team!`,
    creator: `Team Wood Games`,
    imgURL: `../assets/SAP.jpg`
  }, {
    id: 2,
    title: `Paper Mario: The Thousand-Year Door`,
    description: `Its plot revolves around Mario, who embarks on a mission to collect the seven Crystal Stars in order to 
    open the Thousand-Year Door. After learning that Princess Peach has been kidnapped, he also sets out on a mission to 
    rescue her from the X-Nauts.`,
    creator: `Intelligent Systems`,
    imgURL: `../assets/papermario.jpg`,
    type: `RPG`
  }, {
    id: 3,
    title: `DayZ`,
    description: `DayZ is an unforgiving, authentic, open world sandbox online game where each one of 60 players on a 
     server follows a single goal - to survive as long as they can, by all means necessary.`,
    creator: `Bohemia Interactive`,
    type: `Multiplayer`
  }, {
    id: 4,
    title: `SCP: Secret Laboratory`,
    description: `Deep within the SCP Foundation during a containment breach, many of the anomalies have bypassed security and 
    escaped from their chambers - without peaceful intentions. Become site personnel, a re-containment agent, or an anomalous 
    entity and fight to take control of or escape the facility!`,
    creator: `Northwood Studios`,
    imgURL: `../assets/SCP.jpg`,
    tags: [`Free-to-Play`, `Sci-fi`]
  }, {
    id: 5,
    title: `Pokemon Legends: Arceus`,
    description: `Pokémon Legends: Arceus is an action role-playing game that preserves the core gameplay of past entries in 
    the main line series. The game is set in a bygone era of the Sinnoh region's history, when it was known as the Hisui region, 
    long before the events of Pokémon Diamond and Pearl and their remakes take place.`,
    creator: `Game Freak`,
    imgURL: `../assets/pokemon.jpg`,
    type: `RPG`
  }, {
    id: 6,
    title: `The Binding of Isaac`,
    description: `When Isaac’s mother starts hearing the voice of God demanding a sacrifice be made to prove her faith, 
    Isaac escapes into the basement facing droves of deranged enemies, lost brothers and sisters, his fears, and eventually 
    his mother. The Binding of Isaac is a randomly generated action RPG shooter with heavy Rogue-like elements. Following Isaac 
    on his journey players will find bizarre treasures that change Isaac’s form giving him super human abilities and enabling him 
    to fight off droves of mysterious creatures, discover secrets and fight his way to safety.`,
    creator: `Edmund McMillen`,
    imgURL: `../assets/isaac.jpg`,
    type: `Action`,
    tags: [`Roguelike`, `Indie`]
  }, {
    id: 7,
    title: `Escape from Tarkov`,
    description: `Escape from Tarkov is a hardcore and realistic online first-person action RPG/Simulator 
    with MMO features and a story-driven walkthrough.\nWith each passing day the situation in the Norvinsk region grows more and more complicated. 
    Incessant warfare in Tarkov has sparked massive panic; the local population has fled the city, but those who stayed are looking to improve 
    their fortunes at the expense of others. Having accepted the new reality, savage Tarkov locals - "Scavs" flocked into well-armed gangs and 
    started the redivision of the city. Nowadays, Tarkov is separated by unseen borders, controlled by different groups. Gain-greedy gunmen would 
    go to any length to have their way, including the murder of civilians and direct confrontation with the two private military companies.
    \nThe players will have to experience living in the skin of one of the mercenaries who survived the initial stage of the Tarkov conflict.
     After choosing one of the sides – USEC or BEAR – the player’s character starts to make his way out of the city. 
     Tarkov is sealed off by UN and Russian military, supply chains are cut, communication with operational command is lost, and in these 
     conditions everyone has to make his own choices of what to do and how to get out of the chaos-ridden metropolis.`,
    creator: `Battlestate Games`,
    tags: [`Tactical Shooter`, `Looting`]
  }];