import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReposRoutingModule} from './repos-routing.module';
import { ReposComponent } from './repos.component';
import { ReposListComponent } from './repos-list/repos-list.component';
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [
    ReposComponent,
    ReposListComponent
  ],
  imports: [
    ReposRoutingModule,
    SharedModule,
    CommonModule
  ],
  exports:[ReposComponent]
})
export class ReposModule { }
