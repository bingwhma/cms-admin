import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

  import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';

import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { LoginComponent } from './login/login.component';
import { ShowBannerService } from './show-banner.service';
import { LeftPanelComponent } from './admin-main/left-panel/left-panel.component';
import { RightPanelComponent } from './admin-main/right-panel/right-panel.component';
import { TablesComponent } from './admin-main/tables/tables.component';
import { DashboardComponent } from './admin-main/dashboard/dashboard.component';

  // 定义常量 路由 
   const appRoutes:Routes = [
     {path: '', component: LoginComponent},
     {path: 'login', component: LoginComponent},
     {
       path: 'main',
       component: AdminMainComponent,
       children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'tables', component: TablesComponent },
          {  path: '**', component: DashboardComponent }
        ]
      }
   ];

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminMainComponent,
    LoginComponent,
    LeftPanelComponent,
    RightPanelComponent,
    TablesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShowBannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
