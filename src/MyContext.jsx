// MyContext.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function MyProvider({ children }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggleButton = () => {
    setIsButtonClicked((prev) => !prev);
  };

  return (
    <MyContext.Provider value={{ isButtonClicked, toggleButton }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
