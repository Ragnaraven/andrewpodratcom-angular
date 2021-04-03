import { Project } from './project';

export const APPS: Project[] = [
 
  { id: 1, 
    name: "SiegeStarterIcons.com", 
    link: "siegestarericons.com",
    source: "https://github.com/Ragnaraven/siegestartericons.com",
    sourceText: "Source (GitHub)",
    linkTo: "https://siegestartericons.com/",
    linkToText: "Link",
    date: "Since Mar 2017", 
    aaOff: false, 
    style: "customImageWrapper", 
    imageOrMovieBGPath: "assets/res/projects/ssi/ssi.png", 
    fallbackImage: "assets/res/projects/ssi/ssi.png", 
    customStyleData: "ssi", 
    description: "SiegeStarterIcons.com was my first website that allows users to make basic Uplay icons for Ubisoft's Tom Clany's Rainbow Six: Siege. Created with HTML, CSS, and JS and jQuery.",
    showcases: [ ]
  },

  { id: 2, 
    name: "Modern Alarm Clock", 
    link: "mac",
    source: "",
    sourceText: "",
    linkTo: "",
    linkToText: "",
    date: "Since 2014", 
    aaOff: false, 
    style: "customMAC", 
    imageOrMovieBGPath: "", 
    fallbackImage: "", 
    customStyleData: "", 
    description: "Modern Alarm Clock is a Java Android alarm app. This was my first exposure to advanced UI and UX design and I am very happy with the original UI displayed in the showcase.",
    showcases: [ 
      {
        header: "UI Demo",
        mediaHeader: "",
        textAbove: "Below is a simple UI demo for my Android app. All designs, animations and interactions are either original or are provided by default by the Android SDK.",   
        textBelow: "",       
        type: "youtube",
        media: ['lUPHyaaRL30'],
        extras: []
      },
    ]
  },

  { id: 3, 
    name: "AndrewPodrat.com", 
    link: "andrewpodrat.com",
    source: "https://github.com/Ragnaraven/andrewpodratcom-angular",
    sourceText: "Source Code (GitHub)",
    linkTo: "",
    linkToText: "",
    date: "Since Feb 2021", 
    aaOff: false, 
    style: "customImageWrapper", 
    imageOrMovieBGPath: "assets/res/signature.svg", 
    fallbackImage: "assets/res/signature.svg", 
    customStyleData: "apcom", 
    description: "You're here! AndrewPodrat.com is written with Angular 11, a bit of jQuery and a few libraries to bring together all of the projects displayed here. Angular packages used include lightbox, 3js, gh-pages.",
    showcases: [    ]
  },
];
