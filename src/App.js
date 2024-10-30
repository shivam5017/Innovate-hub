import { useTheme } from "./Contexts/ThemeContext";
import AllRouter from "./AllRoutes/AllRoutes";
import Navbar from "./Components/navbar/Navbar";
import { motion } from "framer-motion";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      className={`min-h-screen transition-colors duration-500 ${isDarkMode ? "dark" : ""}`}
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} // Adjust duration for smoother effect
    >
      <Navbar />
      <AllRouter />
    </motion.div>
  );
}

export default App;
