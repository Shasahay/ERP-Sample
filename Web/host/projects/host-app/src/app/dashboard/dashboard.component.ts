import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
 
  tilesQuickAction: any[] = 
    [ { text: 'Enquiry', faClass: 'fa-solid fa-circle-info fa-xl', styleClass:'tile-enq-stl', description: 'Get enquiry about anything', navigationLink:'' },
    { text: 'Staff',  faClass: 'fa-solid fa-users-gear fa-xl',styleClass:'enq-stl', description: 'All the staff can use this', navigationLink:''},
    { text: 'Student',  faClass: 'fa-solid fa-building-columns fa-xl',styleClass:'tile-stu-stl', description: 'Its about students', navigationLink:''},
    { text: 'Expense',  faClass: 'fa-brands fa-gg-circle fa-xl', styleClass:'tile-orange-stl', description: 'Claims all fo your expenses', navigationLink:''}
    // Add more tiles as needed
  ];


  tilesAccount: any[] = 
  [ { text: 'Account', faClass: 'fa-solid fa-briefcase fa-xl',styleClass:'sea-grn-clr', description: 'Get all accounts', navigationLink: 'http://localhost:4700/'},
  { text: 'Fee',  faClass: 'fa-solid fa-wallet fa-xl', tilestyleClass:'enq-stl',styleClass:'tile-stu-stl',description: 'All about fee', navigationLink: 'http://localhost:4800/'},
  { text: 'Due',  faClass: 'fa-solid fa-circle-exclamation fa-xl',styleClass:'due-stl', description: 'Get enquiry about students', navigationLink: 'http://localhost:4800/report/fee-report'},
  { text: 'Expenditure',  faClass: 'fa-solid fa-envelopes-bulk fa-xl',styleClass:'exp-stl', description: 'Claims all fo your expenses',navigationLink: 'http://localhost:4800/report/fee-report'}
  // Add more tiles as needed
];

}
