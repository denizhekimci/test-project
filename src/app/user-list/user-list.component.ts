import {Component} from '@angular/core';
import {User} from "./users.model";
import {retrievedUserList} from "../state/users.actions";
import {select, Store} from "@ngrx/store";
import {UserService} from "./user.service";
import { getUsers } from "../state/users.selectors";
import {AppState} from "../state/app.state";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users$ = this.store.pipe(select(getUsers))

  constructor(
    private userService: UserService,
    private store: Store<AppState>
  ) {
  }

  displayedColumns: string[] = ['name', 'username', 'email'];
  public user$: User | undefined;

  ngOnInit() {
    this.userService
      .getUsers()
      .subscribe((user) => this.store.dispatch(retrievedUserList({ allUsers: user as User[] })));
  }

  getRecord(id:number) {
    this.users$.subscribe((user) => {
      this.user$ = user.find(user=> user.id == id);
    });

  }
}
