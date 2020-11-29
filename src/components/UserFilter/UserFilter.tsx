import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import { useForm } from "../../hooks/useForm";
import { changeFilterValue } from "../../redux/usersFilter/actions";
import { UsersFilterState } from "../../redux/usersFilter/types";
import { CommonInput } from "../../types/common";
import { UserFilterWrapper } from "./UserFilterStyle";

export interface FilterInputs extends CommonInput {
  name: Extract<keyof UsersFilterState, string>;
}

// Сделал так просто для возможности расширения и удобной типизации со стейтом в редаксе
const filterInputs: FilterInputs[] = [
  {
    id: "username_filter",
    name: "name",
    placeholder: "Search by Username",
    type: "text",
  },
];

const UserFilter: React.FC = () => {
  const dispatch = useDispatch();
  const { values, changeHandler } = useForm<UsersFilterState>();
  const debouncedFilterValue = useDebounce(values);

  useEffect(() => {
    dispatch(changeFilterValue(debouncedFilterValue));
  }, [dispatch, debouncedFilterValue]);

  return (
    <UserFilterWrapper>
      {filterInputs.map((input) => (
        <input
          key={input.id}
          id={input.id}
          name={input.name}
          placeholder={input.placeholder}
          type={input.type}
          value={values[input.name]}
          onChange={changeHandler}
        />
      ))}
    </UserFilterWrapper>
  );
};

export { UserFilter };
