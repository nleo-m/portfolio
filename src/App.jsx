import Navbar from "@/components/Navbar";
import LandingSection from "@/components/LandingSection";
import TechnicalOverviewSection from "@/components/TechnicalOverviewSection";

import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex direction="column" color="white" w="100%">
      <Navbar />
      <LandingSection />
      <TechnicalOverviewSection />
    </Flex>
  );
}

export default App;
