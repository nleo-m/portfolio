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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2600);
  }, []);

  return (
    <Flex
      as={motion.div}
      direction="column"
      color="white"
      w="100%"
      transition={0.75}
      initial={{ opacity: 0, y: 10 }} // Starts off screen
      animate={{ opacity: 1, y: 0 }}
    >
      {/* <StatsMonitor /> */}

      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <LandingSection />
          <TechnicalOverviewSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </Flex>
  );
}

export default App;
