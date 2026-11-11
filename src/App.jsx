
import { useState } from "react";
import Counter from "./Counter";
import ThemeToggle from "./ThemeToggle";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = () => {
    setTheme((previousTheme) =>
      previousTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <div className={`app-container ${theme}`}>
      <ThemeToggle
        theme={theme}
        onToggle={handleThemeToggle}
      />
      <main className="main-content">
        <Counter />
        <div className="theme-status">
          Current Theme: <strong>{theme.toUpperCase()}</strong>
        </div>
      </main>
      </div>
  );
}

export default App;
