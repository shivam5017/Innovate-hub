import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import HomePage from "../Pages/HomePage";
import ProjectDetail from "../Pages/Projects[id]";
import TeamPage from "../Pages/Team";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsAndConditions from "../Pages/TermsAndCondtions";
import NotFound from "../Pages/NotFound";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

const MotionRoute = ({ element }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransition}
    transition={pageTransition.transition}
  >
    {element}
  </motion.div>
);

const AllRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MotionRoute element={<HomePage />} />} />
        <Route path="/projects/:id" element={<MotionRoute element={<ProjectDetail />} />} />
        <Route path="/team" element={<MotionRoute element={<TeamPage />} />} />
        <Route path="/privacypolicy" element={<MotionRoute element={<PrivacyPolicy />} />} />
        <Route path="/terms-and-conditions" element={<MotionRoute element={<TermsAndConditions />} />} />
        <Route path="*" element={<MotionRoute element={<NotFound />} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AllRouter;
