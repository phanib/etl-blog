import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import { config } from "./config";
import Router from "./Router";
import Toggle from "./Components/Theme/Toggler";
import { GlobalStyles } from "./Components/Theme/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Theme/Theme";
import { useDarkMode } from "./Components/Theme/useDarkMode";
/**
 * INHERITED FROM https://github.com/saadpasta/react-blog-github
 *
 * MODIFICATIONS:
 * 1. Removed Apollo Graphql client
 * 2. Adjusted themeing Provider
 */
const Application = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
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
    </>
  );
};

export default Application;
