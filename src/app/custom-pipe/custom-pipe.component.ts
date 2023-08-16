import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {
  users: User[] = [];
  criteria: string = "surname";
  sortBy: string = "desc";

  constructor(private userSV: UsersService) { }

  ngOnInit(): void {
    this.users = this.userSV.getUsers();
  }
}
