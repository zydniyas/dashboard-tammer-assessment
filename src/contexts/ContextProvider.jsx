const { createContext, useContext, useState } = require("react");

const StateContext = createContext();

const initialStates = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setisClicked] = useState(initialStates);
  const [screenSize, setScreenSize] = useState(undefined);
  const handleClick = (clicked) => {
    setisClicked({ ...initialStates, [clicked]: true });
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setisClicked,
        isClicked,
        setisClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
