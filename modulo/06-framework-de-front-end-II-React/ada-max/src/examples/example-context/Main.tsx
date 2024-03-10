import { useLocalTheme } from "./use-local-theme";
import { useTheme } from "./ThemeContext";

export const Main = () => {
  const { theme, toggle } = useLocalTheme();
  const global = useTheme();

  return (
    <main className="Main">
      <p>
        <button onClick={() => global.toggle()}>CONTEXT {global.theme}</button>
      </p>
      <p>
        <button onClick={() => toggle()}>{theme}</button>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nam
        deserunt numquam necessitatibus consectetur sunt odit eius esse quasi
        non provident, ad rerum commodi qui, tempore voluptate dolores placeat.
        Illo consectetur unde ea reprehenderit explicabo placeat consequuntur
        porro voluptatum deserunt quod omnis, neque, quam quisquam nemo soluta
        impedit. Cum, illum.
      </p>
    </main>
  );
};
