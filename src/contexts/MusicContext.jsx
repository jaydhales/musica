import { createContext } from "react";

const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  // All logic stays here

  return <MusicContext.Provider value={{}}>{children}</MusicContext.Provider>;
};

export { MusicContext, MusicContextProvider };
