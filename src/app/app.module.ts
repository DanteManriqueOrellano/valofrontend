import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatBottomSheetModule, } from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import { IphoneModule } from './iphone/iphone.module';
import { ManagerdialogModule } from './managerdialog/managerdialog.module';
import { ManagerbottomsheetModule } from './managerbottomsheet/managerbottomsheet.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxDropzoneModule,
    MatBottomSheetModule,
    MatListModule,
    ManagerdialogModule,
    ManagerbottomsheetModule,
    IphoneModule
  ],
  providers: [
    
],
  bootstrap: [AppComponent]
})
export class AppModule { }
