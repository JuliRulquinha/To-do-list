import { Component} from '@angular/core';
import { CommonModule} from '@angular/common';
import { IToDoList, ToDoList } from '../lists/list.model';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'tdl-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  lists: IToDoList[] = [];
  toDoList: IToDoList;
  task: string = '';

  saveList(){
   let toDoList: IToDoList = this.toDoList;
   toDoList.tasks.push(this.task);
   this.lists.push(toDoList);
  }

  createList(list: IToDoList){
    
  }

  addTask(){
    this.toDoList.tasks.push(this.task)
  }

  displayList(){
  
  }

  /**
   *
   */
  constructor() {
    this.toDoList = new ToDoList();
    //this.toDoList.tasks.push(this.task)
    this.addTask()
  }
}
