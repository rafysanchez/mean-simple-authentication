import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  specialTasks: any = [];
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.taskService.getSpecialTasks()
      .subscribe(
        res => { this.specialTasks = res;
          console.log(this.specialTasks)
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['signin']);
            }
          }
        }
      )
  }

}
