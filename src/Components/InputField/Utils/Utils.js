import dictionary from "../../../GlobalUtils/Dictionary.json";
import {
  editWpm,
  editEpm,
  editAcc,
} from "../../../Store/Reducers/CounterReducer";
class InputFieldUtils {
  //to focus on the content editable div
  handleFocus(inputRef, words) {
    inputRef.current.focus();
    let selection = document.getSelection();
    let node = inputRef.current.firstChild;
    if (selection.rangeCount && node) {
      ["Start", "End"].forEach((pos) =>
        selection.getRangeAt(0)["set" + pos](node, words.currentWord.length)
      );
    }
  }

  //to handle typing
  handleInput(e, words, setWords, inputRef, state, dispatch) {
    let charType = e.nativeEvent.inputType;
    let char = e.nativeEvent.data;
    let text = e.currentTarget.textContent;
    let originalWordsLeftArr = [...words.originalWordsLeft];
    let wordsLeftArr = [...words.wordsLeft];
    let wordsCompletedArr = [...words.wordsCompleted];
    let currentWord = words.currentWord;
    let wordIndex = 0;
    let wpm = state.wpm;
    let epm = state.epm;

    let submitKeys = new Set(["insertParagraph"]);

    if (submitKeys.has(charType) || char === " ") {
      inputRef.current.innerText = "";
      if (text.length === 1) {
        return;
      }
      if (originalWordsLeftArr[0] === currentWord) {
        wordsCompletedArr.push({
          correct: true,
          word: currentWord,
        });
        wpm++;
        dispatch(editWpm(wpm));
      } else {
        wordsCompletedArr.push({
          correct: false,
          word: currentWord,
        });
        epm++;
        dispatch(editEpm(epm));
      }

      //Accuracy
      let acc = Math.round((wpm / (wpm + epm)) * 100);
      dispatch(editAcc(acc));

      wordsLeftArr.shift();
      originalWordsLeftArr.shift();

      setWords({
        ...words,
        currentWord: "",
        wordsCompleted: wordsCompletedArr,
        wordsLeft: wordsLeftArr,
        originalWordsLeft: originalWordsLeftArr,
      });
    } else {
      let newString = "";

      for (let i = 0; i < text.length; i++) {
        if (text[i] === originalWordsLeftArr[wordIndex][i])
          newString += text[i];
        else break;
      }

      let originalWord = originalWordsLeftArr[wordIndex];

      wordsLeftArr[wordIndex] = originalWord.substring(
        newString.length,
        originalWord.length
      );

      setWords({
        ...words,
        currentWord: text,
        wordsLeft: wordsLeftArr,
        originalWordsLeft: words.originalWordsLeft,
      });
    }
  }

  //get random words
  handleRandomWord() {
    let words = [];
    for (let i = 0; i < 120; i++) {
      words.push(getWord());
    }
    return words;
    function getWord() {
      let word = dictionary[Math.floor(Math.random() * 2287)];
      if (words.indexOf(word) === -1) return word;
      else getWord();
    }
  }
}
export default new InputFieldUtils();
