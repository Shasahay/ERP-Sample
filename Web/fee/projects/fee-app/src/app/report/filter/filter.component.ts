import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Class } from '../../enum/class-enum';
import { FeeType } from '../../enum/fee-type.enum';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']  
})

export class FilterComponent implements OnInit {


  @Output() classDDChange: EventEmitter<Class[]> = new EventEmitter<Class[]>();
  @Input() classValue: Class[];
  //@Input() classValue = new FormControl();
  isFeePending: boolean = false;
  isFeePaid: boolean = false;
  @Output() feeTypeDDChange: EventEmitter<FeeType[]> = new EventEmitter<FeeType[]>();
  @Input() feeValue: FeeType[];
  feeTypes = Object.values(FeeType);
  classes = Object.values(Class);
  filter: any = {
    namecriteria: '',
    categorycriteria: '',
    criteria3: '',
    criteria4: '',
    criteria5: ''
  };
  isExpanded: boolean = false;

  ngOnInit(): void {
    
    if(this.classValue == null || this.classValue == undefined){
      this.classValue =  [Class.all];
    }
    if(this.feeValue == null || this.feeValue == undefined){
      this.feeValue =  [FeeType.all];
    }
  }

  toggleFilter(): void {
    this.isExpanded = !this.isExpanded;
  }

  emitClassDDChange() {
    this.classDDChange.emit(this.classValue);
  }

  emitClassFTChange() {
    this.feeTypeDDChange.emit(this.feeTypes);
  }

  handleFeePendingCCChange(checked: boolean) {
    // Perform logic based on the checkbox value
    this.isFeePending = checked;
  }
  handleFeePaidCCChange(checked: boolean) {
    // Perform logic based on the checkbox value
    this.isFeePaid = checked;
  }
  
}
