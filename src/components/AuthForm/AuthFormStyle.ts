import styled from "styled-components";

export const AuthFormContainer = styled.div`
  display: flex;
  max-width: 40rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 2rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 18px 4px #00000036;
`;

// TODO: Потом поменять, это не заголовок, а кнопка.
export const AuthFormTitle = styled.h4`
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 2px solid ${({ theme }) => theme.mainColor};
`;

export const AuthFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
