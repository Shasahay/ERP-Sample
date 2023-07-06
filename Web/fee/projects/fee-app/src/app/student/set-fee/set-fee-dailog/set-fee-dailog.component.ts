import { Component, Inject } from '@angular/core';
import { StudentSetFeeView } from '../../model/student-set-fee-view';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-set-fee-dailog',
  templateUrl: './set-fee-dailog.component.html',
  styleUrls: ['./set-fee-dailog.component.scss']
})
export class SetFeeDailogComponent {

  feeDetail: StudentSetFeeView;

  constructor(@Inject(MAT_DIALOG_DATA) public data: StudentSetFeeView){
    this.feeDetail = data;
  }
}
