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

import ExperienceCollection from "@/components/ExperienceCollection";
import SectionTitle from "@/components/SectionTitle";

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <Center mt="100px">
      <Flex direction="column" w="80%">
        <SectionTitle align="end">Experiência</SectionTitle>

        <CustomTabs
          data={[
            { name: "Profissional", panel: <ExperienceCollection /> },
            {
              name: "Acadêmica",
              panel: <ExperienceCollection type="academic" />,
            },
            {
              name: "complementar",
              panel: <ExperienceCollection type="complementary" />,
            },
          ]}
        />
      </Flex>
    </Center>
  );
}
