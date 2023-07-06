import { Component } from '@angular/core';
import { StudentSearchService } from 'projects/fee-app/src/app/shared/service/student-search.service';
import { IStudentTransportFee } from '../../../model/student-transport-fee';

@Component({
  selector: 'app-transport-view',
  templateUrl: './transport-view.component.html',
  styleUrls: ['./transport-view.component.scss']
})
export class TransportViewComponent {
  dsStuTransFee: IStudentTransportFee[];
  trasFeeTblColumn: string[] = ['Month', 'Transport Fee','Computed Transport Fee','Amount Paid', 'Paid Date Time', 'Dues Amount'];

  constructor(private _sudentSearchService: StudentSearchService){}
  ngOnInit(): void {
    this.getTutionFeeDetails();
  }

  getTutionFeeDetails(){
    this.dsStuTransFee =  this._sudentSearchService.getStudentTransportFeeDetails()

  }
}
