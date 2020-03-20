import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposComponent } from './repos.component';
import { ReposListComponent } from './repos-list/repos-list.component';
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [
    ReposComponent,
    ReposListComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports:[ReposComponent]
})
export class ReposModule { }
