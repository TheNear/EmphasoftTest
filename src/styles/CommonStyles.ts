import styled, { css } from "styled-components";

export const commonContainerStyle = css`
  padding: 2rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 18px 4px #00000036;
`;

export const FullwindowContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

interface CommonContaienrProps {
  title?: string;
}

export const CommonContainer = styled.div<CommonContaienrProps>`
  position: relative;
  ${commonContainerStyle};

  ${({ title }) => title && `
  :after {
    position: absolute;
    content: "${title}";
    font-size: 1.2rem;
    font-weight: 700;
    background-color: white;
    border-radius: 1rem;
    padding: 0.5rem;
    left: 2rem;
    top: 0;
    transform: translate(0, -50%);
  }`}
`;
