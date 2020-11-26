import styled from "styled-components";

export const AuthInput = styled.input`
  width: 100%;
  text-align: center;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.secondFontColor};
  border-radius: 0.4rem;
  margin: 1rem 0;
  padding: 1rem;
  transition: border 0.4s ease, box-shadow 0.4s ease;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.mainColor};
    box-shadow: 0 1px 0 0 ${({ theme }) => theme.mainColor};
  }

  &::placeholder {
    color: ${({ theme }) => theme.secondFontColor};
  }
`;
