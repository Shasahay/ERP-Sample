import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetFeeModule } from './set-fee/set-fee.module';
import { DetailModule } from './detail/detail.module';
 
@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    SetFeeModule,
    DetailModule
  ]
})
export class StudentModule { }
