import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserListTable, UserListTableCell, UserListWrapper, UserTableHead } from "./UserListStyle";
import { IUsersResponse } from "../../types/api";
import { getFormatedDate } from "../../assets/js/formatData";
import { fetchUsers } from "../../redux/users/actions";
import { getSortedUsers } from "../../redux/users/selectors";
import { UserSortButton } from "../UserSortButton/UserSortButton";
import { PossibleSortTypes } from "../../redux/users/types";

// TODO: Добавить какой-нибудь интерфейс Суперюзеру и активному юзеру
const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(getSortedUsers);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <UserListWrapper title="USER LIST">
      <UserListTable>
        <UserTableHead>
          <tr>
            <UserListTableCell width="7rem" textAlign="center">
              <UserSortButton sortType={PossibleSortTypes.BY_ID}>id</UserSortButton>
            </UserListTableCell>
            <UserListTableCell>username</UserListTableCell>
            <UserListTableCell>firstname</UserListTableCell>
            <UserListTableCell>lastname</UserListTableCell>
            <UserListTableCell textAlign="right">last online</UserListTableCell>
          </tr>
        </UserTableHead>
        <tbody>
          {usersData.map((user: IUsersResponse) => (
            <tr key={user.id}>
              <UserListTableCell textAlign="center">{user.id}</UserListTableCell>
              <UserListTableCell>{user.username}</UserListTableCell>
              <UserListTableCell>{user.first_name}</UserListTableCell>
              <UserListTableCell>{user.last_name}</UserListTableCell>
              <UserListTableCell textAlign="right">
                {getFormatedDate(user.last_login)}
              </UserListTableCell>
            </tr>
          ))}
        </tbody>
      </UserListTable>
    </UserListWrapper>
  );
};

export { UserList };
