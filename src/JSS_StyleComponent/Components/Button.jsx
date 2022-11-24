import styled from "styled-components";

export const Button = styled.button`
  background: ${(propsxxxx) => (propsxxxx.bgprimary ? "blue" : "red")};
  font-size: ${(props) => (props.font2x ? "3rem" : "1rem")};
  color: white;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  border: none;
  &:hover {
    background: linear-gradient(45deg, yellow, green);
    color: black;
  }
`;

export const SmallButton = styled(Button)`
  background-color: green;
  font-size: 10px;
  color: red;
  margin-left: 20px;
`;
