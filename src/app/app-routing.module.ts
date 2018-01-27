import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    data: {
      title: 'Welcome to Pokécosmos!'
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
