import {Component, Input, OnInit, Output} from '@angular/core';
import {User, users} from "../../users.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = users;
  displayedColumns: string[] = ['name', 'username', 'email'];
  dataSource = users;
  @Output() user!: User | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  getRecord(id:number) {
    this.user = users.find(element => element.id==id);
  }
}
