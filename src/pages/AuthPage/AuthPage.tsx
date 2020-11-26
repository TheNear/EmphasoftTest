import React from "react";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { AuthPageWrapper } from "./AuthPageStyle";

const AuthPage: React.FC = () => {
  return (
    <AuthPageWrapper>
      <AuthForm />
    </AuthPageWrapper>
  )
};

export { AuthPage };
