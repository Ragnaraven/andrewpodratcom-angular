import { Project } from './project';

export const APPS: Project[] = [
 
  { id: 1, 
    name: "andrewpodrat.com", 
    link: "andrewpodrat.com",
    source: "https://github.com/Ragnaraven/andrewpodratcom-angular",
    sourceText: "Source (GitHub)",
    linkTo: "",
    linkToText: "",
    date: "Since Feb 2021", 
    aaOff: false, 
    style: "customImageWrapper", 
    imageOrMovieBGPath: "assets/res/signature.svg", 
    fallbackImage: "assets/res/signature.svg", 
    customStyleData: "apcom", 
    description: "AndrewPodrat.com is written with Angular 11, a bit of jQuery and a few libraries to bring together all of the projects displayed here.",
    showcases: [
      {
        header: "",
        mediaHeader: "",
        textAbove: "You're here! Take a look around.",   
        textBelow: "Made by hand with Angular 11 and a bit of jQuery. Angular packages used include lightbox, 3js, gh-pages.",       
        type: "none",
        media: [''],
        extras: []
      },
    ]
  },

  { id: 2, 
    name: "SiegeStarterIcons.com", 
    link: "siegestarericons.com",
    source: "https://github.com/Ragnaraven/siegestartericons.com",
    sourceText: "Source (GitHub)",
    linkTo: "https://siegestartericons.com/",
    linkToText: "Link",
    date: "Since Mar 2017", 
    aaOff: false, 
    style: "standard", 
    imageOrMovieBGPath: "assets/res/signature.svg", 
    fallbackImage: "assets/res/signature.svg", 
    customStyleData: "", 
    description: "AndrewPodrat.com is written with Angular 11, a bit of jQuery and a few libraries to bring together all of the projects displayed here.",
    showcases: [
      {
        header: "",
        mediaHeader: "",
        textAbove: "You're here! Take a look around.",   
        textBelow: "Made by hand with Angular 11 and a bit of jQuery. Angular packages used include lightbox, 3js, gh-pages.",       
        type: "none",
        media: [''],
        extras: []
      },
    ]
  },

];
