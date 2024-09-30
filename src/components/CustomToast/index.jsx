import { Box, Flex, Text } from "@chakra-ui/react";
import { CheckCircle, XCircle } from "@phosphor-icons/react";

export default function CustomToast({
  status = "success",
  message = "Enviado com sucesso, te respondo já já!",
}) {
  return (
    <Box
      p={4}
      bg="black"
      color={status === "success" ? "terminal.green" : "terminal.red"}
      border="1px solid"
      borderColor={status === "success" ? "terminal.green" : "terminal.red"}
      borderRadius="2px"
    >
      <Flex gap="10px" align="center">
        {status === "success" ? (
          <CheckCircle size={21} weight="fill" />
        ) : (
          <XCircle size={21} weight="fill" />
        )}
        <Text>{message}</Text>
      </Flex>
    </Box>
  );
}
