import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import the material module which denfine by yourself. 
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InnovationDialogComponent } from './innovation-dialog/innovation-dialog.component';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { LoginComponent } from './login/login.component';
let route = [{
  path: "dashboard", component: DashboardComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InnovationDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(route),
    HttpModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
