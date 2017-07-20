import { Injectable } from '@angular/core';
// 获取Http服务
import { Http, Response } from '@angular/http';
// 获取Observable服务
import { Observable } from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

export class TabData {
  rendering: string;
  Browser: string;
  Platform: string;
  version: string;
  grade: string;
}

@Injectable()
export class TabledataService {

  private mockData: TabData[] = [
    {"rendering": "rendering", "Browser": "Browser", "Platform": "Platform", "version": "version", "grade": "grade"},
    {"rendering": "rendering", "Browser": "Browser", "Platform": "Platform", "version": "version", "grade": "grade2"}
  ];

   // 设置获取数据的地址，这里我们使用本地的json文件模拟
  private dataUrl: string = 'http://localhost:3000/fetchtabs';


  constructor(private http: Http) { }

  public fetchMockData():TabData[] {
    return this.mockData;
  }

  public syncFetch() {
    let xx = this.http.get(this.dataUrl).toPromise();
    let data: any;
    xx.then(res => {
      console.log(res.json());
      data = res.json();
    });

  }

  public fetchTabls():Promise<any> {
    return this.http.get(this.dataUrl).toPromise();
  }

  // 定义方法，用于获取Observable服务
  public fetchTabldata():Observable<any> {

    // console.log("mockData2 before: " + this.mockData2)
    // this.http.get(this.dataUrl).subscribe(res=> this.mockData2 =res.json());
    // console.log("mockData2 after: " + this.mockData2)

    // console.log("mockData3 before: " + this.mockData3)
    // this.http.get(this.dataUrl).map(res => {
    //   console.log('map: ' + res.json());
    //   return res.json();
    // }).subscribe(v=> {
    //   console.log('subscribe: ' + v);
    //   return this.mockData3 = v;
    // });
    // console.log('mockData3 after: ' + this.mockData3);

    // 使用angular的http服务获取数据，默认返回observable
    return this.http.get(this.dataUrl)
      // 响应数据是JSON字符串格式的。 我们必须把这个字符串解析成JavaScript对象
      .map(res => res.json())
      // 异常的捕获并进行处理
      .catch(this.handleError);
  }
  // 定义私有方法来处理异常
  private handleError(error: any) {
    // 我们的服务处理器(handleError)把响应对象记录到控制台中
    // 把错误转换成对用户友好的消息，并且通过Observable.throw来
    // 把这个消息放进一个新的、用于表示“失败”的可观察对象
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // 输出异常信息
    return Observable.throw(errMsg);
  }

}
