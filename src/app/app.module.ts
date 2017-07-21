import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

  import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';

import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { LoginComponent } from './login/login.component';

import { AdminMainModule } from './admin-main/admin-main.module'

import { ShowBannerService } from './show-banner.service';

  // 定义常量 路由 
   const appRoutes:Routes = [
     {path: '', component: LoginComponent},
    //  {path: 'login', component: LoginComponent},
     {
       path: 'main',
       loadChildren: './admin-main/admin-main.module#AdminMainModule'
      //  component: AdminMainComponent,
      //  children: [
      //     { path: 'dashboard', component: DashboardComponent },
      //     { path: 'tables', component: TablesComponent },
      //     {  path: '**', component: DashboardComponent }
      //   ]
      }
   ];

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminMainModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ShowBannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
