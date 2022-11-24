import styled from "styled-components";

export const TextField = styled.input`
  background-color: cyan;
  font-size: 20px;
  color: ${(propx) => propx.inputField || "blue"};
  font-weight: ${(x) => x.fw || 300};
`;
