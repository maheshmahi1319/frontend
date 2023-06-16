import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { PowerUserComponent } from './power-user/power-user.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [						
    AppComponent,
      LoginComponent,
      DashboardComponent,
      AdminComponent,
      SuperAdminComponent,
      PowerUserComponent,
      UserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
LoginComponent
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
