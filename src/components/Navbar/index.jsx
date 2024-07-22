import { Button, Flex, IconButton, Image } from "@chakra-ui/react";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
  SunDim,
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

      <Flex align="center" gap="1em">
        <IconButton
          h="40px"
          w="40px"
          bg="#313131"
          borderRadius="12px"
          transition=".1s ease"
          _active={{}}
          _hover={{ transform: "scale(1.1)" }}
          icon={<SunDim color="white" size={28} weight="fill" />}
        />

        <Button
          h="40px"
          w="40px"
          _active={{}}
          _hover={{ transform: "scale(1.1)" }}
          background="linear-gradient(130deg, rgba(221,192,11,1) 0%, rgba(0,237,109,1) 50%, rgba(3,200,240,1) 100%);"
        ></Button>

        <Image
          boxSize={55}
          objectFit="cover"
          cursor="pointer"
          src={"/assets/imgs/lang/pt-br.svg"}
          mr="24px"
          transition=".1s ease"
          _hover={{ transform: "scale(1.1)" }}
          // onClick={() => nextLang()}
        />
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
