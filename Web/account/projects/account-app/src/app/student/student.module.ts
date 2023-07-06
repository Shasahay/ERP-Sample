import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeeComponent } from './fee/fee.component';
import { RouterModule, Routes } from '@angular/router';
import { SetstudentFeeComponent } from './setstudent-fee/setstudent-fee.component';
import { SetclassFeeComponent } from './setclass-fee/setclass-fee.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { PayFeeComponent } from './pay-fee/pay-fee.component';
//import { DueFeeComponent } from './dues-fee/dues-fee.component';
import { DetailFeeComponent } from './detail-fee/detail-fee.component';
import { CoreModule } from '../core/core.module';

const sRoute: Routes = [
  //{path:'', component:SetstudentFeeComponent},
  {path:'student/set-fee', component:SetstudentFeeComponent},
]

@NgModule({
  declarations: [
    FeeComponent,
    SetstudentFeeComponent,
    SetclassFeeComponent,
    FeeStructureComponent,
    PayFeeComponent,
    //DueFeeComponent,
    DetailFeeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(sRoute)
  ]
})
export class StudentModule { }
