import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReposRoutingModule} from './repos-routing.module';
import { ReposComponent } from './repos.component';
import { ReposListComponent } from './repos-list/repos-list.component';
import {SharedModule} from '../shared/shared.module';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import {

  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [
    ReposComponent,
    ReposListComponent,
  ],
  imports: [
    ReposRoutingModule,
    InfiniteScrollModule,
    SharedModule,
    CommonModule
  ],
  exports:[
    ReposComponent,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    PortalModule,
    ScrollingModule,
  ]
})
export class ReposModule { }
