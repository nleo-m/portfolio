import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import SpinningPlanet from "@/components/SpinningPlanet";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function LandingSection() {
  const { t } = useTranslation();

  const occupations = [
    t("full_dev"),
    t("ux_designer"),
    t("cybersec_enthusiast"),
    t("artist_designer"),
    t("tattooer"),
    t("writer_wannabe"),
  ];

  const [currentOccupation, setCurrentOccupation] = useState(false);
  const [occupationRender, setOcuppationRender] = useState("");

  const writeWithDelay = (writable) => {
    const updateOccupation = () => {
      index++;

      if (index < writable.length) {
        setTimeout(updateOccupation, 100);

        setOcuppationRender(
          (occupationRender) =>
            occupationRender.replace(" ▮", "") + writable[index] + " ▮"
        );
      } else {
        setTimeout(nextOccupation, 1500);
      }
    };

    setOcuppationRender("");
    let index = -1;

    updateOccupation();
  };

  const nextOccupation = () => {
    const currentIndex = occupations.indexOf(currentOccupation);
    const nextIndex = (currentIndex + 1) % occupations.length;

    setCurrentOccupation(occupations[nextIndex]);
  };

  useEffect(() => {
    setTimeout(nextOccupation, 500);
  }, []);

  useEffect(() => {
    writeWithDelay(currentOccupation);
  }, [currentOccupation]);

  return (
    <Center mt="80px">
      <Flex align="center" w="70%">
        <Flex direction="column" w="75%" position="relative">
          <Heading fontSize={38} mb="12px">
            Hello world!
          </Heading>
          <Heading as="h2" fontSize={42} mb=".75em">
            {t("i_am")}
            {occupationRender}
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

        <Flex position="absolute" w="50%" h="100%" right={0}>
          <SpinningPlanet />
        </Flex>
      </Flex>
    </Center>
  );
}
