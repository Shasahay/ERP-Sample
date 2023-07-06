import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-year-month-filter',
  templateUrl: './year-month-filter.component.html',
  styleUrls: ['./year-month-filter.component.scss']
})
export class YearMonthFilterComponent {
  @Output() dropdownChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() checkboxValuesChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Input() dropdownValue: string = '';
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
