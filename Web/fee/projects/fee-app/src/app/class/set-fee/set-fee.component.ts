import { Component } from '@angular/core';
import { ClassFeeModel } from '../model/class-fee.model';

@Component({
  selector: 'app-set-fee',
  templateUrl: './set-fee.component.html',
  styleUrls: ['./set-fee.component.scss']
})
export class SetFeeComponent {
   // Role-based permission
   userRole: string = 'admin'; // Set the user role here
  selectedRow: ClassFeeModel | null = null;
  displayedColumns: string[] = ['class', 'tutionFee', 'studymaterialFee', 'actions'];
  classFee: ClassFeeModel[] = [
    { id:1, class:'Nursery', tutionFee: 650.00, studymaterialFee: 1200.20 },
    { id:1, class:'LKG', tutionFee: 650.00, studymaterialFee: 1400.20 },
    { id:1, class:'UKG', tutionFee: 650.00, studymaterialFee: 1200.20 },
    { id:1, class:'1', tutionFee: 750.00, studymaterialFee: 1400.20 },
    { id:1, class:'2', tutionFee: 750.00, studymaterialFee: 1200.20 },
    { id:1, class:'3', tutionFee: 850.00, studymaterialFee: 1900.90 },
    { id:1, class:'4', tutionFee: 850.00, studymaterialFee: 3200.20 },
    { id:1, class:'5', tutionFee: 950.00, studymaterialFee: 2200.20 },
    { id:1, class:'6', tutionFee: 950.00, studymaterialFee: 1200.20 },
    { id:1, class:'7', tutionFee: 1050.00, studymaterialFee: 3200.45 },
    { id:1, class:'8', tutionFee: 1050.00, studymaterialFee: 1685.50 },
  ]
  isAllowedToEdit(): boolean {
    // Check if the user has the permission to edit
    return this.userRole === 'admin'; // Adjust the condition based on your role-based permission logic
  }

  editRow(row: ClassFeeModel) {
    this.selectedRow = row;
  }

  saveRow(row: ClassFeeModel) {
    console.log('Saving row:', row);
    // Implement your save logic here

    // Exit edit mode
    this.selectedRow = null;
  }

  cancelEdit() {
    // Clear the selected row and exit edit mode
    this.selectedRow = null;
  }
}
