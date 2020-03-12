import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDragExit, CdkDragEnter, copyArrayItem } from '@angular/cdk/drag-drop';
import {ViewChild, ElementRef} from '@angular/core';

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
  draggedOut:boolean;
countOfDropContainer:number=0;
   drop(event: CdkDragDrop<string[]>) {
    if(event.container.id==="donelist"){
      console.log("this is home");
    }else if( event.container.data.length>4){
      alert("conatainer is full");
      return;
    }

    if (event.previousContainer === event.container) {
      moveItemInArray(this.done, event.previousIndex, event.currentIndex);
    } else {
         
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      if(event.previousContainer=== event.container){
            console.log("container is same. dont disable the item")      
          }else {
            if(event.previousContainer.exited){
                event.item.disabled=true;
                this.draggedOut=true;
            }
          }

                       
    }
        console.log(event.previousContainer.data);
        console.log(event.container.data);
      }

      entered(event: CdkDragEnter<string[]>) {
        console.log('Entered', event.item.data);
       }
      exited(event: CdkDragExit<string[]>){

        console.log('Exited', event.item.data);
      }
       /** Predicate function that only allows even numbers to be dropped into a list. */
 

  }

 

