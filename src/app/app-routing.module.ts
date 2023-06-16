import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PowerUserComponent } from './power-user/power-user.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent },
    { path: 'power-user', component: PowerUserComponent },
    { path: 'super-admin', component: SuperAdminComponent },

    // { path: 'logout', component: LogoutComponent },
    // { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '',  redirectTo: '/login', pathMatch: 'full' }, // catch all route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
