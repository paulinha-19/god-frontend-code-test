import styled from "styled-components";

export const IndicatorButton = styled.button<{ $isActive?: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin: 0 0.5rem;
  background-color: ${(props) => (props.$isActive ? "black" : "#e2e2e2f5")};
`;

export const PrevButton = styled.button`
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const NextButton = styled.button`
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  margin-left: 0.5rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
