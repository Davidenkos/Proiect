import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { ElectorNewComponent } from './elector/elector-new/elector-new.component';
import { ElectorListComponent } from './elector/elector-list/elector-list.component';



const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent, 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'elector',
    component: ElectorNewComponent
  },
  {
    path: 'elector-list',
    component: ElectorListComponent
  }, 
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
