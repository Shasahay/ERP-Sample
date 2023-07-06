import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TileComponent } from './tile/tile.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    NavigationComponent,
    TileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    BrowserModule,
    MatIconModule,
    MatExpansionModule,
    MatGridListModule
  ],
  exports: [NavigationComponent, TileComponent]
})
export class CoreModule { }
