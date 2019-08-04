import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { UserModule } from '../app/user/user.module';


const routes: Routes = [
  // {path: 'login', component: LoginComponent},
  { path: 'users', loadChildren: '../app/user/user.module#UserModule'}
  // {path: '', loadChildren: () => UserModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
