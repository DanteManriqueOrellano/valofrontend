import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetdialogComponent } from './sheetdialog/sheetdialog.component';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    SheetdialogComponent,

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports:[SheetdialogComponent]
  

})
export class ManagerdialogModule { }
