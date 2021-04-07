import { Component, OnInit } from '@angular/core';
import { ApplicationLog } from '../application-log.model';
import { Application } from '../applications.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-application-view',
  templateUrl: './application-view.component.html',
  styleUrls: ['./application-view.component.css']
})
export class ApplicationViewComponent implements OnInit {

  application: Application;

  displayedApplicationLogColumns: string[] = ['ID', 'message'];
  applicationLogDataSource: ApplicationLog[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];


    switch (Number(id)) {
      case 1:
        this.application = {
          ID: 1,
          name: 'Lifeson',
          type: 'Web Application',
          musicalReference: 'Alex Lifeson from Rush',
          musicalReferenceLink: 'https://en.wikipedia.org/wiki/Alex_Lifeson',
          description: 'Processes email requests',
          status: 'Online',
          lastActivity: '< 1 min'
        };
        this.applicationLogDataSource = [
          {
            ID: 3,
            message: 'Sally sent a new email request to Cygnus X1'
          },
          {
            ID: 2,
              message: 'Ness sent an existing email request to Cygnus X1'
          },
          {
            ID: 1,
              message: 'Thomas sent a new email request to Cygnus X1'
          },
        ];
        break;
      case 2:
        this.application = {
          ID: 2,
          name: 'Lee',
          type: 'Web Application',
          musicalReference: 'Geddy Lee from Rush',
          musicalReferenceLink: 'https://en.wikipedia.org/wiki/Geddy_Lee',
          description: 'Creates new email requests',
          status: 'Online',
          lastActivity: '5 mins ago'
        };
        this.applicationLogDataSource = [
          {
            ID: 3,
            message: 'Sally created a new email request'
          },
          {
            ID: 2,
            message: 'Thomas created a new email request'
          },
          {
            ID: 1,
            message: 'Jeff created a new email request'
          },
        ];
        break;
      case 3:
        this.application = {
          ID: 3,
          name: 'Telephone Line',
          type: 'Service',
          musicalReference: 'Telephone Line by Eletric Light Orchestra',
          musicalReferenceLink: 'https://en.wikipedia.org/wiki/Telephone_Line_(song)',
          description: 'Receives new email requests',
          status: 'Running',
          lastActivity: '< 5 mins'
        };
        this.applicationLogDataSource = [
          {
            ID: 3,
            message: 'New email request received by Poo'
          },
          {
            ID: 2,
            message: 'New email request received by Monotoli'
          },
          {
            ID: 1,
            message: 'New email request received by Paula'
          },
        ];
        break;
    }
  }

}
