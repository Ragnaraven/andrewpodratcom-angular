import { Showcase} from '../../showcase'

export interface ProjectGame {
    name: string;
    date: string;
    description: string;
    link: string;
    source: string;
    sourceText: string;
    linkTo: string;
    linkToText: string;

    id: number;
    aaOff: boolean;
    style: string;
    imageOrMovieBGPath: string;
    customStyleData: string;

    showcases: Showcase[];

  }
  