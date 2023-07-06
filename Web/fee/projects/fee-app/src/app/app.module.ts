import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
//import { SharedModule } from './shared/shared.module';
import { StudentModule } from './student/student.module';
import { ClassModule } from './class/class.module';
import { PaymentModule } from './payment/payment.module';
import { ReportModule } from './report/report.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    StudentModule,
    ClassModule,
    PaymentModule,
    ReportModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
