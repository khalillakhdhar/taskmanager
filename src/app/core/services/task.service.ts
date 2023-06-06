import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private tasks: string[] = [];
  constructor() { }
  getTasks(): string[] {
    return this.tasks;
  }
  addTasks(task:string): void
  {
    this.tasks.push(task);

  }
  deleteTasks(index:number): void{
    this.tasks.splice(index,1);
  }
  getTask(index:number): string
  {
    return this.tasks[index];
  }
}
