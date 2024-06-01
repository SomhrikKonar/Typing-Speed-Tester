import React, { useState, useEffect } from "react";
import { Div } from "../../StyledComponents/Div";
import Counter from "../Counters/Counter";
import Timer from "../Timer/Timer";

function Info({ status, setStatus }) {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (status === "ongoing") setTimer(timer - 1);
    else if(status === "stopped") setTimer(60)
  }, [status]);

  useEffect(() => {
    let timeout = null
    if (status === "ongoing") {
      if (timer - 1 >= 0)
        timeout = setTimeout(() => {
          setTimer(timer - 1);
        }, 1000);
      else {
        setStatus("completed");
        setTimer(60);
      }
    }
    return ()=>{
      clearTimeout(timeout)
    }
  }, [timer]);


  return (
    <Div display="flex" alignItems="center" margin="0 0 60px 0">
      <Timer timer={timer} />
      <Counter title="Words/min" useKey="wpm" />
      <Counter title="Error/min" useKey="epm" />
      <Counter
        title="Accuracy %"
        useKey="acc"
        styles={{ margin: "20px 0 0 0" }}
      />
    </Div>
  );
}

export default Info;
