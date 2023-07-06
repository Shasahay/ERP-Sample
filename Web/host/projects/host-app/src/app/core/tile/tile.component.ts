import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() tileItems: any[]
  // tiles = [
  //   { text: 'Enquiry', faClass: 'fa-solid fa-circle-info fa-xl', description: 'Get enquiry about anything' },
  //   { text: 'Staff',  faClass: 'fa-solid fa-users-gear fa-xl', description: 'all the staff can use this'},
  //   { text: 'Student',  faClass: 'fa-solid fa-building-columns fa-xl', description: 'Get enquiry about students'},
  //   { text: 'Expense',  faClass: 'fa-brands fa-gg-circle fa-xl', description: 'Claims all fo your expenses'}
  //   // Add more tiles as needed
  // ];
}

// <i class="fa-solid fa-circle-info"></i>
