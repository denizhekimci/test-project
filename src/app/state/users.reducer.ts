import { createReducer, on } from '@ngrx/store';

import { retrievedUserList } from "./users.actions";
import { User } from "../user-list/users.model";

export const initialState: User[] = [];

const _usersReducer = createReducer(
  initialState,
  on(retrievedUserList, (state, { allUsers }) => {
    return [...allUsers];
  })
);

export function usersReducer(state: any, action: any) {
  return _usersReducer(state, action);
}
