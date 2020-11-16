import { Injectable } from '@angular/core';

import { Project, Program, Language } from './data/Project';

import ProgramsData from './data/programs.json';
import LanguagesData from './data/languages.json';
import ProjectsGamesData from './data/projects-games.json';
import ProjectsAppsData from './data/projects-apps.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {

  lanuages: Language[];
  programs: Program[];
  projectGames: Project[];
  projectApps: Project[];

  getLanguages(): Language[] {
    return this.lanuages;
  }

  getPrograms(): Program[] {
    return this.programs;
  }

  getProjectGames(): Project[] {
    return this.projectGames;
  }

  getProjectApps(): Project[] {
    return this.projectApps;
  }

  constructor() { 
    //Load languages
    this.lanuages = [];
    LanguagesData.forEach(element => {
      let language = new Language(
          element.name,
          element.icon
      );

      this.lanuages.push(language);
    });

    //Load languages
    this.programs = [];
    ProgramsData.forEach(element => {
      let program = new Program(
          element.name,
          element.icon
      );

      this.programs.push(program);
    });

    //Load projects
    this.projectGames = [];
    ProjectsGamesData.forEach(element => {
      let project = new Project(
        element.projectName,
        element.imageResLoc,
        element.programsUsed,
        element.languages,
        element.description,
        element.dateStart,
        element.dateEnd,
        element.linkTo,
        element.priority,
        element.aa,
        element.isMovieShowcase,
        this
      );

      this.projectGames.push(project);
    });

    //Load projects
    this.projectApps = [];
    ProjectsAppsData.forEach(element => {
      let project = new Project(
        element.projectName,
        element.imageResLoc,
        element.programsUsed,
        element.languages,
        element.description,
        element.dateStart,
        element.dateEnd,
        element.linkTo,
        element.priority,
        element.aa,
        element.isMovieShowcase,
        this
      );

      this.projectApps.push(project);
    });
  }
}
