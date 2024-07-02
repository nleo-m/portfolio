import { Box, Button, Flex } from "@chakra-ui/react";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
  TrayArrowDown,
} from "@phosphor-icons/react";
import SocialButton from "components/SocialButton";

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
        <SocialButton url="https://github.com/nleo-m" icon={GithubLogo} />
        <SocialButton
          url="https://www.linkedin.com/in/leonel-marcos-f5/"
          icon={LinkedinLogo}
        />
        <SocialButton url="https://medium.com/@leonel-m" icon={MediumLogo} />
        <SocialButton
          url="https://www.instagram.com/l30nel.exe/"
          icon={InstagramLogo}
        />
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
