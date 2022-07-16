import React, { createContext, useContext, useReducer } from "react";

//creating context
const Store = createContext();
Store.displayName = "Store";

//hook to use this context
export const useStore = () => useContext(Store);

//creating a wrapper for our content
export const StoreProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
  );
};
