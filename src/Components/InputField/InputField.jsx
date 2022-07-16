import React, { useEffect, useRef, useState } from "react";
import { Div } from "../../StyledComponents/Div";
import { Input } from "../../StyledComponents/Input";
import InputUtlis from "./Utils/Utils";
import StartAnimation from "../StartAnimation/StartAnimation";
import { useStore } from "../../Store/Store";

function InputField({ status, setStatus }) {
  const inputRef = useRef();
  const [words, setWords] = useState({
    currentWord: "",
    wordsLeft: [],
    originalWordsLeft: [],
    wordsCompleted: [],
  });
  const [state, dispatch] = useStore();

  const handleInput = (e) => {
    if (status !== "ongoing") setStatus("ongoing");
    InputUtlis.handleInput(e, words, setWords, inputRef, state, dispatch);
  };

  const handleFocus = () => {
    InputUtlis.handleFocus(inputRef, words);
  };

  useEffect(() => {
    const newSet = InputUtlis.handleRandomWord();
    setWords({ ...words, wordsLeft: newSet, originalWordsLeft: newSet });
  }, []);

  useEffect(() => {
    if (status === "completed") {
      const newSet = InputUtlis.handleRandomWord();
      inputRef.current.innerHTML = "";
      console.log(inputRef);
      setWords({
        ...words,
        currentWord: "",
        wordsCompleted: [],
        wordsLeft: newSet,
        originalWordsLeft: newSet,
      });
    }
  }, [status]);

  return (
    <Div
      cursor="pointer"
      onClick={handleFocus}
      padding="30px"
      height="100px"
      backgroundColor="#fff"
      width="80%"
      maxWidth="900px"
      borderRadius="15px"
      display="flex"
      justifyContent="left"
      boxShadow="0 9px 24px rgb(0 0 0 / 12%), 0 9px 24px rgb(0 0 0 / 12%)"
    >
      <Div
        flex="1"
        fontSize="30px"
        justifyContent="flex-end"
        alignItems="center"
        overflow="hidden"
        display="flex"
      >
        {words.wordsCompleted.map((word, index) => (
          <Div
            key={index}
            margin="0 5px 0 0"
            width="auto"
            color="#7a7a7a"
            display="flex"
            alignItems="center"
            whiteSpace="nowrap"
            textStyle={word?.correct ? "auto" : "line-through"}
          >
            {word.word}
          </Div>
        ))}
      </Div>
      {status === "stopped" && <StartAnimation />}
      <Input
        ref={inputRef}
        contentEditable={status !== "completed" ? "true" : "false"}
        fontSize="30px"
        minWidth="1px"
        color={"#377dff"}
        border="none"
        html="123"
        overflow="hidden"
        whiteSpace="nowrap"
        onInput={handleInput}
      />
      <Div
        width="50%"
        fontSize="30px"
        alignItems="center"
        overflow="hidden"
        display="flex"
      >
        {words.wordsLeft.map((word, index) => (
          <Div
            key={index}
            margin="0 5px 0 0"
            width="auto"
            whiteSpace="nowrap"
            display="flex"
            alignItems="center"
          >
            {word}
          </Div>
        ))}
      </Div>
    </Div>
  );
}

export default InputField;
