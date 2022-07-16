import React from "react";
import { Div } from "../../StyledComponents/Div";
function Timer({ timer }) {
  return (
    <Div
      borderWidth="5px"
      borderColor="#ffd600"
      borderRadius="50%"
      height="120px"
      width="120px"
      borderStyle="solid"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      margin="0 100px 0 0"
    >
      <Div fontSize="40px" fontWeight="bold">
        {timer}
      </Div>
      <Div margin="-10px 0 0 0">seconds</Div>
    </Div>
  );
}

export default Timer;
