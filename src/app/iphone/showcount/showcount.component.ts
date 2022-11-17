import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetConfig, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DialogbottomsheetComponent } from 'src/app/managerbottomsheet/dialogbottomsheet/dialogbottomsheet.component';

@Component({
  selector: 'app-showcount',
  templateUrl: './showcount.component.html',
  styleUrls: ['./showcount.component.css']
})
export class ShowcountComponent {

  @ViewChild('yesNoDialogTemplate')  yesNoTemplate: TemplateRef<any> | undefined;
  @ViewChild('dataDialogTemplate')  dataTemplate: TemplateRef<any> | undefined;
  @ViewChild('bottomsheetcard')  cardTemplate: TemplateRef<any> | undefined;

  bottomSheetRef = {} as MatBottomSheetRef<DialogbottomsheetComponent>
  constructor(private bottomSheet: MatBottomSheet) { }
  openBottomSheet() {
    const config: MatBottomSheetConfig = {
      panelClass:'share-sheet',
      
    data: <any>{
      title: 'Really?',
      dialogContent: this.yesNoTemplate,
      acceptButtonTitle: 'Delete it!',
      declineButtonTitle: 'No stop!',
      
    }  };
    
    
    
    this.bottomSheetRef = this.bottomSheet.open(DialogbottomsheetComponent, config);
    
    this.bottomSheetRef.afterOpened().subscribe(() => {
      console.log('Bottom sheet is open.');
    });
    this.bottomSheetRef.afterDismissed().subscribe(data => {
      console.log('Return value: ', data);
    });
  }
  openBottomSheetCard(){
    const config: MatBottomSheetConfig = {
      panelClass:'share-sheet',
      data: <any>{
        title: 'Really?',
        dialogContent: this.cardTemplate,
        acceptButtonTitle: 'Delete it!',
        declineButtonTitle: 'No stop!',
        
      }  };
      
      
      
      this.bottomSheetRef = this.bottomSheet.open(DialogbottomsheetComponent, config);
      
      this.bottomSheetRef.afterOpened().subscribe(() => {
        console.log('Bottom sheet is open.');
      });
      this.bottomSheetRef.afterDismissed().subscribe(data => {
        console.log('Return value: ', data);
      });

  }
  
  

}
