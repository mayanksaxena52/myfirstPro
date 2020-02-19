import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { ListComponent } from './list/list.component';
import { SideNav } from './sidenav/sidenav.component';
const routes: Routes = [
   { path: "", redirectTo: 'login', pathMatch: "full" },
    { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
      { path: 'list', component: ListComponent },
      { path: 'sidenav', component: SideNav }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })

export class AppRoutingModule {}