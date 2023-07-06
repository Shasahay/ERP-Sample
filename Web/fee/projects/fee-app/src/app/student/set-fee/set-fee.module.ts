import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetFeeViewComponent } from './set-fee-view/set-fee-view.component';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { SetFeeDailogComponent } from './set-fee-dailog/set-fee-dailog.component';
import { SetFeeDailogViewComponent } from './set-fee-dailog-view/set-fee-dailog-view.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { SetTutionFeeComponent } from './set-tution-fee/set-tution-fee.component';
import { SetTransportFeeComponent } from './set-transport-fee/set-transport-fee.component';
import { SetAdmissionFeeComponent } from './set-admission-fee/set-admission-fee.component';
import { SetSessionFeeComponent } from './set-session-fee/set-session-fee.component';
import { SetAttireFeeComponent } from './set-attire-fee/set-attire-fee.component';
import { SetStudymaterialFeeComponent } from './set-studymaterial-fee/set-studymaterial-fee.component';
import { SetMiscellaneousFeeComponent } from './set-miscellaneous-fee/set-miscellaneous-fee.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MonthYearFilterComponent } from './month-year-filter/month-year-filter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    SetFeeViewComponent,
    SetFeeDailogComponent,
    SetFeeDailogViewComponent,
    SetTutionFeeComponent,
    SetTransportFeeComponent,
    SetAdmissionFeeComponent,
    SetSessionFeeComponent,
    SetAttireFeeComponent,
    SetStudymaterialFeeComponent,
    SetMiscellaneousFeeComponent,
    MonthYearFilterComponent
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    MatStepperModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    MatCheckboxModule    
    
  ]
})
export class SetFeeModule { }
