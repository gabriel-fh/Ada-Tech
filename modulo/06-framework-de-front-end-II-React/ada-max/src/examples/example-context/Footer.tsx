import { useLocalTheme } from "./use-local-theme";
import { useTheme } from "./ThemeContext";

export const Footer = () => {
  const { theme, toggle } = useLocalTheme();

  const global = useTheme();

  return (
    <footer className="Footer">
      <p>Footer</p>
      <p>
        <button onClick={() => global.toggle()}>CONTEXT {global.theme}</button>
      </p>
      <p>
        <button onClick={() => toggle()}>{theme}</button>
      </p>
    </footer>
  );
};
