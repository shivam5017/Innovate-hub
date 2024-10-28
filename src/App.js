import { useTheme } from "./Contexts/ThemeContext";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/navbar/Navbar";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${
        isDarkMode ? "dark" : ""
      } min-h-screen bg-background text-text  `}
    >
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
