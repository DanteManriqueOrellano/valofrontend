import { Component, Inject, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


export interface IDynamicDialogConfig {
  title?: string;
  acceptButtonTitle?: string;
  declineButtonTitle?: string;
  dialogContent: TemplateRef<any> ;
}
@Component({
  selector: 'app-sheetdialog',
  templateUrl: './sheetdialog.component.html',
  styleUrls: ['./sheetdialog.component.css']
})
export class SheetdialogComponent  {
 

   constructor(@Inject(MAT_DIALOG_DATA) public data: IDynamicDialogConfig) {
    data.acceptButtonTitle ?? 'Yes';
    data.title ?? 'Unnamed Dialog';
  }

 

  

}
