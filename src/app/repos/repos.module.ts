import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposComponent } from './repos.component';
import { ReposListComponent } from './repos-list/repos-list.component';

@NgModule({
  declarations: [
    ReposComponent,
    ReposListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ReposComponent]
})
export class ReposModule { }
