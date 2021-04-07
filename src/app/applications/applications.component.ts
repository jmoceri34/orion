import { Component, OnInit } from '@angular/core';

export interface Application {
  ID: number;
  name: string;
  type: string;
  description: string;
  status: string;
  lastActivity: string;
  musicalReference: string;
  musicalReferenceLink: string;
}

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  displayedApplicationColumns: string[] = ['ID', 'name', 'type', 'description', 'status', 'lastActivity'];
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

  constructor() { }

  ngOnInit() {
  }

}
