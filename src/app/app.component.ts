import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDragExit, CdkDragEnter } from '@angular/cdk/drag-drop';
import {ViewChild, ElementRef} from '@angular/core';
import { read } from 'fs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('doneList',{static: true}) doneList:ElementRef;
  todo = [];
  done = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  review = [];
  showPlaceholder: "add Item Here";

countOfDropContainer:number=0;
   drop(event: CdkDragDrop<string[]>) {
    if(event.container.id==="donelist"){
      console.log("this is home");
    }else if( event.container.data.length>4){
      alert("conatainer is full");
      return;
    }

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
         
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                       
    }
  
      }

      entered(event: CdkDragEnter<string[]>) {
        console.log('Entered', event.item.data);
       }
      exited(event: CdkDragExit<string[]>){

        console.log('Exited', event.item.data);
      }
       /** Predicate function that only allows even numbers to be dropped into a list. */
 

  }

 

