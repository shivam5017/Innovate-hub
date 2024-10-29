import { useTheme } from "./Contexts/ThemeContext";
import AllRouter from "./AllRoutes/AllRoutes"
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
      <AllRouter />
    </div>
  );
}

export default App;
