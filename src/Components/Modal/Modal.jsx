import React, { useEffect, useState } from "react";
import { useStore } from "../../Store/Store";
import { Button } from "../../StyledComponents/Button";
import { Div } from "../../StyledComponents/Div";
import { Image } from "../../StyledComponents/Image";
import ModalUtils from "./Utils/Utils";
import Avatar from "../../Images/avatar.jpg";
import { setToDefault } from "../../Store/Reducers/CounterReducer";
function Modal({ setStatus }) {
  const [state, dispatch] = useStore();
  const [data, setData] = useState("");

  useEffect(() => {
    ModalUtils.getDetails(state.wpm, setData);
  }, []);

  return (
    <Div
      position="absolute"
      top="0"
      left="0"
      bottom="0"
      right="0"
      backgroundColor="#fafbfc5e"
      zIndex="1"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Div
        onClick={() => {
          setStatus("stopped");
          dispatch(setToDefault());
        }}
        position="absolute"
        height="100%"
        width="100%"
      ></Div>
      <Div
        zIndex="1"
        boxShadow="0 9px 24px rgb(0 0 0 / 12%), 0 9px 24px rgb(0 0 0 / 12%)"
        height="400px"
        width="400px"
        backgroundColor="#fff"
        borderRadius="10px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="20px"
      >
        <Image src={Avatar} height="120px" width="120px" borderRadius="50%" />
        <Div
          margin="10px 0 0 0"
          fontWeight="bolder"
          fontSize="30px"
          color="#4c4c4c"
        >
          {data}
        </Div>
        <Div
          margin="20px 0 0 0"
          padding="0 25px 0"
          textAlign="center"
          color="#5a5a5a"
          fontWeight="700"
          fontSize="18px"
        >
          You have successfully typed {state.wpm} Words in 60 Seconds with an
          Accuracy of {state.acc}%
        </Div>
        <Button
          height="40px"
          width="50%"
          backgroundColor="#ffd600"
          fontWeight="1000"
          fontSize="18px"
          margin="30px 0 0 0"
          onClick={() => {
            dispatch(setToDefault());
            ModalUtils.handleTryAgain(setStatus);
          }}
        >
          Try Again
        </Button>
      </Div>
    </Div>
  );
}

export default Modal;
