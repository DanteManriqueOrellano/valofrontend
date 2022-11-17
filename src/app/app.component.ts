import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import {MatBottomSheet, MatBottomSheetConfig, MatBottomSheetRef} from '@angular/material/bottom-sheet';

export interface MenuItem{
  label:string;
  icon:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpClient: HttpClient,private _bottomSheet: MatBottomSheet){
    
  }
  
  title = 'frontendv1';
  files: File[] = [];
  dockBasicItems: MenuItem[];

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    const formData = new FormData();  
      
    //for (var i = 0; i < this.files.length; i++) {   
      //formData.append("file[]", this.files[i]);
      formData.append("file", this.files[0]);  
    //}
    
    this.httpClient.post('http://localhost:3031/addinexcel/uploadv2', formData, {responseType: 'blob'})  
    .subscribe(res => {  
       console.log(res);  
       //alert('Uploaded Successfully.');  
    })  
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  


}
