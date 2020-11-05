import { ProjectsServiceService } from '../projects-service.service';

export class Project {
    projectName: string;
    imageResLoc: String;
    programsUsed: Program[];
    languages: Language[];
    description: string;
    dateStart: string;
    dateEnd: string;
    linkTo: string;
    priority: number;
    aa: number;
    isMovieShowcase: boolean;

    constructor(
        _projectName: string,
        _imageResLoc: String,
        _programsUsed: Program[],
        _languages: Language[],
        _description: string,
        _dateStart: string,
        _dateEnd: string,
        _linkTo: string,
        _priority: number,
        _aa: number,
        _isMovieShowcase: boolean,
        _projectsService: ProjectsServiceService)
    { 
        this.projectName = _projectName;
        this.imageResLoc = _imageResLoc;
        this.programsUsed = [];
        this.languages = [];
        this.description = _description;
        this.dateStart = _dateStart;
        this.dateEnd = _dateEnd;
        this.linkTo = _linkTo;
        this.priority = _priority;
        this.aa = _aa == undefined ? 1 : _aa;
        this.isMovieShowcase = _isMovieShowcase == undefined ? false : _isMovieShowcase;

        this.processProgramsUsed(_projectsService, _programsUsed);//this.programsUsed = _programsUsed; 
        this.processLanguages(_projectsService, _languages);//this.languages = _languages;
    }

    processProgramsUsed (_projectsService: ProjectsServiceService, obj: any[]) 
    {
        if(obj != undefined)
        {
            obj.forEach(proj => {
                _projectsService.getPrograms().forEach(program => {
                    if(proj.toLowerCase().replace(/\s+/g, "") == program.name.toLowerCase().replace(/\s+/g, ""))
                        this.programsUsed.push(program);
                });
            });
        }
    }

    processLanguages (_projectsService: ProjectsServiceService, obj: any[]) 
    {
        if(obj != undefined)
        {
            obj.forEach(proj => {
                _projectsService.getLanguages().forEach(language => {
                    if(proj.toLowerCase().replace(/\s+/g, "") == language.name.toLowerCase().replace(/\s+/g, ""))
                        this.languages.push(language);
                });
            });
        }
    }

    getStartEndDateFormatted ()
    {
        let result: string = "";

        //Add start
        if(this.dateStart.length > 3)
        {
            result += this.dateStart;
            
            //And hyphen if needed or Since
            if(this.dateEnd.length > 3)
                result += " - ";
            else 
                result = "Since " + result;
        }

        //Add end if needed
        if(this.dateEnd.length > 3)
            result += this.dateEnd;

        return result;
    }

}

export class Program {
    name: string;
    icon: string;

    constructor(
        _name: string,
        _icon: string
    )
    {
        this.name = _name;
        this.icon = _icon;
    }
}

export class Language {
    name: string;
    icon: string;

    constructor(
        _name: string,
        _icon: string
    )
    {
        this.name = _name;
        this.icon = _icon;
    }
}