import { Button, Flex, Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function CustomButton(props) {
  const { color } = useSelector((state) => state.theme);
  const { children, isLoading } = props;

  return (
    <Button
      borderRadius="2px"
      mt={{ base: "32px", md: "64px" }}
      paddingY={{ base: "22px", md: "28px" }}
      paddingX={{ base: "16px", md: "64px" }}
      w="fit-content"
      bg={`main.${color}`}
      transition=".1s ease"
      _hover={{ bg: `main.${color}Light` }}
      disabled={isLoading}
      {...props}
    >
      {children}
    </Button>
  );
}
