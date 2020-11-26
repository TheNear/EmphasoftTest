import React from "react";
import { AuthFormContainer, AuthFormTitle } from "./AuthFormStyle";
import { ReactComponent as UserAvatar } from "../../assets/img/userMale.svg";
import { AuthInput } from "../../styles/FormStyle";
import { StyledButton } from "../../styles/ButtonStyle";

const AuthForm: React.FC = () => {
  return (
    <AuthFormContainer>
      <AuthFormTitle>sign in</AuthFormTitle>
      <UserAvatar />
      <form>
        <AuthInput placeholder="User Name" type="text" />
        <AuthInput placeholder="Password" type="text" />
        <StyledButton type="submit">log in</StyledButton>
      </form>
    </AuthFormContainer>
  );
};

export { AuthForm };
