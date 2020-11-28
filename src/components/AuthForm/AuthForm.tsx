import React from "react";
import { AuthFormContainer, AuthFormTitle } from "./AuthFormStyle";
import { ReactComponent as UserAvatar } from "../../assets/img/userMale.svg";
import { AuthLoginForm } from "../AuthLoginForm/AuthLoginForm";

const AuthForm: React.FC = () => {
  return (
    <AuthFormContainer>
      <AuthFormTitle>sign in</AuthFormTitle>
      <UserAvatar />
      <AuthLoginForm />
    </AuthFormContainer>
  );
};

export { AuthForm };
