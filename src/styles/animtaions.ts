import { keyframes } from "styled-components";

export const opacityInAnim = keyframes` 
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const fadeInDown = keyframes`
 from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
