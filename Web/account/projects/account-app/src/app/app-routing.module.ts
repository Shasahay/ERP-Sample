import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeeComponent } from './student/fee/fee.component';
import { SetstudentFeeComponent } from './student/setstudent-fee/setstudent-fee.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'student/set-fee', component:SetstudentFeeComponent},
  {path:'student/fee', component:FeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
