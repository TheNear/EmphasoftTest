import styled from "styled-components";
import { CommonContainer } from "../../styles/CommonStyles";
import { device } from "../../styles/media";

export const UserListWrapper = styled(CommonContainer)`
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

export const UserListTableRow = styled.tr`
  :nth-child(2n + 1) {
    background: ${({ theme }) => theme.inactiveColor};
  }
`;

interface UserListTableCellProps {
  textAlign?: "left" | "right" | "center";
  width?: string;
}

export const UserListTableCell = styled.td<UserListTableCellProps>`
  padding: 1rem;
  text-align: ${({ textAlign }) => textAlign || "left"};
  border-bottom: 1px solid ${({ theme }) => theme.inactiveColor};
  ${({ width }) => (width ? `width: ${width}` : "")};

  @media ${device.mobileL} {
    padding: 0.5rem;
  }
`;
