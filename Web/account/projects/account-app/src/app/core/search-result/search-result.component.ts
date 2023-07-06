import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  @Input() options: { value: string, label: string }[]
  searchTerm: string;
  selectedItem: string;
  @Input() selectedOption: string;
  clearSearch() {
    this.searchTerm = '';
  }

 
}
