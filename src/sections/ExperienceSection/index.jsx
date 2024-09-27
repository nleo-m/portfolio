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

import { useTranslation } from "react-i18next";

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <Center mt="100px">
      <Flex direction="column" w="80%">
        <Box
          display="flex"
          position="relative"
          mb="64px"
          align="center"
          justify="center"
          textAlign="start"
        >
          <Heading w="fit-content" background="bg.gray" px={8} zIndex={1}>
            Experiência
          </Heading>
          <Divider position="absolute" top="50%" zIndex={0} />
        </Box>

        <Tabs align="end">
          <TabList gap=".5em">
            <Tab
              _selected={{
                borderBottom: "4px solid",
                borderColor: "main.green",
                bg: "main.gray",
              }}
              paddingX="50px"
            >
              Profissional
            </Tab>
            <Tab
              _selected={{
                borderBottom: "4px solid",
                borderColor: "main.green",
                bg: "main.gray",
              }}
              paddingX="50px"
            >
              Acadêmica
            </Tab>
            <Tab
              _selected={{
                borderBottom: "4px solid",
                borderColor: "main.green",
                bg: "main.gray",
              }}
              paddingX="50px"
            >
              Complementar
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>one!</TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Center>
  );
}
