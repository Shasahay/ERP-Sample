import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeeDataSeedService } from '../../data/seed/fee-data-seed.service';
import { IStudentFeeOverview } from '../../model/student-fee-overview';
import { StudentPaymentModel } from '../../payment/model/student-payment.model';
import { StudentSetFeeView } from '../../student/model/student-set-fee-view';
import { IStudentTransportFee } from '../../student/model/student-transport-fee';
import { IStudentTutionFee } from '../../student/model/student-tution-fee';

type Expression = {
  key: string;
  operation:
    | 'greater_than'
    | 'less_than'
    | 'equal'
    | 'starts_with'
    | 'contains';
  value: string | number;
};

@Injectable({
  providedIn: 'root'
})
export class StudentSearchService {
  expressions: Expression[];
  constructor(private feeDataSeedService: FeeDataSeedService ) { }
  
  studeuntFeeOverview: IStudentFeeOverview[]
  
  // getstudent(id: number): Observable<IStudentFeeOverview[]> {
  //   return this.http.get<IStudentFeeOverview[]>('https://api.example.com/student/id');
  //   //return this.feeDataSeedService.getStudentFeeOverview();
  // }

  getStudentFeeOverView(): IStudentFeeOverview[]{
    //return this.feeDataSeedService.getStudentFeeOverview().subscribe( res => this.studeuntFeeOverview = res as IStudentFeeOverview[])
    return this.feeDataSeedService.getStudentFeeOverview();
  }

  getStudentTutionFeeDetails(): IStudentTutionFee[]{
      return this.feeDataSeedService.getStudentTutionFeeDetails();
  }

  getStudentTransportFeeDetails(): IStudentTransportFee[]{
    return this.feeDataSeedService.getStudentTrasportFeeDetails();
  }
  getStudentsetFee(): StudentSetFeeView[]{
    return this.feeDataSeedService.getStudentsetFee();
  }

  getStudentPaymentOverView(): StudentPaymentModel[]{
    return this.feeDataSeedService.getStudentPaymentOverView();
  }

  getstudentFilterList(criteria: string, searchTerm: string){

    if (criteria.toLowerCase() == 'class' ||  criteria.toLowerCase() == 'studentid'){
      this.expressions =  [
      {
        key: criteria,
        operation: 'equal',
        value: searchTerm,
      }
    ];

     }
     else{

      this.expressions =  [
        {
          key: criteria,
          operation: 'contains',
          value: searchTerm,
        }
      ];
     }
   

   var lst = this.feeDataSeedService.getStudentFeeOverview()
   var result = lst.filter((item) =>
  this.expressions.some((expr) => this.evaluateExpression(expr, item))
    );
    return result;
  }

  evaluateExpression(expression: Expression, obj: any): boolean {
    const { key, operation, value } = expression;
    const propValue = obj[key];
    switch (operation) {
      case 'greater_than':
        return propValue > value;
      case 'less_than':
        return propValue < value;
      case 'contains':
        return new RegExp(value.toString().toLowerCase() + '').test(propValue.toLowerCase() + '');
      case 'starts_with':
        return new RegExp('^' + value + '').test(propValue + '');
      case 'equal':
      default:
        return propValue.toLowerCase() === value.toString().toLowerCase();
    }
  }

}
