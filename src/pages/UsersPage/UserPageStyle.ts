import styled from "styled-components";
import { FullwindowContainer } from "../../styles/CommonStyles";
import { device } from "../../styles/media";

export const UserPageWrapper = styled(FullwindowContainer)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 3rem;

  @media ${device.laptopL} {
    padding: 1rem;
  };

  @media ${device.mobileM} {
    padding: 1rem 0;
  }
`;
