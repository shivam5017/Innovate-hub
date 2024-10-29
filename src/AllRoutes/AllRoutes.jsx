import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import HomePage from "../Pages/HomePage";
import ProjectDetail from "../Pages/Projects[id]";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

const AllRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
              transition={pageTransition.transition}
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
              transition={pageTransition.transition}
            >
              <ProjectDetail />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AllRouter;