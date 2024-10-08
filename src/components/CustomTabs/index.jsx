import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { scrollToAnchor } from "@/utils/scrollToAnchor";
import { useSelector } from "react-redux";

export default function CustomTabs({ data }) {
  const { color } = useSelector((state) => state.theme);

  return (
    <Tabs align="end">
      <TabList
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        borderBottom="1px solid #707570"
        gap=".5em"
      >
        {data?.map((t, i) => (
          <Tab
            key={i}
            _selected={{
              borderBottom: { base: "none", md: "4px solid" },
              borderLeft: { base: "4px solid", md: "none" },
              borderColor: { base: `main.${color}`, md: `main.${color}` },
              color: "white",
              fontWeight: "bold",
              bg: "main.gray",
            }}
            fontSize={{ base: 16, md: 18 }}
            color="gray.400"
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
        {data?.map((t, i) => (
          <TabPanel key={i}>{t?.panel}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
