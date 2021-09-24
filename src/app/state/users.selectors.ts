import { AppState } from "./app.state";
import {createSelector} from "@ngrx/store";
import {User} from "../user-list/users.model";

export const userSelector = createSelector(
  (state: AppState) => state.users,
  (users: User[]) => users
)

export const getUsers = createSelector(
  userSelector,
  (users: User[]) => {
    return users.filter((user)=> user!==undefined);
  }
)

export const getUserById = (id: number) => createSelector(
  userSelector,
  (userItems) => {
  if (userItems) {
    return userItems.find(item => {
      return item.id === id;
    });
  } else {
    return undefined;
  }
});
