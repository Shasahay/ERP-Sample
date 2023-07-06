import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StudentSearchService } from '../../../shared/service/student-search.service';
import { StudentSetFeeView } from '../../model/student-set-fee-view';
import { MatDialog } from '@angular/material/dialog';
import { SetFeeDailogComponent } from '../set-fee-dailog/set-fee-dailog.component';

@Component({
  selector: 'app-set-fee-view',
  templateUrl: './set-fee-view.component.html',
  styleUrls: ['./set-fee-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SetFeeViewComponent implements OnInit {
  dropdownOptions = [{value:'studentId', label:'Student Id'}, {value:'firstName', label:'First Name'}, {value:'lastName', label:'Last Name' }, {value:'class', label:'Class'}];
  selectedDropdownOption: string;
  studentSetFee: StudentSetFeeView[];
  constructor(private _sudentSearchService: StudentSearchService, private dialog: MatDialog){}
  ngOnInit(): void {
    this.initSetFee()
  }

  handleOptionChange(option: any): void {
    console.log('Selected option:', option);
    // Handle the selected option in the parent component
  }

  initSetFee(){
    this.studentSetFee =  this._sudentSearchService.getStudentsetFee();
 }
  displayedColumns: string[] =
      ['actions','studentId', 'firstName', 'lastName', 'fatherName', 'class', 'tutionFee', 'tutionFeeDiscountType', 'tutionFeeDiscount',
        'computedTutionFee', 'transportFee', 'transportFeeDiscountType', 'transportFeeDiscount', 'computedTransportFee',
        'sessionFee', 'sessionFeeDiscountType', 'sessionFeeDiscount', 'computedSessionFee', 'admissionFee', 'admissionFeeDiscountType',
        'admissionFeeDiscount', 'computedAdmissionFee', 'attirefee', 'attireFeeDiscountType', 'attireFeeDiscount', 'computedAttireFee',
        'studyMaterialFee', 'studyMaterialFeeDiscountType', 'studyMaterialFeeDiscount', 'computedStudyMaterialFee', 'miscellaneousFee',
        'miscellaneousFeeDiscountType', 'miscellaneousFeeDiscount', 'computedMiscellaneousFee'
    ];
    edit(element: any) {
      console.log('Edit:', element);
      // Add your edit logic here
    }
  
    delete(element: any) {
      console.log('Delete:', element);
      // Add your delete logic here
    }
    add() {
      console.log('Add');
      // Add your add logic here
    }
    openDialog(row: StudentSetFeeView) {
      this.dialog.open(SetFeeDailogComponent, {
        width: '60%',
        height:'89.5%',
        position: {
          right: '0', // Position the popup window on the right side
          bottom:'1%'
        },
        data: row
      });
    }

}