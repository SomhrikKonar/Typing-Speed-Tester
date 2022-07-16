import styled from "styled-components";
export const Button = styled.button`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderWidth || "10px"};
  border: 0;
  outline: 0;
  margin: ${(props) => props.margin};
  background: ${(props) => props.backgroundColor};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
`;
