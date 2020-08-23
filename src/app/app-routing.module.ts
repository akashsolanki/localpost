import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/footer/footer.component';

const routes: Routes = [


  {
    path: '' , redirectTo: 'body', pathMatch: 'full'
  },


 
  {
    path: 'body' , component:BodyComponent
  },

  {
    path: 'footer', component:FooterComponent
  },
  {
    path: 'login', component:LoginComponent
  },
  {
    path: 'signup' , component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
