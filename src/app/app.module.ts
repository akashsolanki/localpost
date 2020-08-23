import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { SignupserviceService } from './component/signup/signupservice.service';
import { HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [SignupserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
