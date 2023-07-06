import { Component, OnInit } from '@angular/core';
import { StudentSearchService } from 'projects/fee-app/src/app/shared/service/student-search.service';
import { IStudentTutionFee } from '../../../model/student-tution-fee';

@Component({
  selector: 'app-tution-view',
  templateUrl: './tution-view.component.html',
  styleUrls: ['./tution-view.component.scss']
})
export class TutionViewComponent implements OnInit {
  studentTutionFeeDataSource: IStudentTutionFee[];
  tutionFeeTableColumn: string[] = ['Month', 'Tution Fee','Computed Tution Fee','Amount Paid', 'Paid Date Time', 'Dues Amount'];

  constructor(private _sudentSearchService: StudentSearchService){}
  ngOnInit(): void {
    this.getTutionFeeDetails();
  }

  getTutionFeeDetails(){
    this.studentTutionFeeDataSource =  this._sudentSearchService.getStudentTutionFeeDetails()

  }
}
