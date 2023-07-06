import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetFeeComponent } from './class/set-fee/set-fee.component';
import { FeePaymentComponent } from './payment/fee-payment/fee-payment.component';
import { FeeReportComponent } from './report/fee-report/fee-report.component';
import { DetailComponent } from './student/detail/detail.component';
import { SetFeeViewComponent } from './student/set-fee/set-fee-view/set-fee-view.component';

const routes: Routes = [
  {path:'', component:DetailComponent },
  {path:'student/fee-detail', component:DetailComponent },
  {path:'student/set-student-fee', component:SetFeeViewComponent },
  {path:'class/set-class-fee', component:SetFeeComponent },
  {path:'payment/student-fee', component:FeePaymentComponent },
  {path:'report/fee-report', component:FeeReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
