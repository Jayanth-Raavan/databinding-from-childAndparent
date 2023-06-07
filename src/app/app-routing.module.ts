import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './gaurd/auth.guard';
import { RoleGuard } from './gaurd/role.guard';

const routes: Routes = [

  {path:"",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"contact",component:ContactComponent,canActivate:[RoleGuard]},
  {path:"user",component:UserComponent,canActivate:[RoleGuard]},
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
