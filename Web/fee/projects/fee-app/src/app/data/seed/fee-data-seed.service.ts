import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { IStudentFeeOverview } from '../../model/student-fee-overview';
import { StudentPaymentModel } from '../../payment/model/student-payment.model';
import { StudentSetFeeView } from '../../student/model/student-set-fee-view';
import { IStudentTransportFee } from '../../student/model/student-transport-fee';
import { IStudentTutionFee } from '../../student/model/student-tution-fee';


@Injectable({
  providedIn: 'root'
})
export class FeeDataSeedService {

  constructor() { }

  private feeOverView1: IStudentFeeOverview = 
  {  Id: 1, studentId: '01RSS023000001', firstName: 'Abhiman', lastName:'Sinha', fatherName: 'Abhimanyu', 
  class: '1', tutionFee: 750.00, computedTutionFee: 750.00, totalFee: 750.00, totalComputedFee: 675.00, lastPaidFee: 650.00,
  lastFeePaidDatatime:  new Date().toLocaleTimeString(), totalpaidFee: 650.00, totalDues: 25.00};

  private feeOverView2: IStudentFeeOverview = 
  {  Id: 2, studentId: '01RSS023000002', firstName: 'Ananya', lastName:'Pandey', fatherName: 'Ajit kumar Singh', 
  class: '2', tutionFee: 750.00, computedTutionFee: 750.00,totalFee: 750.00, totalComputedFee: 675.00, lastPaidFee: 675.00,
  lastFeePaidDatatime: new Date().toLocaleTimeString(), totalpaidFee: 675.00, totalDues: 0.00};

  private feeOverView3: IStudentFeeOverview = 
  {  Id: 3, studentId: '01RSS023000003', firstName: 'kai', lastName:'anjan', fatherName: 'Abhijit Goyal', 
  class: '3', tutionFee: 750.00, computedTutionFee: 750.00, totalFee: 850.00, totalComputedFee: 800.00, lastPaidFee: 600.00, 
  lastFeePaidDatatime: new Date().toLocaleTimeString(), totalpaidFee: 600.00, totalDues: 200.00};

  private feeOverView4: IStudentFeeOverview = 
  {  Id: 4, studentId: '01RSS023000004', firstName: 'Gautam', lastName:'Dixit', fatherName: 'Jitendra Singh', 
  class: '4',tutionFee: 750.00, computedTutionFee: 750.00, totalFee: 850.00, totalComputedFee: 850.00, lastPaidFee: 850.00,
  lastFeePaidDatatime: new Date().toLocaleTimeString(), totalpaidFee: 850, totalDues: 0.00};

  private feeOverView5: IStudentFeeOverview = 
  {  Id: 5, studentId: '01RSS023000005', firstName: 'Anubhav', lastName:'laal', fatherName: 'Dilip Paswaan', 
  class: '5', tutionFee: 750.00, computedTutionFee: 750.00,totalFee: 750.00, totalComputedFee: 675.00, lastPaidFee: 650.00,
  lastFeePaidDatatime: new Date().toLocaleTimeString(), totalpaidFee: 650, totalDues: 25};


  student_feeOverviews : IStudentFeeOverview[] = [ this.feeOverView1, this.feeOverView2, this.feeOverView3, this.feeOverView4, this.feeOverView5];

  getStudentFeeOverview(): IStudentFeeOverview[] {
      //return of(this.student_feeOverviews);
      return this.student_feeOverviews;
  }
  getStudentTutionFeeDetails(): IStudentTutionFee[]{
      
    let feedetails1 : IStudentTutionFee = { Id: 1, StudentId: '01RSS023000001', Month: 'JAN', TutionFee: 750, ComputedTutionFee: 500, AmountPaid:500, PaidDateTime: new Date().toLocaleTimeString(), DuesAmount:0.00 }
    let feedetails2 : IStudentTutionFee = { Id: 1, StudentId: '01RSS023000001', Month: 'FEB', TutionFee: 750, ComputedTutionFee: 500, AmountPaid:500, PaidDateTime: new Date().toLocaleTimeString(), DuesAmount:100.00 }
    let feedetails3 : IStudentTutionFee = { Id: 1, StudentId: '01RSS023000001', Month: 'MAR', TutionFee: 750, ComputedTutionFee: 500, AmountPaid:500, PaidDateTime: new Date().toLocaleTimeString(), DuesAmount:200.00 }
    let feedetails4 : IStudentTutionFee = { Id: 1, StudentId: '01RSS023000001', Month: 'APR', TutionFee: 750, ComputedTutionFee: 500, AmountPaid:500, PaidDateTime: new Date().toLocaleTimeString(), DuesAmount:0.00 }
    let feedetails5 : IStudentTutionFee = { Id: 1, StudentId: '01RSS023000001', Month: 'MAY', TutionFee: 750, ComputedTutionFee: 500, AmountPaid:500, PaidDateTime: new Date().toLocaleTimeString(), DuesAmount:0.00 }
    let feedetails6 : IStudentTutionFee = { Id: 1, StudentId: '01RSS023000001', Month: 'June', TutionFee: 750, ComputedTutionFee: 500, AmountPaid:0.0, PaidDateTime: '', DuesAmount: 750.00 }
    let feedetails7 : IStudentTutionFee = { Id: 1, StudentId: '01RSS023000001', Month: 'July', TutionFee: 750, ComputedTutionFee: 500, AmountPaid:0.0, PaidDateTime: '', DuesAmount:1500.00 }
    return [feedetails1, feedetails2, feedetails3, feedetails4, feedetails5, feedetails6, feedetails7];
  }


  getStudentTrasportFeeDetails(): IStudentTransportFee[]{
      
    let feedetails1 : IStudentTransportFee = { Id: 1, StudentId: '01RSS023000001', Month: 'JAN', TransportFee: 750, ComputedTransportFee: 500, AmountPaid:500, PaidDateTime: new Date().toLocaleTimeString(), DuesAmount:0.00 }
    let feedetails2 : IStudentTransportFee = { Id: 1, StudentId: '01RSS023000001', Month: 'FEB', TransportFee: 750, ComputedTransportFee: 500, AmountPaid:500, PaidDateTime: new Date().toLocaleTimeString(), DuesAmount:100.00 }
    let feedetails3 : IStudentTransportFee = { Id: 1, StudentId: '01RSS023000001', Month: 'MAR', TransportFee: 750, ComputedTransportFee: 500, AmountPaid:500, PaidDateTime: new Date().toLocaleTimeString(), DuesAmount:200.00 }
    let feedetails4 : IStudentTransportFee = { Id: 1, StudentId: '01RSS023000001', Month: 'APR', TransportFee: 750, ComputedTransportFee: 500, AmountPaid:500, PaidDateTime: new Date().toLocaleTimeString(), DuesAmount:0.00 }
    let feedetails5 : IStudentTransportFee = { Id: 1, StudentId: '01RSS023000001', Month: 'MAY', TransportFee: 750, ComputedTransportFee: 500, AmountPaid:500, PaidDateTime: new Date().toLocaleTimeString(), DuesAmount:0.00 }
    let feedetails6 : IStudentTransportFee = { Id: 1, StudentId: '01RSS023000001', Month: 'June', TransportFee: 750, ComputedTransportFee: 500, AmountPaid:0.0, PaidDateTime: '', DuesAmount: 750.00 }
    let feedetails7 : IStudentTransportFee = { Id: 1, StudentId: '01RSS023000001', Month: 'July', TransportFee: 750, ComputedTransportFee: 500, AmountPaid:0.0, PaidDateTime: '', DuesAmount:1500.00 }
    return [feedetails1, feedetails2, feedetails3, feedetails4, feedetails5, feedetails6, feedetails7];
  }

  getStudentsetFee(): StudentSetFeeView[]{
    let setFeedetail1: StudentSetFeeView = {  id: 1, studentId: '01RSS023000001', firstName: 'Abhiman', lastName:'Sinha', 
    fatherName: 'Abhimanyu Sinha', class: '1',
    tutionFee:750.00, tutionFeeDiscountType: 'Sibling discount', tutionFeeDiscount: '100 Rupee - Rs.', computedTutionFee:650.00,
    transportFee:750.00, transportFeeDiscountType: 'Sibling discount', transportFeeDiscount: '100 rs', computedTransportFee:650.00,
    sessionFee:750.00, sessionFeeDiscountType: 'Sibling discount', sessionFeeDiscount: '100RS', computedSessionFee:650.00,
    admissionFee:750.00, admissionFeeDiscountType: 'Sibling discount', admissionFeeDiscount: '100RS', computedAdmissionFee:650.00,
    attirefee:750.00, attireFeeDiscountType: 'Sibling discount', attireFeeDiscount: '100RS', computedAttireFee:650.00,
    studyMaterialFee:750.00, studyMaterialFeeDiscountType: 'Sibling discount', studyMaterialFeeDiscount: '100RS', computedStudyMaterialFee:650.00,
    miscellaneousFee:750.00, miscellaneousFeeDiscountType: 'Sibling discount', miscellaneousFeeDiscount: '100RS', computedMiscellaneousFee:650.00,
   }
   let setFeedetail2: StudentSetFeeView = {  id: 5, studentId: '01RSS023000005', firstName: 'Ajit', lastName:'Kushwaha', 
    fatherName: 'Deepak Kushwaha', class: '1',
    tutionFee:750.00, tutionFeeDiscountType: 'Sibling discount', tutionFeeDiscount: '100 RS', computedTutionFee:650.00,
    transportFee:750.00, transportFeeDiscountType: 'Sibling discount', transportFeeDiscount: '100 RS', computedTransportFee:650.00,
    sessionFee:750.00, sessionFeeDiscountType: 'Sibling discount', sessionFeeDiscount: '100RS', computedSessionFee:650.00,
    admissionFee:750.00, admissionFeeDiscountType: 'Sibling discount', admissionFeeDiscount: '100RS', computedAdmissionFee:650.00,
    attirefee:750.00, attireFeeDiscountType: 'Sibling discount', attireFeeDiscount: '100RS', computedAttireFee:650.00,
    studyMaterialFee:750.00, studyMaterialFeeDiscountType: 'Sibling discount', studyMaterialFeeDiscount: '100RS', computedStudyMaterialFee:650.00,
    miscellaneousFee:750.00, miscellaneousFeeDiscountType: 'Sibling discount', miscellaneousFeeDiscount: '100RS', computedMiscellaneousFee:650.00,
   }
   let setFeedetail3: StudentSetFeeView = {  id: 6, studentId: '01RSS023000006', firstName: 'Danish', lastName:'Gupta', 
    fatherName: 'Ravi Gupta', class: '2',
    tutionFee:750.00, tutionFeeDiscountType: 'Sibling discount', tutionFeeDiscount: '10 %', computedTutionFee:650.00,
    transportFee:750.00, transportFeeDiscountType: 'Sibling discount', transportFeeDiscount: '20 %', computedTransportFee:650.00,
    sessionFee:750.00, sessionFeeDiscountType: 'Sibling discount', sessionFeeDiscount: '100RS', computedSessionFee:650.00,
    admissionFee:750.00, admissionFeeDiscountType: 'Sibling discount', admissionFeeDiscount: '100RS', computedAdmissionFee:650.00,
    attirefee:750.00, attireFeeDiscountType: 'Sibling discount', attireFeeDiscount: '100RS', computedAttireFee:650.00,
    studyMaterialFee:750.00, studyMaterialFeeDiscountType: 'Sibling discount', studyMaterialFeeDiscount: '100RS', computedStudyMaterialFee:650.00,
    miscellaneousFee:750.00, miscellaneousFeeDiscountType: 'Sibling discount', miscellaneousFeeDiscount: '100RS', computedMiscellaneousFee:650.00,
   }
   let setFeedetail4: StudentSetFeeView = {  id: 7, studentId: '01RSS023000007', firstName: 'Sunil', lastName:'Gautam', 
    fatherName: 'Azad Gautam', class: '3',
    tutionFee:750.00, tutionFeeDiscountType: 'Sibling', tutionFeeDiscount: '10 %', computedTutionFee:650.00,
    transportFee:750.00, transportFeeDiscountType: 'Sibling', transportFeeDiscount: '20 %', computedTransportFee:650.00,
    sessionFee:750.00, sessionFeeDiscountType: 'Sibling ', sessionFeeDiscount: '100RS', computedSessionFee:650.00,
    admissionFee:750.00, admissionFeeDiscountType: 'Sibling discount', admissionFeeDiscount: '100RS', computedAdmissionFee:650.00,
    attirefee:750.00, attireFeeDiscountType: 'Sibling discount', attireFeeDiscount: '100RS', computedAttireFee:650.00,
    studyMaterialFee:750.00, studyMaterialFeeDiscountType: 'Sibling discount', studyMaterialFeeDiscount: '100RS', computedStudyMaterialFee:650.00,
    miscellaneousFee:750.00, miscellaneousFeeDiscountType: 'Sibling discount', miscellaneousFeeDiscount: '100RS', computedMiscellaneousFee:650.00,
   }
   let setFeedetail5: StudentSetFeeView = {  id: 8, studentId: '01RSS023000008', firstName: 'Rupesh', lastName:'Sharma', 
    fatherName: 'Rajnish Sharma', class: '1',
    tutionFee:750.00, tutionFeeDiscountType: 'Sibling discount', tutionFeeDiscount: '10 %', computedTutionFee:650.00,
    transportFee:750.00, transportFeeDiscountType: 'Sibling discount', transportFeeDiscount: '20 %', computedTransportFee:650.00,
    sessionFee:750.00, sessionFeeDiscountType: 'Sibling discount', sessionFeeDiscount: '100RS', computedSessionFee:650.00,
    admissionFee:750.00, admissionFeeDiscountType: 'Sibling discount', admissionFeeDiscount: '100RS', computedAdmissionFee:650.00,
    attirefee:750.00, attireFeeDiscountType: 'Sibling discount', attireFeeDiscount: '100RS', computedAttireFee:650.00,
    studyMaterialFee:750.00, studyMaterialFeeDiscountType: 'Sibling discount', studyMaterialFeeDiscount: '100RS', computedStudyMaterialFee:650.00,
    miscellaneousFee:750.00, miscellaneousFeeDiscountType: 'Sibling discount', miscellaneousFeeDiscount: '100RS', computedMiscellaneousFee:650.00,
   }
   let setFeedetail6: StudentSetFeeView = {  id:9, studentId: '01RSS023000009', firstName: 'Kushum', lastName:'kumari', 
    fatherName: 'Ram Charan laal', class: '1',
    tutionFee:750.00, tutionFeeDiscountType: 'Sibling discount', tutionFeeDiscount: '10 %', computedTutionFee:650.00,
    transportFee:750.00, transportFeeDiscountType: 'Sibling discount', transportFeeDiscount: '20 %', computedTransportFee:650.00,
    sessionFee:750.00, sessionFeeDiscountType: 'Sibling discount', sessionFeeDiscount: '100RS', computedSessionFee:650.00,
    admissionFee:750.00, admissionFeeDiscountType: 'Sibling discount', admissionFeeDiscount: '100RS', computedAdmissionFee:650.00,
    attirefee:750.00, attireFeeDiscountType: 'Sibling discount', attireFeeDiscount: '100RS', computedAttireFee:650.00,
    studyMaterialFee:750.00, studyMaterialFeeDiscountType: 'Sibling discount', studyMaterialFeeDiscount: '100RS', computedStudyMaterialFee:650.00,
    miscellaneousFee:750.00, miscellaneousFeeDiscountType: 'Sibling discount', miscellaneousFeeDiscount: '100RS', computedMiscellaneousFee:650.00,
   }
   let setFeedetail7: StudentSetFeeView = {  id: 10, studentId: '01RSS023000010', firstName: 'Diya', lastName:'Pandey', 
    fatherName: 'Santosh Kumar Pandey', class: '1',
    tutionFee:750.00, tutionFeeDiscountType: 'Sibling discount', tutionFeeDiscount: '10 %', computedTutionFee:650.00,
    transportFee:750.00, transportFeeDiscountType: 'Sibling discount', transportFeeDiscount: '20 %', computedTransportFee:650.00,
    sessionFee:750.00, sessionFeeDiscountType: 'Sibling discount', sessionFeeDiscount: '100RS', computedSessionFee:650.00,
    admissionFee:750.00, admissionFeeDiscountType: 'Sibling discount', admissionFeeDiscount: '100RS', computedAdmissionFee:650.00,
    attirefee:750.00, attireFeeDiscountType: 'Sibling discount', attireFeeDiscount: '100RS', computedAttireFee:650.00,
    studyMaterialFee:750.00, studyMaterialFeeDiscountType: 'Sibling discount', studyMaterialFeeDiscount: '100RS', computedStudyMaterialFee:650.00,
    miscellaneousFee:750.00, miscellaneousFeeDiscountType: 'Sibling discount', miscellaneousFeeDiscount: '100RS', computedMiscellaneousFee:650.00,
   }
    return [setFeedetail1, setFeedetail2, setFeedetail3, setFeedetail4, setFeedetail5, setFeedetail6, setFeedetail7];
  }

  getStudentPaymentOverView(): StudentPaymentModel[]{
    let paymentOV1: StudentPaymentModel = {  id: 1, studentId: '01RSS023000001', firstName: 'Abhiman', lastName:'Sinha', 
    fatherName: 'Abhimanyu Sinha', class: '1', pendingTutionFee: 1200.00, pendingAdmissionFee: 0.00, pendingSessionFee: 1800.00, pendingAttireFee: 220.00, pendingStudymaterialFee: 890.90, pendingMiscellaneousFee: 0.00};
     let paymentOV2: StudentPaymentModel = {  id: 2, studentId: '01RSS023000002', firstName: 'Ananya', lastName:'Pandey', fatherName: 'Ajit kumar Singh', 
     class: '2', pendingTutionFee: 1200.00, pendingAdmissionFee: 0.00, pendingSessionFee: 1800.00, pendingAttireFee: 220.00, pendingStudymaterialFee: 890.90, pendingMiscellaneousFee: 0.00};
     let paymentOV3: StudentPaymentModel = {  id: 3, studentId: '01RSS023000003', firstName: 'kai', lastName:'anjan', fatherName: 'Abhijit Goyal', 
     class: '3', pendingTutionFee: 1200.00, pendingAdmissionFee: 0.00, pendingSessionFee: 1800.00, pendingAttireFee: 220.00, pendingStudymaterialFee: 890.90, pendingMiscellaneousFee: 0.00};
     let paymentOV4: StudentPaymentModel = {  id: 4, studentId: '01RSS023000004', firstName: 'Gautam', lastName:'Dixit', fatherName: 'Jitendra Singh', 
     class: '4', pendingTutionFee: 1200.00, pendingAdmissionFee: 0.00, pendingSessionFee: 1800.00, pendingAttireFee: 220.00, pendingStudymaterialFee: 890.90, pendingMiscellaneousFee: 0.00};
     return [paymentOV1, paymentOV2, paymentOV3, paymentOV4];    
  }

}
