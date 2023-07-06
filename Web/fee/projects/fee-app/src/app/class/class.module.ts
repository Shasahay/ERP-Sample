import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetFeeComponent } from './set-fee/set-fee.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    SetFeeComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class ClassModule { }
