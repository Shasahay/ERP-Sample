import { Component } from '@angular/core';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.scss']
})
export class FeeComponent {

  searchCriteria: any[] =[
  { name:'Student Id', value: 'studentId'},
  { name:'Student First Name', value: 'studentFirstName'},
  { name:'Class', value: 'class'},
  { name:'Father Name', value: 'fatherName'}
]

selectedOption: string;
options: { value: string, label: string }[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];

}
