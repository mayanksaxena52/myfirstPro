import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { AppRoutingModule } from './app.routing';
@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,ReactiveFormsModule ],
  declarations: [ AppComponent ,LoginComponent,RegisterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
