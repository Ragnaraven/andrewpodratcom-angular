export interface Project {
  type?: string;
  image?: string;
  backgroundColor?: string;

  name: string;
  dates: string;
  description: string;
  source?: string;
  link?: string;
}

export let projects: Project[] = [
  {
    type: 'signature',
    backgroundColor: '#000000',

    name: 'AndrewPodrat.com',
    dates: 'Since 2020',
    description:
      "My personal project portfolio and resume wrapper. You're here!",
    source: 'https://github.com/Ragnaraven/andrewpodratcom-angular',
    link: 'https://andrewpodrat.com',
  },
  {
    image: 'justajelly.gif',
    backgroundColor: '#05031e',

    name: 'JustAJelly.com',
    dates: 'August 2022',
    description: 'A musical portfolio for a friend of mine.',
    source: 'https://github.com/Ragnaraven/justajellycom',
    link: 'https://justajelly.com',
  },
  {
    type: 'MAC',

    name: 'Modern Alarm Clock',
    dates: 'Since 2022',
    description: 'A kotlin Android alarm app with a nifty UI.',
  },
  {
    image: 'siegestartericons.png',
    backgroundColor: '#000000',

    name: 'SiegeStarterIcons.com',
    dates: 'Since Mar 2017',
    description:
      "A site made to help players create starter icons for Ubisoft's Tom Clancys Rainbow Six Siege. This was my first released project.",
    source: 'https://github.com/Ragnaraven/siegestartericons.com',
    link: 'https://siegestartericons.com/',
  },
];
