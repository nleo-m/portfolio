import {
  Button,
  Flex,
  IconButton,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  AddressBookTabs,
  Gear,
  GearFine,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
  SunDim,
  TrayArrowDown,
} from "@phosphor-icons/react";
import SocialButton from "@/components/SocialButton";
import { useState } from "react";
import { Hamburger } from "@phosphor-icons/react/dist/ssr";

export default function Navbar() {
  const [shouldCollapseMenus] = useMediaQuery("(max-width: 740px)", {
    ssr: false,
  });

  const [menu, setMenu] = useState("socials");

  return (
    <Flex
      w="full"
      minH="60px"
      justify="space-between"
      align="center"
      paddingX="10%"
      backdropBlur="10px"
      position="fixed"
      backdropFilter="blur(4px)"
      zIndex={99}
    >
      {!shouldCollapseMenus || (shouldCollapseMenus && menu === "socials") ? (
        <Flex align="center" gap={{ base: ".25em", sm: "1em" }}>
          <SocialButton
            url="https://github.com/nleo-m"
            icon={<GithubLogo size={28} weight="fill" />}
          />
          <SocialButton
            url="https://www.linkedin.com/in/leonel-marcos-f5/"
            icon={<LinkedinLogo size={28} weight="fill" />}
          />
          <SocialButton
            url="https://tryhackme.com/r/p/ov33r"
            icon={
              <Image src="/assets/imgs/tryhackme.png" maxW="32px" maxH="32px" />
            }
          />
          <SocialButton
            url="https://medium.com/@leonel-m"
            icon={<MediumLogo size={28} weight="fill" />}
          />
          <SocialButton
            url="https://www.instagram.com/l30nel.exe/"
            icon={<InstagramLogo size={28} weight="fill" />}
          />
        </Flex>
      ) : (
        <IconButton
          h="40px"
          w="40px"
          borderRadius="12px"
          transition=".1s ease"
          _active={{}}
          _hover={{ transform: "scale(1.1)" }}
          icon={
            <AddressBookTabs size={32} onClick={() => setMenu("socials")} />
          }
        />
      )}

      {!shouldCollapseMenus || (shouldCollapseMenus && menu === "config") ? (
        <Flex align="center" gap={{ base: ".25em", sm: "1em" }}>
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

          {/* <Button
          h="40px"
          w="40px"
          _active={{}}
          _hover={{ transform: "scale(1.1)" }}
          background="linear-gradient(130deg, rgba(221,192,11,1) 0%, rgba(0,237,109,1) 50%, rgba(3,200,240,1) 100%);"
        ></Button> */}

          <Image
            boxSize={55}
            objectFit="cover"
            cursor="pointer"
            src={"/assets/imgs/lang/pt-br.svg"}
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
            {!shouldCollapseMenus && "_get_curriculum()"}
          </Button>
        </Flex>
      ) : (
        <IconButton
          h="40px"
          w="40px"
          borderRadius="12px"
          transition=".1s ease"
          _active={{}}
          _hover={{ transform: "scale(1.1)" }}
          icon={<GearFine size={32} onClick={() => setMenu("config")} />}
        />
      )}
    </Flex>
  );
}
