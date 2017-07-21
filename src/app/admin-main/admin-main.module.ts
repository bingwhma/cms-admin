import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  import {RouterModule, Routes} from "@angular/router";

import { AdminFooterComponent } from '../admin-footer/admin-footer.component';
import { AdminMainComponent } from '../admin-main/admin-main.component';
import { LeftPanelComponent } from '../admin-main/left-panel/left-panel.component';
import { RightPanelComponent } from '../admin-main/right-panel/right-panel.component';
import { TablesComponent } from '../admin-main/tables/tables.component';
import { DashboardComponent } from '../admin-main/dashboard/dashboard.component';
import {TabledataService} from '../common/tabledata.service'

 // 定义常量 路由 
   const mainRouter:Routes = [
     {
       path: 'main', component: AdminMainComponent,
       children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'tables', component: TablesComponent },
          {  path: '**', component: DashboardComponent }
        ]
      }
   ];
   
@NgModule({
  declarations: [
    AdminFooterComponent,
    AdminMainComponent,
    LeftPanelComponent,
    RightPanelComponent,
    TablesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRouter)
  ],
  providers: [],
  exports:[
    // AdminMainComponent,
    // AdminFooterComponent,
    // LeftPanelComponent,
    // RightPanelComponent,
    // TablesComponent,
    // DashboardComponent
  ]
})
export class AdminMainModule { }
