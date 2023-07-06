import { Component, Input, OnInit } from '@angular/core';
import { StudentPaymentModel } from '../model/student-payment.model';

@Component({
  selector: 'app-pay-fee',
  templateUrl: './pay-fee.component.html',
  styleUrls: ['./pay-fee.component.scss']
})
export class PayFeeComponent implements OnInit {
 @Input() payment: StudentPaymentModel;
  currentYear: string = '2023';
  tutionFee: number;
  sessionFee: number;
  admissionFee: number;
  attireFee: number;
  studymaterialFee: number;
  transportFee: number; 
  otherFeePay: boolean = false;
  selectedPT: any;
  comment: string;
  paymentTypeDS = [  
                    { value: 'cash', label: 'Cash' },
                    { value: 'paymementapp', label: 'Payment App' } 
                  ];
  ngOnInit(): void {
    this.tutionFee = this.payment.pendingTutionFee;
    this.transportFee =  500;  // this.payment.pendingTransportFee;
    this.sessionFee = this.payment.pendingSessionFee;
    this.admissionFee = this.payment.pendingAdmissionFee;
    this.studymaterialFee =  this.payment.pendingStudymaterialFee;
    this.attireFee = this.payment.pendingAttireFee;
    this.comment = '';
  }

  handleDropdownChange(dropdownValue: any) {
    console.log('Dropdown value:', dropdownValue);
    // Do something with the dropdown value in the parent component
  }
  handleCheckboxValues(checkboxValues: any[]) {
    console.log('Checkbox values:', checkboxValues);
    // Do something with the checkbox values in the parent component
  }


  onSelectionChange(event: any): void {
    // Handle the selection change event logic here
    console.log('Selected option:', this.selectedPT);
  }

  onTextareaChange(): void {
    // Handle the textarea content change logic here
    console.log('Textarea content:', this.comment);
  }
  
  
}
