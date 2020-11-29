import styled from "styled-components";
import { CommonContainer } from "../../styles/CommonStyles";

export const UserFilterWrapper = styled(CommonContainer)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
`;

export const UserFilterInput = styled.input`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.fontColor};
  border-radius: 0.4rem;
  transition: border 0.3s ease, box-shadow 0.3s ease;

  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.mainColor};
    box-shadow: 0 0 2px 0 ${({ theme }) => theme.mainColor};
  }
`;

export const UserFilterResetButton = styled.button`
  margin-left: 1rem;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  color: white;
  border: none;
  background-color: ${({ theme }) => theme.mainColor};
  font-weight: 700;
  text-transform: uppercase;
  transition: box-shadow 0.3s ease;

  :hover {
    box-shadow: 0 0 3px 0 ${({ theme }) => theme.mainColor};
  }
`;
