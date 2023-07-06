import { Component, Input, OnInit } from '@angular/core';
import { StudentSetFeeView } from '../../model/student-set-fee-view';
import { TransportFeeModel } from '../model/transport-fee.model';
import { TutionFeeModel } from '../model/tution-fee.model';

@Component({
  selector: 'app-set-fee-dailog-view',
  templateUrl: './set-fee-dailog-view.component.html',
  styleUrls: ['./set-fee-dailog-view.component.scss']
})
export class SetFeeDailogViewComponent implements OnInit {
  
  isLinear = false;
  @Input() feeDetail: StudentSetFeeView

  tutionFeeDetail: TutionFeeModel;
  transportFeeDetails: TransportFeeModel;

  ngOnInit(): void {
   this.initTutionFee();
  }

  initTutionFee(): TutionFeeModel{
    if( this.feeDetail != undefined || this.feeDetail == null){
      this.tutionFeeDetail = new TutionFeeModel();
      this.tutionFeeDetail.studentId = this.feeDetail.studentId;
      this.tutionFeeDetail.tutionFee = this.feeDetail.tutionFee;
      this.tutionFeeDetail.discountType = this.feeDetail.tutionFeeDiscountType;
      this.tutionFeeDetail.discountUnit = this.feeDetail.tutionFeeDiscount;
      this.tutionFeeDetail.computedTutionFee = this.feeDetail.computedTutionFee;
    }

    
    return this.tutionFeeDetail;
  }

}
