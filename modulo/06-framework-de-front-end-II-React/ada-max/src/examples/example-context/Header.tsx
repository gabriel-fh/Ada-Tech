import { useLocalTheme } from "./use-local-theme";
import { useTheme } from "./ThemeContext";

export const Header = () => {
  const { theme, toggle } = useLocalTheme();
  const global = useTheme();

  return (
    <header className="Header">
      <h2>header</h2>
      <p>
        <button onClick={() => global.toggle()}>CONTEXT {global.theme}</button>
      </p>
      <p>
        <button onClick={() => toggle()}>{theme}</button>
      </p>
    </header>
  );
};
