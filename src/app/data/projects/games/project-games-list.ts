import { ProjectGame } from './project-game';

export const GAMES: ProjectGame[] = [
  { id: 3, 
    name: "Ghost Game", 
    link: "ghostgame",
    date: "Since Jan 14 2021", 
    aaOff: false, 
    style: "movie", 
    imageOrMovieBGPath: "assets/res/projects/ghostgame/gg-bg.mp4", 
    customStyleData: "", 
    description: "GhostGame is a cooperative, multiplayer game about ghost hunting. I will reveal more information about the idea and progress on request,but as this is my most recent project, I am opting to protect my idea and not provide a full description. Made with UE4, Blender, Mixamo and Quixel."
  },

  { id: 6, 
    name: "City Builder", 
    link: "citybuilder",
    date: "Since Dec 2020", 
    aaOff: false, 
    style: "movie", 
    imageOrMovieBGPath: "assets/res/projects/citybuilder/cb-bg.mp4", 
    customStyleData: "", 
    description: "CityBuilder is a co-op, citybuilding economic sim with a RTS elements. At the moment, the basic features of a city builder are in place: place, move, delete, rotate. Currently working on a decal-based road system."
  },

  {id: 4, 
    name: "The Ultimate Zombie Game", 
    link: "tuzg",
    date: "Since Aug 2020", 
    aaOff: false, 
    style: "movie", 
    imageOrMovieBGPath: "assets/res/projects/tuzg/tuzg.mp4", 
    customStyleData: "", 
    description: "The Ultimate Zombie Game (TUZG) is a game I created to test whether or not a multiplayer game could be created in mostly Blueprints in UE4; It can. I ended up creating guns, ballistics systems and a world item interface to interact with objects."
  },
  
  {id: 2, 
    name: "Game Jams", 
    link: "gamejams",
    date: "Since Oct 2020", 
    aaOff: false, 
    style: "standard", 
    imageOrMovieBGPath: "assets/res/projects/gamejams/gameJamsCard.png", 
    customStyleData: "", 
    description: "A showcase of the game jams I have participated in."
  },
 
  {id: 5, 
    name: "Not Enough Combat", 
    link: "nec",
    date: "Aug 2018 - Mar 2020", 
    aaOff: true, 
    style: "customImageWrapper", 
    imageOrMovieBGPath: "assets/res/projects/nec/eo.gif", 
    customStyleData: "nec", 
    description: "Not Enough Combat is a mod for Minecraft (versions 1.7.10 - 1.12.2) that adds in armor for other mod added ores. Obsidian and Ender Obsidian armor and tools provide a unique vanilla end game experience."
  },
 
    {id: 1, 
    name: "Ragnaraven", 
    link: "ragnaraven",
    date: "Since June 2018 ", 
    aaOff: false, 
    style: "standard", 
    imageOrMovieBGPath: "assets/res/projects/ragnaraven/unity4scene.png", 
    customStyleData: "", 
    description: "Work in progress, open world UE4 game. Set in an alternate, naturalistic world, humankind is threatened by an alien being that is invading the world. Story draft available on request."
  },
];