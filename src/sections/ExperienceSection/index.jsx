import {
  AbsoluteCenter,
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import CustomTabs from "@/components/CustomTabs";

import { useTranslation } from "react-i18next";

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <Center mt="100px">
      <Flex direction="column" w="80%">
        <Box
          display="flex"
          position="relative"
          mb="32px"
          align="center"
          justify="center"
          textAlign="start"
        >
          <Heading
            w="fit-content"
            background="bg.gray"
            paddingRight={8}
            zIndex={1}
          >
            Experiência
          </Heading>
          <Divider position="absolute" top="50%" zIndex={0} />
        </Box>

        <CustomTabs
          data={[
            { name: "Profissional", panel: <div>prof</div> },
            { name: "Acadêmica", panel: <div>prof</div> },
            { name: "complementar", panel: <div>prof</div> },
          ]}
        />
      </Flex>
    </Center>
  );
}
