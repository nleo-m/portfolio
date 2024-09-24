import LandingSection from "@/components/LandingSection";
import Navbar from "@/components/Navbar";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex direction="column" color="white" w="100%">
      <Navbar />
      <LandingSection />
    </Flex>
  );
}

export default App;
