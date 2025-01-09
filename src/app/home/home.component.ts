import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tdl-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @Input() task: string = '';
  list: string[] = [];

  createList(task: string){
    this.list.push(task);
  }

  displayList(){
    return this.list;
  }
}
