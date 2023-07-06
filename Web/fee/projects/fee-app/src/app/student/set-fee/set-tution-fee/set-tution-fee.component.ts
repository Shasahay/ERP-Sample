import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiscountType } from '../enum/discount-type.enum';
import { DiscountUnit } from '../enum/discount-unit.enum';
import { TutionFeeModel } from '../model/tution-fee.model';


@Component({
  selector: 'app-set-tution-fee',
  templateUrl: './set-tution-fee.component.html',
  styleUrls: ['./set-tution-fee.component.scss']
})
export class SetTutionFeeComponent implements OnInit {

  @Input() tutionFeeModel: TutionFeeModel
  selDiscountType: DiscountType //= DiscountType.sibling;
  selDiscountUnit: DiscountUnit
  discountUnit = Object.values(DiscountUnit);
  discountType= Object.values(DiscountType);
  tutionFee: number;
  computedTutionFee: number;
  discountAmount: number = 0.00;
  ngOnInit(): void {
    console.log(this.discountType);
    this.tutionFee = this.tutionFeeModel.tutionFee;
    this.selDiscountType = this.tutionFeeModel.discountType as DiscountType;
    this.selDiscountUnit = this.tutionFeeModel.discountUnit.split(" ")[1] as DiscountUnit;
    this.discountAmount = Number(this.tutionFeeModel.discountUnit.split(" ")[0]);
  }

  computeTutionFee(disUnit : DiscountUnit){

    switch(disUnit){
      case DiscountUnit.percentage: {
       this.computedTutionFee = this.tutionFee -  this.tutionFee * this.discountAmount/100;
        break;
      }
      case DiscountUnit.rs: {
        this.computedTutionFee = this.tutionFee - this.discountAmount;
        break;
      }
      default: 
      this.computedTutionFee;
      break;
    }
  }
  handleDropdownChange(dropdownValue: any) {
    console.log('Dropdown value:', dropdownValue);
    // Do something with the dropdown value in the parent component
  }
  handleCheckboxValues(checkboxValues: any[]) {
    console.log('Checkbox values:', checkboxValues);
    // Do something with the checkbox values in the parent component
  }

}
