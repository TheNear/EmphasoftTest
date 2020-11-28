import styled from "styled-components";
import { commonContainerStyle } from "../../styles/CommonStyles";

// FIXME: Фикс. ширина
export const AuthFormContainer = styled.div`
  display: flex;
  max-width: 40rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  ${commonContainerStyle};
`;

// TODO: Потом поменять, это не заголовок, а кнопка.
export const AuthFormTitle = styled.h4`
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 2px solid ${({ theme }) => theme.mainColor};
`;
