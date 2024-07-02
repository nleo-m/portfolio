import { Box, Button, Flex } from "@chakra-ui/react";
import { TrayArrowDown } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <Flex
      w="full"
      minH="60px"
      justify="space-between"
      align="center"
      paddingX="10%"
      backdropBlur="10px"
      position="sticky"
    >
      <Flex gap="1em">
        <Box h="40px" w="40px" bg="#313131"></Box>
        <Box h="40px" w="40px" bg="#313131"></Box>
        <Box h="40px" w="40px" bg="#313131"></Box>
        <Box h="40px" w="40px" bg="#313131"></Box>
      </Flex>

      <Flex gap="1em">
        <Box h="40px" w="40px" bg="#313131"></Box>
        <Box h="40px" w="40px" bg="#313131"></Box>
        <Box h="40px" w="40px" bg="#313131"></Box>
        <Button
          bg="transparent"
          border="2px solid"
          borderColor="main.green"
          color="white"
          align="center"
          h="40px"
          leftIcon={<TrayArrowDown size={24} />}
          _hover={{ bg: "main.green" }}
        >
          _get_curriculum()
        </Button>
      </Flex>
    </Flex>
  );
}
