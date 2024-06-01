import styled from "styled-components";

export const Input = styled.div`
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  height: ${(props) => props.height};
  min-width: ${(props) => props.minWidth};
  border: ${(props) => props.border || 0};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  caret-color: black;
  color: ${(props) => props.color};
  outline: ${(props) => props.outline || 0};
  contenteditable: ${(props) => props.contentEditable};
  overflow: ${(props) => props.overflow};
  white-space: ${(props) => props.whiteSpace};
  max-width: 50%;
`;
