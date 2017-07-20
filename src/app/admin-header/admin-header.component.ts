import { Component, OnInit, Input } from '@angular/core';
import {ShowBannerService} from '../show-banner.service'

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  showBanner:boolean = false;

  constructor(private service:ShowBannerService) { 
    this.service.showBanner.subscribe(isShow => {
      console.log('value is :' + isShow);
      this.showBanner = isShow;
    });
  }

  ngOnInit() {
    
  }

}
