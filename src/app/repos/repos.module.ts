import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposComponent } from './repos/repos.component';

@NgModule({
  declarations: [ReposComponent],
  imports: [
    CommonModule
  ],
  exports:[ReposComponent]
})
export class ReposModule { }
