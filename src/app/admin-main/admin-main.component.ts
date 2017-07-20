import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ShowBannerService } from '../show-banner.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  constructor(private service: ShowBannerService) { }

  ngOnInit() {
    this.service.changeState(true);
  }

}
