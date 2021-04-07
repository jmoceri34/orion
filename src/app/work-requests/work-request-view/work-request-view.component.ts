import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkRequest } from '../work-requests.component';

@Component({
  selector: 'app-work-request-view',
  templateUrl: './work-request-view.component.html',
  styleUrls: ['./work-request-view.component.css']
})
export class WorkRequestViewComponent implements OnInit {

  workRequest: WorkRequest;
  workRequestUpdateMessage: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];


    switch (Number(id)) {
      case 1:
        this.workRequest = {
          ID: 1,
            subject: 'Need help setting up computer',
          message: 'Computer is not letting me access the hub, please help',
          from: 'Abby Accounts',
          type: 'Technical Support',
          priority: 'Moderate'
        };
        break;
      case 2:
        this.workRequest = {
          ID: 2,
          subject: 'Help! No audio from headset',
          message: 'I tried restarting the computer, it didn\'t work. No matter what I do it\'s always mute. Help!!',
          from: 'Abraham Agent',
          type: 'Technical Support',
          priority: 'Low'
        };
        break;
      case 3:
        this.workRequest = {
          ID: 3,
          subject: 'Setup chromecast in new meeting room',
          message: 'We want to upgrade chromecast in the new meeting room, can one of you please come help?',
          from: 'Sally Sales',
          type: 'Technical Support',
          priority: 'Low'
        };
        break;
    }

  }

}
