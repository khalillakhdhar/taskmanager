import { Component } from '@angular/core';
import { TaskService } from '../core/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks:string[] = [];
  newTask:string="";
  constructor(private taskService:TaskService)
  {
    // injection de service
  }
  ngOnInit(): void
  {
    this.tasks=this.taskService.getTasks();

  }
  addTask(): void{
    if(this.newTask!=="")
    {
      this.taskService.addTasks(this.newTask);
      this.newTask="";

    }
    else{
    alert("la tache ne peut pas être vide!");
    }
  }

}
