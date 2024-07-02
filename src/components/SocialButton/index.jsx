import React from "react";
import { Flex, Link } from "@chakra-ui/react";

export default function SocialButton({ url = "", icon = <></>, props }) {
  return (
    <Link href={url} target="_blank">
      <Flex
        h="40px"
        w="40px"
        bg="#313131"
        borderRadius="12px"
        align="center"
        justify="center"
        transition=".1s ease"
        _hover={{ transform: "scale(1.1)" }}
        {...props}
      >
        {React.createElement(icon, {
          weight: "fill",
          color: "white",
          size: 28,
        }) || null}
      </Flex>
    </Link>
  );
}
