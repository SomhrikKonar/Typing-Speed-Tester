import styled from "styled-components";

export const CenterdContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: -10vh;
  flex-direction: ${(props) => props.flexDirection};
`;
