import { createSelector } from "reselect";
import { RootState } from "../../types/redux";
import { PossibleSortTypes } from "./types";

const getUsers = (store: RootState) => store.users.data;
const getSortType = (store: RootState) => store.users.sortType;
const getSortDirection = (store: RootState) => store.users.sortDirectionToLow;
const getFilterValue = (store: RootState) => store.filter;

export const getFilterdUsers = createSelector([getUsers, getFilterValue], (users, filterValues) => {
  return users.filter((user) => {
    const username = user.username.toLowerCase();
    const isUserNameCoincidence = filterValues.name
      ? username.includes(filterValues.name.toLowerCase())
      : true;
    return isUserNameCoincidence;
  });
});

export const getSortedUsers = createSelector(
  [getFilterdUsers, getSortType, getSortDirection],
  (users, sortType, sortDirection) => {
    switch (sortType) {
      case PossibleSortTypes.BY_ID:
        return [...users].sort((a, b) => {
          return sortDirection ? a.id - b.id : b.id - a.id;
        });
      case PossibleSortTypes.NOT_SORTED:
        return users;
      default:
        return users;
    }
  },
);
