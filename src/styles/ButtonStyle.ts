import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: inherit;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  border: none;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.mainColor};
  box-shadow: 0px 2px 5px 1px ${({ theme }) => `${theme.mainColor}cc`};
  padding: 1rem 2rem;
  cursor: pointer;
`;
