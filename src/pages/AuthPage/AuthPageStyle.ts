import styled from "styled-components";

export const AuthPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.secondColor},
    ${({ theme }) => theme.mainColor}
  );
`;
