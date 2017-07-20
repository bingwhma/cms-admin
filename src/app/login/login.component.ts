import { Component, OnInit } from '@angular/core';
import {ShowBannerService} from '../show-banner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ShowBannerService) { 
  }

  ngOnInit() {
    this.service.changeState(false);
  }

}
