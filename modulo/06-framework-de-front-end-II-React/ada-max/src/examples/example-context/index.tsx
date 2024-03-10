import "./styles.css";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { ThemeProvider } from "./ThemeContext";
import { createContext } from "react";

export const ThemeContext = createContext<string | null>(null);
export const HelloContext = createContext<string | null>(null);

export const ExampleContext = () => {
  return (
    <ThemeProvider>
      <div className="Container">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
};
