import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IStudentFeeOverview } from '../../model/student-fee-overview';
import { StudentSearchService } from '../../shared/service/student-search.service';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  //dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

  studentFeeOverView: IStudentFeeOverview[];
  //feeOverViewColumn: string[] = ['Student Id', 'First Name', 'Last Name', 'Father Name', 'Class', 'Total Fee', 'Computed Fee', 'Last Paid Fee', 'Total Paid Fee', 'Total Dues'];
  feeOverViewColumn: string[] = ['Student Id', 'First Name', 'Last Name','Father Name', 'Class','Tution Fee', 'Computed Tution Fee', 'Total Fee', 'Total Computed Fee','Last Paid Fee', 'Total Paid Fee', "Last Fee Paid DateTime", 'Total Dues', 'actions'];
  constructor(private _sudentSearchService: StudentSearchService, private dialog: MatDialog){}

  ngOnInit(){
    this.initFeeOverView()
  }

  

  dropdownOptions = [{value:'studentId', label:'Student Id'}, {value:'firstName', label:'First Name'}, {value:'lastName', label:'Last Name' }, {value:'class', label:'Class'}];
  selectedDropdownOption: string;
  handleOptionChange(option: IStudentFeeOverview[]): void {
    console.log('Selected option:', option);
    // Handle the selected option in the parent component
  }


initFeeOverView(){
   this.studentFeeOverView =  this._sudentSearchService.getStudentFeeOverView();
}
openDialog(row: IStudentFeeOverview) {
  this.dialog.open(DetailDialogComponent, {
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
