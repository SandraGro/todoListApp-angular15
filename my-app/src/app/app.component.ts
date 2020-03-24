import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ""
  showEditField = true;
  list = []
  constructor(){
    this.title = 'To-Do list';

    this.list = [
      {
        title: 'First item',
        completed: true
      },
      {
        title: 'Second item',
        completed: false
      },
      {
        title: 'Third item',
        completed: false
      }];
  }

  addTodo(){
    console.log('add');
  };

  updateTodo(item, index){
    console.log('add');
  };

  removeTodo(item, index){
    console.log('add');
  };

  toggleState(item){
    console.log('toggle');

  };
  
  }

