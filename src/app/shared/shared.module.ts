import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeInterval } from './timeInterval.pipe';
import { CharLimit } from './charLimit.pipe'

@NgModule({
  declarations: [
    TimeInterval,
    CharLimit
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimeInterval,
    CharLimit
  ]
})
export class SharedModule { }
