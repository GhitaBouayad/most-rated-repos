import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeInterval } from './timeInterval.pipe';

@NgModule({
  declarations: [
    TimeInterval
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeInterval
  ]
})
export class SharedModule { }
