import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ALERT_LIFE_TIME } from "../../assets/js/constants";
import { clearMessage } from "../../redux/app/action";
import { PossibleMessageTypes } from "../../redux/app/types";
import { Alert } from "./AlertItemStyle";

export interface AlertItemProps {
  id: string,
  type: PossibleMessageTypes;
}

const AlertItem: React.FC<AlertItemProps> = ({ id, type, children }) => {
  const dispatch = useDispatch();

  const removeMessage = useCallback(() => {
    dispatch(clearMessage(id));
  }, [dispatch, id]);

  useEffect(() => {
    setTimeout(() => {
      removeMessage();
    }, ALERT_LIFE_TIME);
  }, [removeMessage]);

  return <Alert lifetime={ALERT_LIFE_TIME} type={type}>{children}</Alert>;
};

export { AlertItem };
