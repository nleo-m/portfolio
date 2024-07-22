import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";

export default function LandingSection() {
  return (
    <Center mt="80px">
      <Flex align="center" w="70%">
        <Flex direction="column" w="75%" position="relative">
          <Heading fontSize={48}>Hello world!</Heading>
          <Heading as="h2" fontSize={54} mb=".75em">
            I'm a programmer!
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            malesuada massa quis volutpat cursus. In ac cursus nulla. Duis
            tristique, ante eu auctor finibus, purus ex dapibus turpis, molestie
            auctor ligula lectus a turpis. Praesent sem lacus, consectetur
            bibendum quam quis, luctus tempor orci. Praesent dignissim lectus
            pellentesque odio molestie, quis mollis urna vestibulum. Phasellus
            at lorem elit. Nulla sagittis vitae est eu auctor. Nunc ut sagittis
            odio, at tempor quam.{" "}
          </Text>

          <Button
            mt="75px"
            borderRadius="2px"
            paddingY="25px"
            bg="main.green"
            maxW="250px"
            transition=".1s ease"
            _hover={{ bg: "main.lightGreen" }}
          >
            Contact me
          </Button>
        </Flex>

        <Flex w="50%"></Flex>
      </Flex>
    </Center>
  );
}
