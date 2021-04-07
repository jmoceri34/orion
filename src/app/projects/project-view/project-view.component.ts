import { Component, OnInit } from '@angular/core';
import { Project } from '../projects.component';
import { ProjectActivity } from '../project-activity.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  project: Project;

  displayedProjectActivityColumns: string[] = ['ID', 'message'];
  projectActivityDataSource: ProjectActivity[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];


    switch (Number(id)) {
      case 1:
        this.project = {
          ID: 1,
          name: 'Hall and Oates',
          type: 'Service',
          description: 'Send Emails',
          status: 'In Progress',
          requirementsMet: '3/5 met',
          lastActivity: 'Commit: Added test project',
          musicalReference: undefined,
          musicalReferenceLink: 'https://en.wikipedia.org/wiki/Hall_%26_Oates'
        };
        this.projectActivityDataSource = [
          {
            ID: 3,
            message: 'Commit: Added test project'
          },
          {
            ID: 2,
            message: 'Commit: Created initial project'
          },
          {
            ID: 1,
            message: 'Project accepted'
          },
        ];
        break;
    }
  }

}
