import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import LandingSection from "@/sections/LandingSection";
import TechnicalOverviewSection from "@/sections/TechnicalOverviewSection";

import { Flex } from "@chakra-ui/react";
import Loading from "@/components/Loading";
import { motion } from "framer-motion";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

import StatsMonitor from "@/components/StatsMonitor";

import "@/styles/css/globals.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  const { currLang } = useSelector((state) => state.language);
  const {
    i18n: { changeLanguage },
  } = useTranslation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    changeLanguage(currLang);
  }, [currLang]);

  return loading ? (
    <Loading />
  ) : (
    <Flex
      as={motion.div}
      direction="column"
      color="white"
      w="100%"
      transition={1}
      initial={{ opacity: 0, y: 20 }} // Starts off screen
      animate={{ opacity: 1, y: 0 }}
    >
      <Navbar />
      <LandingSection />
      <TechnicalOverviewSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </Flex>
  );
}

export default App;
