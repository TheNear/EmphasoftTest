import styled from "styled-components";

export const SortButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface SortButtonTypeProps {
  active?: boolean;
}

export const SortButtonType = styled.button<SortButtonTypeProps>`
  font-family: inherit;
  font-size: inherit;
  border: none;
  background-color: transparent;
  text-transform: inherit;
  font-weight: inherit;
  cursor: pointer;
  color: ${({ theme, active }) => (active ? theme.mainColor : "inherit")};
`;

interface SortButtonDirectionProps {
  active?: boolean;
  toLow?: boolean;
}

// TODO: С дизайном фокусов что-нибудь придумать
export const SortButtonDirection = styled.button<SortButtonDirectionProps>`
  position: relative;
  display: block;
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: ${({ active }) => (active ? "3px" : "0px")};
  width: ${({ active }) => (active ? "16px" : "0px")};
  height: 20px;
  border: none;
  background-color: transparent;
  overflow: hidden;
  transition: width 0.5s ease, margin 0.5s ease;
  cursor: pointer;

  :after {
    position: absolute;
    content: "";
    left: 50%;
    bottom: 4px;
    width: 0;
    height: 0;
    transform: translate(-50%, 0);
    border-style: solid;
    border-width: 4px 4px 0 4px;
    transition: border 0.3s ease;
    border-color: ${({ toLow, theme }) => (!toLow ? theme.fontColor : theme.mainColor)}
      transparent transparent transparent;
  }

  :before {
    position: absolute;
    content: "";
    left: 50%;
    top: 5px;
    width: 0;
    height: 0;
    transform: translate(-50%, 0);
    border-style: solid;
    border-width: 0 4px 4px 4px;
    transition: border 0.3s ease;
    border-color: transparent transparent ${({ toLow, theme }) => (!toLow ? theme.mainColor : theme.fontColor)} transparent;
  }
`;
