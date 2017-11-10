import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Task } from './task';
import { List } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(List) list: List;

  public tasks : Task [];

  constructor(public navCtrl: NavController) {
    this.tasks = [
      {id: 1, title: 'Wash the dishes', isDone: false, isEdit: false},
      {id: 2, title: 'Call mommy', isDone: false, isEdit: false},
      {id: 3, title: 'Trains at Tutorial Dojo', isDone: false, isEdit: false},
    ];
  }

  //Add Task 
  addTask(title){
    if(title){
      this.tasks.push(new Task(title));
    }
  }

  //Edit Task
  editTask(task){
    task.isEdit =!task.isEdit;
    this.list.closeSlidingItems();
  }

  //Delete Task
  deleteTask(id){
    this.tasks.splice(id,1);
  }

}
