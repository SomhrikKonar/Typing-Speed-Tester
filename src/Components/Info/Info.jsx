import React, { useState, useEffect } from "react";
import { Div } from "../../StyledComponents/Div";
import Counter from "../Counters/Counter";
import Timer from "../Timer/Timer";
import { useStore } from "../../Store/Store";
import { setToDefault } from "../../Store/Reducers/CounterReducer";

function Info({ status, setStatus }) {
  const [timer, setTimer] = useState(60);
  const [, dispatch] = useStore();

  useEffect(() => {
    if (status === "ongoing") setTimer(timer - 1);
  }, [status]);

  useEffect(() => {
    if (status === "ongoing") {
      if (timer - 1 >= 0)
        setTimeout(() => {
          setTimer(timer - 1);
        }, 1000);
      else {
        setStatus("completed");
        setTimer(60);
      }
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
