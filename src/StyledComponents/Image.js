import styled from "styled-components";

export const Image = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props) => props.margin};
`;
