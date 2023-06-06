import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../core/services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {
  task:string = '';
  constructor(private route: ActivatedRoute,private taskService: TaskService)
  {
    const index=parseInt(this.route.snapshot.paramMap.get("index")|| '',10);
    this.task=this.taskService.getTask(index);
  }

}
