import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import LandingSection from "@/components/LandingSection";
import TechnicalOverviewSection from "@/components/TechnicalOverviewSection";

import { Flex } from "@chakra-ui/react";
import Loading from "@/components/Loading";
import { motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2600);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Flex
      as={motion.div}
      direction="column"
      color="white"
      w="100%"
      transition={0.75}
      initial={{ opacity: 0, y: 10 }} // Starts off screen
      animate={{ opacity: 1, y: 0 }}
    >
      <Navbar />
      <LandingSection />
      <TechnicalOverviewSection />
    </Flex>
  );
}

export default App;
