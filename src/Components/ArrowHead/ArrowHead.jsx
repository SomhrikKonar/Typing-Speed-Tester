import React from "react";
import { Div } from "../../StyledComponents/Div";

function ArrowHead() {
  return (
    <Div
      height="0px"
      width="0px"
      borderWidth="10px"
      borderStyle="solid"
      position="absolute"
      left="45%"
      transform="translate(-50%)"
      borderTopColor="transparent"
      borderRightColor="transparent"
      borderBottomColor="transparent"
      borderLeftColor="#ffd600"
      transform="rotate(90deg)"
      top="5px"
    ></Div>
  );
}

export default ArrowHead;
