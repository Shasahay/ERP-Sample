import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { StudentSearchService } from '../../shared/service/student-search.service';
import { StudentPaymentModel } from '../model/student-payment.model';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { FeePayDialogComponent } from '../fee-pay-dialog/fee-pay-dialog.component';
@Component({
  selector: 'app-fee-payment',
  templateUrl: './fee-payment.component.html',
  styleUrls: ['./fee-payment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeePaymentComponent implements OnInit {

  constructor(private _sudentSearchService: StudentSearchService, private datePipe: DatePipe,
    private dialog: MatDialog){}
  currentMY: string | null; // = (new Date().getMonth() + 1).toString() + '-' + new Date().getFullYear().toString();
  paymentOVerView: StudentPaymentModel[];
  studentPaymentDataSource : StudentPaymentModel[]

  //paymentOverVwColumn: string[] = [ ]

  paymentOverVwColumn: string[] = ['actions', 'id','studentId', 'firstName', 'lastName','fatherName', 'class','pendingTutionFee', 'pendingSessionFee', 'pendingAdmissionFee', 'pendingStudymaterialFee', 'pendingAttireFee', 'pendingMiscellaneousFee' ]

  
  dropdownOptions = [{value:'studentId', label:'Student Id'}, {value:'firstName', label:'First Name'}, {value:'lastName', label:'Last Name' }, {value:'class', label:'Class'}];
  selectedDropdownOption: string;
  handleOptionChange(option: StudentPaymentModel[]): void {
    console.log('Selected option:', option);
    // Handle the selected option in the parent component
  }

  ngOnInit(): void {
    this.initPaymentOverView();
    var date = new Date();
    this.currentMY =  this.datePipe.transform(date,"MMMM yyyy");
  }

  
  getFormattedDate() {
    return this.datePipe.transform(this.currentMY, '');
  }
  initPaymentOverView(): StudentPaymentModel[]{

  this.studentPaymentDataSource = this._sudentSearchService.getStudentPaymentOverView()
    return this.paymentOVerView;
  }

  openDialog(row: StudentPaymentModel) {
    this.dialog.open(FeePayDialogComponent, {
      width: '60%',
      height:'89.5%',
      position: {
        right: '0', // Position the popup window on the right side
        bottom:'1%'
      },
      data: row
    });
  }

  print(row: StudentPaymentModel){

  }

}
