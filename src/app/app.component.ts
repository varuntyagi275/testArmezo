import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDragExit, CdkDragEnter, copyArrayItem } from '@angular/cdk/drag-drop';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('doneList', { static: true }) doneList: ElementRef;
  todo = [];
  done=[{value:1,disabled:false},{value:2,disabled:false},{value:3,disabled:false},{value:4,disabled:false},{value:5,disabled:false},{value:6,disabled:false},{value:7,disabled:false},{value:8,disabled:false},{value:9,disabled:false},{value:10,disabled:false},{value:11,disabled:false}]
  //done = [1, 2, 3,4, 5, 6, 7, 8, 9, 10, 11, ];
  review = [];

  
  drop(event: CdkDragDrop<string[]>) {
    if (event.container.id === "donelist") {
      console.log("this is home");
    } else if (event.container.data.length > 4) {
      alert("conatainer is full");
      return;
    }

    if (event.previousContainer === event.container) {
      moveItemInArray(this.done, event.previousIndex, event.currentIndex);
    } else {
      if (event.previousContainer.id === "donelist"
      ) 
      {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );

        if (event.previousContainer.exited) {
          event.item.disabled=true
          
         } 
        }else {

                 if (event.previousContainer === event.container) 
                 {
                  console.log("container is same. dont disable the item")
                 }
                 transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                 
                   function onlyUnique(value, index, self) {
                   return self.indexOf(value) === index;
                    }
                    var unique = this.done.filter(onlyUnique);
                    this.done = unique
                     console.log(this.done)
                      event.container.data.splice(1,1,event.item.toString())
                      if(event.item.disabled===true){
                       event.item.disabled=false;
                       console.log(event.item.disabled+ "will Do that if asked"); 
                      }
               
                }


    }
  }

}