import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeeDataSeedService } from './seed/fee-data-seed.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [FeeDataSeedService]
})
export class DataModule { }
