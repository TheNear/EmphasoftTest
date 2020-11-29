import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSortDirection, setSortType } from "../../redux/users/actions";
import { PossibleSortTypes } from "../../redux/users/types";
import { RootState } from "../../types/redux";
import { SortButtonDirection, SortButtonType, SortButtonWrapper } from "./UserSortButtonStyle";

export interface UserSortButtonProps {
  sortType: PossibleSortTypes;
}

const UserSortButton: React.FC<UserSortButtonProps> = ({ children, sortType }) => {
  const dispatch = useDispatch();
  const sortDirection = useSelector((store: RootState) => store.users.sortDirectionToLow);
  const activeSortType = useSelector((store: RootState) => store.users.sortType);

  const changeSortTypeHandler = () => {
    dispatch(setSortType(sortType));
  };

  const changeSortDirectionHandler = () => {
    dispatch(changeSortDirection());
  };

  return (
    <SortButtonWrapper>
      <SortButtonType onClick={changeSortTypeHandler} active={sortType === activeSortType}>
        {children}
      </SortButtonType>
      <SortButtonDirection
        onClick={changeSortDirectionHandler}
        active={sortType === activeSortType}
        tabIndex={sortType === activeSortType ? 0 : -1}
        toLow={sortDirection}
      />
    </SortButtonWrapper>
  );
};

export { UserSortButton };
