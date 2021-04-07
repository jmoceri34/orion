import { Component, OnInit } from '@angular/core';
import { WorkRequest } from '../work-requests/work-requests.component';
import { Application } from '../applications/applications.component';
import { Project } from '../projects/projects.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'subject', 'type', 'priority'];
  displayedApplicationColumns: string[] = ['ID', 'name', 'type', 'description', 'status', 'lastActivity'];
  displayedProjectsColumns: string[] = ['ID', 'name', 'description', 'lastActivity'];
  workRequestDataSource: WorkRequest[] = [
      {
          ID: 1,
          subject: 'Need help setting up computer',
          type: 'Technical Support',
          priority: 'Moderate',
          message: undefined,
          from: undefined
      },
      {
          ID: 2,
          subject: 'Help! No audio from headset',
          type: 'Technical Support',
          priority: 'Low',
          message: undefined,
          from: undefined
      },
      {
          ID: 3,
          subject: 'Setup chromecast in new meeting room',
          type: 'Technical Support',
          priority: 'Low',
          message: undefined,
          from: undefined
      }
  ];

  applicationDataSource: Application[] = [
      {
          ID: 1,
          name: 'Lifeson',
          type: 'Web Application',
          description: 'Processes email requests',
          status: 'Online',
          lastActivity: '< 1 min',
          musicalReference: undefined,
          musicalReferenceLink: undefined
      },
      {
          ID: 2,
          name: 'Lee',
          type: 'Web Application',
          description: 'Creates new email requests',
          status: 'Online',
          lastActivity: '5 mins ago',
          musicalReference: undefined,
          musicalReferenceLink: undefined
      },
      {
          ID: 3,
          name: 'Telephone Line',
          type: 'Service',
          description: 'Receives new email requests',
          status: 'Running',
          lastActivity: '< 5 mins',
          musicalReference: undefined,
          musicalReferenceLink: undefined
      },
  ];

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
