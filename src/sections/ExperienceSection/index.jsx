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
        <SectionTitle align="end">{t("title_experience")}</SectionTitle>

        <CustomTabs
          data={[
            { name: t("professional"), panel: <ExperienceCollection /> },
            {
              name: t("academic"),
              panel: <ExperienceCollection type="academic" />,
            },
            {
              name: t("complementary"),
              panel: <ExperienceCollection type="complementary" />,
            },
          ]}
        />
      </Flex>
    </Center>
  );
}
