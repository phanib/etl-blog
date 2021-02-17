import React, { useReducer } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { config } from "./config";
import Router from "./Router";
import Toggle from "./Components/Theme/Toggler";
import { GlobalStyles } from "./Components/Theme/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Theme/Theme";
import { useDarkMode } from "./Components/Theme/useDarkMode";
import {
  StateContext,
  DispatchContext,
  initialState,
  reducer,
} from "./Contexts";

/**
 * INHERITED FROM https://github.com/saadpasta/react-blog-github
 *
 * MODIFICATIONS:
 * 1. Removed Apollo Graphql client
 * 2. Adjusted themeing Provider
 */
const Application = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Helmet>
          <title>{config.title}</title>
          <meta charSet="utf-8" />
          <meta name="description" content={config.subtitle} />
          <meta name="theme-color" content={config.header.backgroundColor} />
        </Helmet>
        <ThemeProvider theme={themeMode} toggleTheme={themeToggler}>
          <GlobalStyles />
          <Router />
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </ThemeProvider>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Application;
