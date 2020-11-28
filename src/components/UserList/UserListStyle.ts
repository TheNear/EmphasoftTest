import styled from "styled-components";
import { commonContainerStyle } from "../../styles/CommonStyles";

export const UserListWrapper = styled.div`
  ${commonContainerStyle};
  width: 100%;
`;

export const UserListTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 1.3rem;
`;

export const UserTableHead = styled.thead`
  font-weight: 700;
  text-transform: uppercase;
`;

interface UserListTableCellProps {
  textAlign?: "left" | "right" | "center";
}

export const UserListTableCell = styled.td<UserListTableCellProps>`
  padding: 1rem;
  text-align: ${({ textAlign }) => textAlign || "left"};
  border-bottom: 1px solid ${({ theme }) => theme.inactiveColor};
`;
