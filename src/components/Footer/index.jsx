import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      bg="black"
      mt="175px"
      w="full"
      minH="60px"
      justify="space-between"
      alignSelf="end"
      align="center"
      paddingX="10%"
      zIndex={99}
    >
      <Text>@2024 l30 l14 Leonel M F J</Text>
      <Text>{"</>"}</Text>
    </Flex>
  );
}
