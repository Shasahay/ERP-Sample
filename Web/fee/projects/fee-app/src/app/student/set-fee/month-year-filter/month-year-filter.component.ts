import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-month-year-filter',
  templateUrl: './month-year-filter.component.html',
  styleUrls: ['./month-year-filter.component.scss']
})
export class MonthYearFilterComponent {

  @Output() dropdownChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() checkboxValuesChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  dropdownValue: string = '';
  //checkboxValue: string = '';
  checkboxOptions: any[] = [
    { label: 'JAN', checked: false },
    { label: 'FEB', checked: false },
    { label: 'MAR', checked: false },
    { label: 'APR', checked: false },
    { label: 'MAY', checked: false },
    { label: 'JUNE', checked: false },
    { label: 'JULY', checked: false },
    { label: 'AUG', checked: false },
    { label: 'SEPT', checked: false },
    { label: 'OCT', checked: false },
    { label: 'NOV', checked: false },
    { label: 'DEC', checked: false }
    
  ];

  options: string[] = ['2023', '2024'];
  handleCheckboxChange(option: any) {
    console.log('Checkbox state:', option.checked);
  }

  emitDropdownChange() {
    this.dropdownChange.emit(this.dropdownValue);
  }
  emitCheckboxValuesChange(option: any) {
    this.checkboxValuesChange.emit(option);
  }
}
