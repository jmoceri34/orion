import { Component, OnInit } from '@angular/core';

export class WorkRequest {
  ID: number;
  subject: string;
  type: string;
  priority: string;
  message: string;
  from: string;
}

@Component({
  selector: 'app-work-requests',
  templateUrl: './work-requests.component.html',
  styleUrls: ['./work-requests.component.css']
})
export class WorkRequestsComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'subject', 'type', 'priority'];
  dataSource: WorkRequest[] = [
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

  constructor() { }

  ngOnInit() {
  }

}
