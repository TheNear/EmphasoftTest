import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "../../components/Loader/Loader";
import { getLoadingStatus } from "../../redux/app/selectors";
import { SideWindowsWrapper } from "./SideWindowsStyle";

const SideWindows: React.FC = () => {
  // TODO: Можно сделать всплывашку с ошибками
  const isLoading = useSelector(getLoadingStatus);

  if (isLoading) {
    return (
      <SideWindowsWrapper>
        <Loader />
      </SideWindowsWrapper>
    );
  }

  return null;
};

export { SideWindows };
