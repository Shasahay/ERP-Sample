import { Component } from '@angular/core';

@Component({
  selector: 'app-setstudent-fee',
  templateUrl: './setstudent-fee.component.html',
  styleUrls: ['./setstudent-fee.component.scss']
})
export class SetstudentFeeComponent {
  selectOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];
  selectedOption: string;
}
