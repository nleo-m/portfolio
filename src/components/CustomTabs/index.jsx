import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function CustomTabs({ data }) {
  return (
    <Tabs align="end">
      <TabList gap=".5em" borderBottom="1px solid #707570">
        {data?.map((t) => (
          <Tab
            _selected={{
              borderBottom: "4px solid",
              borderColor: "main.green",
              fontWeight: "bold",
              bg: "main.gray",
            }}
            fontSize={18}
            paddingX="50px"
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
