import React from "react";
import { Div } from "../../StyledComponents/Div";
import ArrowHead from "../ArrowHead/ArrowHead";
function StartAnimation() {
  return (
    <Div
      position="absolute"
      left="49.3%"
      transform="translate(-50%)"
      backgroundColor="#ffd600"
      padding="5px 15px"
      borderRadius="10px"
      top="-20px"
      animation={true}
    >
      Start typing
      <Div width="100%">
        <ArrowHead />
      </Div>
    </Div>
  );
}

export default StartAnimation;
