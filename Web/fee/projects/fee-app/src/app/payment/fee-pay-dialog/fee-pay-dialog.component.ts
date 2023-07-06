import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentPaymentModel } from '../model/student-payment.model';
@Component({
  selector: 'app-fee-pay-dialog',
  templateUrl: './fee-pay-dialog.component.html',
  styleUrls: ['./fee-pay-dialog.component.scss']
})
export class FeePayDialogComponent {
payment: StudentPaymentModel
constructor(@Inject(MAT_DIALOG_DATA) public data: StudentPaymentModel){
  this.payment = data;
}

}
