import { Divider, Flex, Heading } from "@chakra-ui/react";

export default function SectionTitle({ children, align = "center" }) {
  const responsivePadding = { base: 4, sm: 8 };

  return (
    <Flex w="full" position="relative" mb="32px" align="center" justify={align}>
      <Heading
        w="fit-content"
        background="bg.gray"
        paddingLeft={
          align === "end" || align === "center" ? responsivePadding : 0
        }
        paddingRight={
          align === "start" || align === "center" ? responsivePadding : 0
        }
        fontSize={{ base: 26, sm: 30 }}
        zIndex={1}
        color="main.green"
      >
        {children}
      </Heading>
      <Divider position="absolute" top="50%" zIndex={0} />
    </Flex>
  );
}
