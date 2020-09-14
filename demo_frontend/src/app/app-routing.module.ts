import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: "dashboard", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatFormFieldModule],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
