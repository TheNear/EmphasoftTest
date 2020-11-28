import React from "react";
import { AuthFormWrapper, AuthInput } from "../../styles/FormStyle";
import { StyledButton } from "../../styles/ButtonStyle";
import { useForm } from "../../hooks/useForm";
import { CommonInput } from "../../types/common";

const loginInputs: CommonInput[] = [
  {
    id: "login-username",
    placeholder: "User Name",
    type: "text",
    name: "username",
  },
  {
    id: "login-password",
    placeholder: "Password",
    type: "password",
    name: "password",
  },
];

const AuthLoginForm: React.FC = () => {
  const { values, errors, changeHandler } = useForm();

  return (
    <AuthFormWrapper>
      {loginInputs.map(({ id, name, placeholder, type }) => (
        <AuthInput
          key={id}
          value={values[name] || ""}
          errors={errors[name] || ""}
          placeholder={placeholder}
          type={type}
          name={name}
          onChange={changeHandler}
        />
      ))}
      <StyledButton type="submit">log in</StyledButton>
    </AuthFormWrapper>
  );
};

export { AuthLoginForm };
