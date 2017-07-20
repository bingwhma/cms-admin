import { Component, OnInit } from '@angular/core';
// 获取Observable服务
import { Observable } from 'rxjs/Observable';

import { TabledataService, TabData } from '../../common/tabledata.service'

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  providers: [TabledataService] // 实例化服务
})
export class TablesComponent implements OnInit {

  private rxjsData: TabData[];
  private promiseData: TabData[];
  private errorMessage: string;

  constructor(private service: TabledataService) { 
    this.rxjsData = null;
  }

  ngOnInit():void{

    // // 获得Obervable对象并进行订阅
    this.service.fetchTabldata().subscribe(
      // 获取数据并保存在this.rxjsDate中
      datas => {
        console.log('fetch data from service' + datas);
        this.rxjsData = datas;
      },
      // 获取错误信息并保存在this.errorMessage中
      error => this.errorMessage = <any>error);

      this.service.fetchTabls().then(res => this.promiseData = res.json());

      // this.rxjsData = this.service.fetchMockData()
  }

}
