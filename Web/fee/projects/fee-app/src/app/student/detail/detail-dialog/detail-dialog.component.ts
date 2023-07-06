import { Component, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IStudentFeeOverview } from '../../../model/student-fee-overview';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss']
})
export class DetailDialogComponent {
  studentId : string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IStudentFeeOverview){
    this.studentId = data.studentId;
  }

}
