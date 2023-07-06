import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';
import {MatExpansionModule} from '@angular/material/expansion';


const dRoutes: Routes = [
  {path:'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatExpansionModule,
    RouterModule.forRoot(dRoutes),
  ]
})
export class DashboardModule { }
