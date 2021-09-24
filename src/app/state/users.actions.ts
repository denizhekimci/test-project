import { createAction, props } from '@ngrx/store';
import { User } from "../user-list/users.model";

export const retrievedUserList = createAction(
  '[User List/API] Retrieve Users',
  props<{ allUsers: User[]; }>()
);
