import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShowBannerService {

  showBanner:Subject<boolean> = new Subject();
  constructor() {
    this.showBanner.next(false);
   }

  changeState(isShow:boolean){
    console.log("change value: " + isShow)
    this.showBanner.next(isShow);
  }

}
