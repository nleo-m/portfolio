import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { scrollToAnchor } from "@/utils/scrollToAnchor";

export default function CustomTabs({ data }) {
  return (
    <Tabs align="end">
      <TabList
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        borderBottom="1px solid #707570"
        gap=".5em"
      >
        {data?.map((t) => (
          <Tab
            _selected={{
              borderBottom: { base: "none", md: "4px solid" },
              borderLeft: { base: "4px solid", md: "none" },
              borderColor: { base: "main.green", md: "main.green" },
              fontWeight: "bold",
              bg: "main.gray",
            }}
            fontSize={{ base: 16, md: 18 }}
            paddingX="50px"
            onClick={() => {
              scrollToAnchor("experience-col");
            }}
          >
            {t?.name}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {data?.map((t) => (
          <TabPanel>{t?.panel}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
