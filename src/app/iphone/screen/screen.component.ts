import { Component, ComponentRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDynamicDialogConfig, SheetdialogComponent } from 'src/app/managerdialog/sheetdialog/sheetdialog.component';
import { configBase } from '../config/configbase';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent  {

  count: number = 0;

  @ViewChild('yesNoDialogTemplate')  yesNoTemplate: TemplateRef<any> | undefined;
  @ViewChild('dataDialogTemplate')  dataTemplate: TemplateRef<any> | undefined;
  
  
  constructor(public dialog: MatDialog) {}

  openYesNoDialog() {
    const dialogRef = this.dialog.open(SheetdialogComponent, {
      width: '250px',
      panelClass: 'panelclassdialog',
      data: <IDynamicDialogConfig>{
        title: 'Really?',
        dialogContent: this.yesNoTemplate,
        acceptButtonTitle: 'Delete it!',
        declineButtonTitle: 'No stop!'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      // delete it
    });
  }

  openDataDialog() {
    
    const dialogRef = this.dialog.open(SheetdialogComponent, 
      {
        ...configBase,
        data: <IDynamicDialogConfig>{
        title: 'Show the count!',
        dialogContent: this.dataTemplate,
        acceptButtonTitle: 'Ok',
        declineButtonTitle: ''
      }

    }
    
    );
  }

  increaseCount() {
    this.count++;
  }

}
