import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserListTable, UserListTableCell, UserListWrapper, UserTableHead } from "./UserListStyle";
// import usersData from "../../mock/users.json";
import { IUsersResponse } from "../../types/api";
import { getFormatedDate } from "../../assets/js/formatData";
import { fetchUsers } from "../../redux/users/actions";
import { RootState } from "../../types/redux";
import { getSortedUsers } from "../../redux/users/selectors";

// TODO: Добавить какой-нибудь интерфейс Суперюзеру и активному юзеру
const UserList: React.FC = () => {
  const dipatch = useDispatch();
  const usersData = useSelector(getSortedUsers);
  useEffect(() => {
    dipatch(fetchUsers());
  }, [dipatch]);

  return (
    <UserListWrapper>
      <UserListTable>
        <UserTableHead>
          <tr>
            <UserListTableCell textAlign="center">id</UserListTableCell>
            <UserListTableCell>nickname</UserListTableCell>
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
              <UserListTableCell textAlign="right">{getFormatedDate(user.last_login)}</UserListTableCell>
            </tr>
          ))}
        </tbody>
      </UserListTable>
    </UserListWrapper>
  );
};

export { UserList };
