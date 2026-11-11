
function ThemeToggle({ theme, onToggle }) {
  return (
    <div className="theme-header">
      <div>
        <h1>React useState Practice</h1>
        <p>Counter & Theme Toggle Application</p>
      </div>

      <button className="theme-btn" onClick={onToggle}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;
