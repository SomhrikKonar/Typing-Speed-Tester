import styled, { css, keyframes } from "styled-components";

export const Div = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color || "#111"};
  border-top-color: ${(props) => props.borderTopColor};
  border-bottom-color: ${(props) => props.borderBottomColor};
  border-right-color: ${(props) => props.borderRightColor};
  border-left-color: ${(props) => props.borderLeftColor};
  border-radius: ${(props) => props.borderRadius};
  border-width: ${(props) => props.borderWidth};
  border-color: ${(props) => props.borderColor};
  border-style: ${(props) => props.borderStyle};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  font-size: ${(props) => props.fontSize};
  overflow: ${(props) => props.overflow};
  position: ${(props) => props.position || "relative"};
  transition: ${(props) => props.transition};
  white-space: ${(props) => props.whiteSpace};
  text-align: ${(props) => props.textAlign || "left"};
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  text-decoration: ${(props) => props.textStyle};
  box-shadow: ${(props) => props.boxShadow};
  margin-bottom: ${(props) => props.marginBottom};
  font-weight: ${(props) => props.fontWeight};
  transform: ${(props) => props.transform};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  z-index: ${(props) => props.zIndex};
  animation: ${(props) =>
    props.animation &&
    css`
      ${startAnimate} 600ms linear infinite alternate-reverse
    `};
`;

const startAnimate = keyframes`
0%{
top:-25px
}
100%{
  top:-10px
}
`;
