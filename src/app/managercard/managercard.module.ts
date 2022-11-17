import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlasscardComponent } from './glasscard/glasscard.component';



@NgModule({
  declarations: [GlasscardComponent],
  imports: [
    CommonModule
  ],
  exports:[GlasscardComponent]
})
export class ManagercardModule { }
