import React from "react";
import { useStore } from "../../Store/Store";
import { Div } from "../../StyledComponents/Div";

function Counter({ title, useKey, styles }) {
  const [state] = useStore();
  return (
    <Div margin={styles?.margin || "20px 40px 0 0"}>
      <Div
        minWidth="100px"
        height="100px"
        backgroundColor="#fff"
        borderRadius="15px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        fontSize="40px"
        fontWeight="bold"
        padding="0 10px"
      >
        {state[useKey]}
      </Div>
      <Div textAlign="center" margin="5px 0 0 0" maxWidth="100%">
        {title}
      </Div>
    </Div>
  );
}

export default Counter;
