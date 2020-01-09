import { UserdetailsComponent } from './userdetails/userdetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Details',
    component: UserdetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
