import useDarkMode from "./useDarkMode";

function DarkMode() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      style={{
        border: `1px solid ${darkMode ? "white" : "black"}`,
        background: "none",
        color: darkMode ? "white" : "black",
      }}
    >
      Toggle Dark mode
    </button>
  );
}

export default DarkMode;
