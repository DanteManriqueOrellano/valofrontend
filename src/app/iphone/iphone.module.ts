import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen/screen.component';
import { IphoneRoutingModule } from './iphone-routing.module';
import { ManagerdialogModule } from '../managerdialog/managerdialog.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowcountComponent } from './showcount/showcount.component';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ManagerbottomsheetModule } from '../managerbottomsheet/managerbottomsheet.module';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ManagercardModule } from '../managercard/managercard.module';
import { IosprogressbarModule } from '../iosprogressbar/iosprogressbar.module';

@NgModule({
  declarations: [
    ScreenComponent,
    ShowcountComponent,

  ],
  imports: [
    CommonModule,
    IphoneRoutingModule,
    ManagerdialogModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ManagerbottomsheetModule,
    MatBottomSheetModule,
    ManagercardModule,
    IosprogressbarModule
    
  ],
  exports:[ScreenComponent]
})
export class IphoneModule { }
