//creating action
export const CHANGE_WORD_COUNTER = "CHANGE_WORD_COUNTER";
export const CHANGE_ERROR_COUNTER = "CHANGE_ERROR_COUNTER";
export const CHANGE_ACCURACY_COUNTER = "CHANGE_ACCURACY_COUNTER";
export const SET_TO_DEFAULT = "SET_TO_DEFAULT";

//creating initial state
export const initialState = {
  wpm: 0,
  epm: 0,
  acc: 100,
};

//creating action generators
export const editWpm = (wpm) => ({
  type: CHANGE_WORD_COUNTER,
  wpm,
});
export const editEpm = (epm) => ({
  type: CHANGE_ERROR_COUNTER,
  epm,
});
export const editAcc = (acc) => ({
  type: CHANGE_ACCURACY_COUNTER,
  acc,
});
export const setToDefault = () => ({
  type: SET_TO_DEFAULT,
});

//reducer functions
export const counterReducer = (state = initialState, action) => {
  if (action.type === CHANGE_WORD_COUNTER) {
    return { ...state, wpm: action.wpm };
  } else if (action.type === CHANGE_ERROR_COUNTER) {
    return { ...state, epm: action.epm };
  } else if (action.type === CHANGE_ACCURACY_COUNTER) {
    return { ...state, acc: action.acc };
  } else if (action.type === SET_TO_DEFAULT) {
    return { wpm: 0, epm: 0, acc: 100 };
  } else {
    return { ...state };
  }
};
