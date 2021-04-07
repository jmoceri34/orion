import { Component, OnInit } from '@angular/core';

export interface Project {
  ID: number;
  name: string;
  type: string;
  description: string;
  status: string;
  requirementsMet: string;
  lastActivity: string;
  musicalReference: string;
  musicalReferenceLink: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  displayedProjectsColumns: string[] = ['ID', 'name', 'description', 'lastActivity'];
  projectsDataSource: Project[] = [
    {
      ID: 1,
      name: 'Hall and Oates',
      type: 'Service',
      description: 'Send Emails',
      status: 'In Progress',
      requirementsMet: '3/5 met',
      lastActivity: 'Commit: Added test project',
      musicalReference: undefined,
      musicalReferenceLink: 'https://en.wikipedia.org/wiki/Hall_%26_Oates'
    }
  ]; 

  constructor() { }

  ngOnInit() {
  }

}
