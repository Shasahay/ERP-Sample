import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FeePaymentComponent } from './fee-payment/fee-payment.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { FeePayDialogComponent } from './fee-pay-dialog/fee-pay-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { YearMonthFilterComponent } from './year-month-filter/year-month-filter.component';
import { PayFeeComponent } from './pay-fee/pay-fee.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    FeePaymentComponent,
    FeePayDialogComponent,
    YearMonthFilterComponent,
    PayFeeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [DatePipe]
})
export class PaymentModule { }
