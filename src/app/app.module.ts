
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { ListComponent } from './list/list.component';
import { SideNav } from './sidenav/sidenav.component';
import { RegisterComponent } from './register.component';
import { AppRoutingModule } from './app.routing';
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxNavigationDrawerModule,
	IgxRippleModule,
	IgxToggleModule
 } from "igniteui-angular";
@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,ReactiveFormsModule,AngularMaterialModule,BrowserAnimationsModule,IgxButtonModule,
	IgxIconModule,
	IgxNavigationDrawerModule,
	IgxRippleModule,
	IgxToggleModule ],
  declarations: [ AppComponent ,LoginComponent,RegisterComponent,ListComponent,SideNav],
  bootstrap:    [ AppComponent ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
   providers: [],
  entryComponents: []
})
export class AppModule { }
