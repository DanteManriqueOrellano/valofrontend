import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IosprogressbarComponent } from './iosprogressbar/iosprogressbar.component';



@NgModule({
  declarations: [
    IosprogressbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[IosprogressbarComponent]
})
export class IosprogressbarModule { }
