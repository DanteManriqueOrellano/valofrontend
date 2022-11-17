import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogbottomsheetComponent } from './dialogbottomsheet/dialogbottomsheet.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import { MytemplatebottomComponent } from './mytemplatebottom/mytemplatebottom.component';

@NgModule({
  declarations: [
    DialogbottomsheetComponent,
    MytemplatebottomComponent
  ],
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatButtonModule
  ],
  exports:[DialogbottomsheetComponent,MytemplatebottomComponent]
})
export class ManagerbottomsheetModule { }
