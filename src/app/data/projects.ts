import { Showcase } from './showcase';
import { WYVERN_MODELS } from './models/wyvern-models';

export interface Project {
  name: string;
  type?: string;
  date: string;
  description: string;
  source?: string;
  sourceText?: string;
  link?: string;

  id: number;
  aaOff?: boolean;
  displayMediaPath?: string;
  background?: string;
  backgroundColor?: string;
  fallbackImage?: string;

  showcases?: Showcase[];
}

export const APPS: Project[] = [
  {
    id: 3,
    name: 'JustAJelly.com',
    source: 'https://github.com/Ragnaraven/justajellycom',
    sourceText: 'Source Code (GitHub)',
    link: 'https://justajelly.com/',
    date: 'Aug 2022',
    displayMediaPath: 'assets/res/projects/justajelly/justajelly.gif',
    backgroundColor: '#070420',
    description:
      "A musical web portfolio site for Aidan McKenna's original music library.",
  },

  {
    id: 2,
    name: 'Modern Alarm Clock',
    type: 'MAC',
    date: 'Since 2014',
    backgroundColor: '#03a9f4',
    description:
      'Modern Alarm Clock is a Kotlin Android alarm app that contains a unique UI.',
    showcases: [
      {
        header: 'UI Demo',
        mediaHeader: '',
        textAbove:
          'Simple UI demo for Modern Alarm Clock. All designs, animations and interactions are original.',
        textBelow: '',
        type: 'youtube',
        media: ['lUPHyaaRL30'],
        extras: [],
      },
    ],
  },

  {
    id: 1,
    name: 'SiegeStarterIcons.com',
    type: 'SSI',
    source: 'https://github.com/Ragnaraven/siegestartericons.com',
    sourceText: 'Source (GitHub)',
    link: 'https://siegestartericons.com/',
    date: 'Since Mar 2017',
    aaOff: false,
    displayMediaPath: 'assets/res/projects/ssi/ssi.png',
    backgroundColor: '#595959',
    background:
      'linear-gradient(rgb(135, 135, 135) 1%, rgb(71, 71, 71) 79%, rgb(30, 30, 30) 100%)',
    fallbackImage: 'assets/res/projects/ssi/ssi.png',
    description:
      "SiegeStarterIcons.com allows users to make basic user profile pictures for Ubisoft's Tom Clany's Rainbow Six: Siege. Created with HTML, CSS, and JS and jQuery.",
  },

  {
    id: 3,
    name: 'AndrewPodrat.com',
    type: 'signature',
    source: 'https://github.com/Ragnaraven/andrewpodratcom-angular',
    sourceText: 'Source Code (GitHub)',
    date: 'Since Feb 2021',
    backgroundColor: 'black',
    description: "You're here! AndrewPodrat.com is written with Angular 14.",
  },
];

export const GAMES: Project[] = [
  {
    id: 1,
    name: 'Ragnaraven',
    date: 'Since June 2018',
    displayMediaPath: 'assets/res/projects/ragnaraven/unity4scene.jpg',
    fallbackImage: 'assets/res/projects/ragnaraven/unity4scene.webp',
    description:
      'Set in an alternate, ecoistic world, humankind is threatened by an alien being that invades Vallegion. Being created with UE5 and Blender.',
    showcases: [
      {
        header: 'The Yin Yang Wyvern',
        mediaHeader: '',
        textAbove: '',
        textBelow:
          'A 3D model from Ragnaraven. Click in the viewport to manipulate the preview.',
        type: '3dmodel',
        extras: WYVERN_MODELS,
      },
      {
        header: 'Scenery',
        mediaHeader: '',
        textAbove: '',
        textBelow: '',
        type: 'images',
        media: [
          'assets/res/projects/ragnaraven/unity4scene.png',
          'assets/res/projects/ragnaraven/unity3snow.webp',
          'assets/res/projects/ragnaraven/unity2temple.webp',
        ],
      },
      {
        header: 'Shading and Graphics',
        type: 'singlemovie',
        media: ['assets/res/projects/ragnaraven/moveShowcase.mp4'],
      },
      {
        header: 'Gameplay',
        type: 'moviegrid',
        media: [
          'assets/res/projects/ragnaraven/earthProjectile2.mp4',
          'assets/res/projects/ragnaraven/earthquake2.mp4',
          'assets/res/projects/ragnaraven/earthrise2.mp4',
          'assets/res/projects/ragnaraven/earthWhip2.mp4',
          'assets/res/projects/ragnaraven/takingDamageAndHealing2.mp4',
          'assets/res/projects/ragnaraven/healDemo2.mp4',
          'assets/res/projects/ragnaraven/lightningDamage2.mp4',
          'assets/res/projects/ragnaraven/lightningShowcase2.mp4',
        ],
      },
      {
        header: 'Story Preview',
        textAbove:
          'Ragnaraven is a game about Vallegion, a world where people live and work with nature... or used to.<br/>' +
          'The Omnis, a being that descended when the comet Nurvia collided with the moon Ominimo, is spreading his' +
          ' himself accross the world, and with him comes death and destruction.<br/><br/>' +
          'As an Unchained Vallegionite, will you be able to reconnect with your ancestors and their powers to defeat the Omnis and save Vallegion?',
        type: 'html',
      },
      {
        header: 'Background',
        textAbove:
          "I've been working on Ragnaraven since my third year of college. I had a nightmare about a black crystal with a being trapped inside (much like a mosquito-in-amber) that spread black, viney chains across the world. Over the years since then, I have written out a story, developed a world, and began to truly develop Ragnaraven into a true open-world, co-op game. It is not close to release quite yet. <br/> <br/> Over the years, Ragnaraven has really blossomed into a beautiful picture. I hope to find a way to bring it realistically to fruition.",
        type: 'html',
      },
    ],
  },

  {
    id: 3,
    name: 'Ghost Game',
    date: 'Since Jan 14 2021',
    aaOff: false,
    displayMediaPath: 'assets/res/projects/ghostgame/gg-bg.mp4',
    fallbackImage: 'assets/res/projects/ghostgame/gg-bg.webp',
    description:
      'GhostGame is a cooperative, multiplayer game about hunting the supernatural across the world. Made with UE4, Blender, Mixamo and Quixel.',
    showcases: [
      {
        header: 'Backstory and Demo',
        textAbove:
          "GhostGame is my most recent project. I wanted to learn about making FP/TP animations and controllers, as well as AI systems and mod support in UE4. For only 2 weeks of work (as of 1/28/2021), there has been substantial progress and the idea is taking on a life of it's own! I have general mechanics implemented as well as basic coop and various lighting systems. Check out the video to see the progress!",
        type: 'youtube',
        media: ['czVUCb_4Gkg'],
      },
      {
        header: '2/27/2021: Main Menu & Light Culling Draft',
        textAbove:
          'I have completed the first draft of the light culling system with great results: 70-120fps(capped). These results are enough for me to move on and return later if improvements are needed.<br/><br/>Below, you can see my progress on a Main Menu draft and a screenshot of the room-based light culling system. <br/><br/>For the main menu, the globe slowly spins and reveal different supernatural sightings that you will be able to pursue. The red dots are real life city locations that are loaded from a database, mapped onto a 3D globe that will soon allow a UI widget to snap to the city location in screen space and provide a glimpse of the mission before a player selects it to reveal more information.<br/><br/>For the culling system, the room analyzes its marked portals and examines the most likely viewing angles to determine what rooms are critical for any given player position in a room. You can also see a glimpse of my future modder-friendly Unreal Engine tool I made to assist with the creation of rooms!',
        textBelow: '[Click to expand]',
        type: 'images',
        media: [
          'assets/res/projects/ghostgame/mainmenu.png',
          'assets/res/projects/ghostgame/roomvis.png',
        ],
      },
      {
        header: '3/23/2021: Gameplay draft, data-driven mod foundation',
        textAbove:
          'Check out the quick video below to see the new show-off features! Code features are right below that.',
        textBelow:
          'Video notes: <br/><br/>1: Item pickup and control.<br/> 2: Breaking the mask spawns the Oni.<br/> 3: Picture show-off (notice the right HUD update). <br/>4: Video show off (notice video bars, [rec.] and left side HUD.<br/>5: Death demo.<br/>6: Inventory pickup/drop demo.',
        type: 'youtube',
        media: ['uege5QYtA-0'],
      },
      {
        header: '3/23/2021: Code Changes',
        textAbove:
          'There was a lot learned during this iteration. A BIG lesson was the unfornate realization of the necessity of big, wide doors and stairways. I always wondered why Naughty dog was so generous with their portals, now I know. <br/><br/> I also had a great chance to express my UE4 UMG knowledge, as show in the first few images below where I implemented a rudimentary gameplay HUD and a dynamic inventory widget that is dynamic by depending on whether or not the player has a bag or not. <br/><br/> Code wise, I rewrote some of the AI features for a better inhertance structure. I implemented a pretty simple scoring system too. <br/><br/> The largest change, however, was the implementation of a data-driven system. I have decided to stick to the idea of <strong>"If you can make edit a spreadsheet, you can make a mod."</strong> I want to make this game as data-driven as possible so that anyone who enjoys it can add more content easily. This is what I have always wanted as a modder and is what is exemplified in the Company of Heroes 2 Mod Tools.',
        textBelow:
          'First image shows all of the currently data-driven elements for the game. You can add in dynamically spawned props, inventory data and supernatural beings currently. <br/><br/> Image two shows how you would go about implementing a new variant of an existing creature. Note that there is a temporary hard class reference. In the future, I would like the be able to construct Supernaturals solely with data-driven code. More on that in future updates. <br/><br/> Image 3 shows my succesful, working implementation of an Event->Action listener system, adapted completely for data-driven gameplay through JSON parsing. In the future, this will allow modders to be able to make code changes, just by formulating JSON. This could end up being <em>too</em> powerful and could be removed. As a programming modder, I would want something like this, and frankly, I would want a strong game API to truly mod as well. I actually have created the aforementioned API but it is not implemented for modding yet. <br/><br/> In short, if you are familiar with Cascading Style Sheets, the modding system I have planned essentially loads modded DBs as layers and the layers cascade down to one composite sheet that the game and the server will interpret.',
        type: 'images',
        media: [
          'assets/res/projects/ghostgame/snddm1.png',
          'assets/res/projects/ghostgame/snddm2.png',
          'assets/res/projects/ghostgame/snddm3.png',
        ],
      },
    ],
  },

  {
    id: 4,
    name: 'The Ultimate Zombie Game',
    date: 'Since Aug 2020',
    aaOff: false,
    displayMediaPath: 'assets/res/projects/tuzg/tuzg-bg.mp4',
    fallbackImage: 'assets/res/projects/tuzg/tuzg-bg.webp',
    description:
      'The Ultimate Zombie Game (TUZG) is a game I created to test whether or not a multiplayer game could be created exclusively Blueprints in UE4; It mostly can. I ended up creating guns, ballistics systems and a world item interface to interact with objects.',
    showcases: [
      {
        header: 'Backstory and Demo',
        mediaHeader: '',
        textAbove:
          "I have always wanted to make a zombie shooter. This project <em>was</em> in some way the start of that, but its true purpose was for me to learn multiplayer fundementals in UE4. I created a bunch of cool mechanics that will be helpful if I decide to pursue a shooter in the future. <br/><br/> Overall, the project went great! A month after I started it, the progress culminated with my Bare Multiplayer Fundamentals remote Guest Lecture at Southern New Hampshire University, where I gave a demonstration and complete walkthrough designed to help new students understand the ways that UE4 handles multiplayer without overhwhelming them. I also provided resources for students to learn, similar to how I did. <br/><br/>  In the video below, I narrate a detailed walkthrough of the project if you'd like to see it in action.",
        textBelow:
          '<p>The Ultimate Zombie Game is a proof of concept game designed with the following features:</p><ul><li>Data-driven game data; weapons and related are processed and loaded from spreadsheets</li><li>Simultaneous split screen and online Steam Multiplayer</li><li>Drop in, drop out split screen</li><li>Controller support</li><li>Different ballistic mechanics: Hitscan, Travel Time, Travel Time and Drop</li><li>Text chat (Not demonstrated in video, but is visible in bottom right corner)</li><li>Multimap, multi character selection (irrelevant to project, implemented identically from <a href="https://www.youtube.com/watch?v=abmzWUWxy1U&list=PLZlv_N0_O1gYqSlbGQVKsRg6fpxWndZqZ">Epic\'s 24 part web-series)</a></li></ul>',
        type: 'youtube',
        media: ['g1fEk56P0sA'],
      },
    ],
  },

  {
    id: 2,
    name: 'Game Jams',
    date: 'Since Oct 2020',
    aaOff: false,
    fallbackImage: 'assets/res/projects/gamejams/gameJamsCard.webp',
    displayMediaPath: 'assets/res/projects/gamejams/gameJamsCard.jpg',
    description: 'A showcase of the Game Jams I have completed.',
    showcases: [
      {
        header: 'Halloween 2020 Pittsburgh BitBridge',
        mediaHeader: 'assets/res/projects/gamejams/2020BitBridgeGameJam.png',
        textAbove:
          "This was my first game jam! I acted as co-designer and 3D modeler in a team of 9. <br/> <br/> My largest contribution to this game was the demon you can see below. I modeled, rigged, animated and created the material. Finally, I also added the animation state machine that controls it. There was a small amount of visual scripting, but this was mostly an art role. I elected to this art role because I felt it was a great experience to <em>not</em> code and to learn something new. <br/> <br/>Additionally, I co-drafted the game concept and the way the demon interacts with the player at the brain-storming stage. You can check out the <a href='https://github.com/peck2703/Halloween-GameJam'>source files here</a> and <a href='https://peck2703.itch.io/the-ritual'>the final result here.</a>",
        type: 'youtube',
        media: ['MAGjUBtF2vw'],
      },
    ],
  },

  {
    id: 5,
    name: 'Not Enough Combat',
    type: 'nec',
    source:
      'https://github.com/SubliminallySublime/-MCMOD-1.12.2-Not-Enough-Combat',
    sourceText: 'Source Files (GitHub)',
    link: 'https://www.curseforge.com/minecraft/mc-mods/not-enough-combat',
    date: 'Since Aug 2018',
    aaOff: true,
    fallbackImage: 'assets/res/projects/nec/eo.gif',
    displayMediaPath: 'assets/res/projects/nec/eo.gif',
    background:
      'radial-gradient(circle, rgba(183, 248, 237, 1) 0%, rgba(44, 205, 177, 1) 12%, rgba(34, 129, 113, 1) 28%, rgba(51, 52, 82, 1) 45%, rgba(53, 60, 89, 1) 71%, rgba(25, 29, 44, 1) 100%)',
    description:
      'Not Enough Combat is a mod for Minecraft (versions 1.7.10 - 1.18.2) that adds in armor for other mod added ores. Obsidian and Ender Obsidian armor and tools provide a unique vanilla end game experience.',
    showcases: [
      {
        header: 'Background',
        textAbove:
          'Written in Java with the Minecraft Forge API, Not Enough Combat (NEC) was my first mod for any game. It was originally designed for my friend who wanted more weapons to craft to give him something else to do. While I was developing the basic tools and armor, I had another idea: a special type of armor that gave you powers like those of the Enderman. Thus, I designed and created Ender Obsidian armor and tools which are a great end-game reward. <br/> <br/> Below is a video walkthrough for the mod that I made for any users.',
        type: 'youtube',
        media: ['M4dsktHFay4'],
      },
    ],
  },

  {
    id: 6,
    name: 'City Builder',
    date: 'Since Dec 2020',
    aaOff: false,
    displayMediaPath: 'assets/res/projects/citybuilder/cb-bg.mp4',
    fallbackImage: 'assets/res/projects/citybuilder/cb-bg.webp',
    description:
      'CityBuilder is a co-op, citybuilding economic sim with real time strategy elements. At the moment, the basic features of a city builder are in place: place, move, delete, rotate. Currently, I am working on a decal-based road system.',
    showcases: [
      {
        header: 'Backstory and Demo',
        textAbove:
          "I am a huge fan of city builders. CityBuilder is a side project I started to reinforce my understanding of multiplayer in UE4, as well as try out a new form of development. Various states and managers use UE4 replication to keep the game in sync. Like GhostGame, CityBuilder has taken on it's own idea, and I have detailed plans for it that would make it a unique city builder complete with elements from games I have enjoyed in the past.",
        type: 'youtube',
        media: ['xU7SdGuVlNQ'],
      },
    ],
  },
];
