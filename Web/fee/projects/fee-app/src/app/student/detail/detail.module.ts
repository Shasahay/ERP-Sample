import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { TutionViewComponent } from './detailview/tution-view/tution-view.component';
import { TransportViewComponent } from './detailview/transport-view/transport-view.component';
import { AdmissionViewComponent } from './detailview/admission-view/admission-view.component';
import { SessionViewComponent } from './detailview/session-view/session-view.component';
import { StudyMaterialViewComponent } from './detailview/study-material-view/study-material-view.component';
import { AttireViewComponent } from './detailview/attire-view/attire-view.component';
import { MiscellaneousViewComponent } from './detailview/miscellaneous-view/miscellaneous-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    DetailComponent,
    DetailDialogComponent,
    DetailviewComponent,
    TutionViewComponent,
    TransportViewComponent,
    AdmissionViewComponent,
    SessionViewComponent,
    StudyMaterialViewComponent,
    AttireViewComponent,
    MiscellaneousViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatStepperModule,
    MatCardModule
  ]
})
export class DetailModule { }
