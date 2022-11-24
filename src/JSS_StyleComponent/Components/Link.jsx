import React from "react";
import styled from "styled-components";

export const Link = ({ className, children, ...restProps }) => (
  <a className={className}>{children}</a>
);

export const StyledLink = styled(Link)`
  background-color: yellow;
  font-size: 15px;
  color: red;
`;
