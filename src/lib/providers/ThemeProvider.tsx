import { createContext, useContext } from "react";
import type { ReactNode } from 'react';

import globalStyles from '../styles/global';

interface IThemeContext {}

interface IThemeProvider {
  children: ReactNode;
}

const ThemeContext = createContext({} as IThemeContext);

function ThemeProvider({ children }: IThemeProvider) {
  globalStyles();

  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
