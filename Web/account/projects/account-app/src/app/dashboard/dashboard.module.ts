import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes } from '@angular/router';

const dRoute: Routes=[
 // {path:'', component}
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
