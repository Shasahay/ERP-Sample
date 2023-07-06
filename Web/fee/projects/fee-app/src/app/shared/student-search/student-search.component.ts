import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentSearchService } from '../service/student-search.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss']
})
export class StudentSearchComponent {
  @Input() options: any[];
  @Input() selectedOption: string;
  searchTerm: string;
 // @Output() optionChanged: EventEmitter<string> = new EventEmitter<string>();
 @Output() optionChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor( private _studentsearchService: StudentSearchService ) { }

  onOptionChange(event: any): void {
    const selectedOption = event.value;
    var students = this._studentsearchService.getStudentFeeOverView();
    //this.optionChanged.emit(students);
  }

  search(): any{
    console.log(this.selectedOption);
    console.log(this.searchTerm);

    var resultSet = this._studentsearchService.getstudentFilterList(this.selectedOption, this.searchTerm);
    this.optionChanged.emit(resultSet);
  }
}
