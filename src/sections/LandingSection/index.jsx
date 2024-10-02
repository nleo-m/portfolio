import {
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import SpinningPlanet from "@/components/SpinningPlanet";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { scrollToAnchor } from "@/utils/scrollToAnchor";

export default function LandingSection() {
  const [isMobile] = useMediaQuery("(max-width: 480px)", { ssr: false });
  const { t } = useTranslation();

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

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
    <Center mt="120px">
      <Flex position="relative" align="center" w="80%">
        <Flex
          direction="column"
          w={"80%"}
          position="relative"
          gap="2px"
          zIndex={1}
        >
          <Heading fontSize={{ base: 18, md: 32, lg: 38 }} mb="12px">
            Hello world!
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: 24, md: 36, lg: 42 }}
            mb=".75em"
            whiteSpace={{ base: "pre-line", md: "normal" }}
          >
            {t("i_am")}
            {"\n"}
            {occupationRender}
          </Heading>
          <Text mb="12px">
            Me chamo Leonel, sou apaixonado por tecnologia e estou sempre
            buscando aprender algo novo.
          </Text>

          <Text>
            Atuo como desenvolvedor full-stack há alguns anos e durante esse
            tempo tive a oportunidade de trabalhar com diversas tecnologias.
          </Text>

          <Text>
            Atualmente, venho buscado me aprofudar na área de cybersegurança.
            Estou fazendo o treinamento SOC1 no{" "}
            <a href="https://tryhackme.com/p/ov33r" _target="blank">
              TryHackMe
            </a>{" "}
            e também completei diversos CTFs da{" "}
            <a href="https://portswigger.net/" _target="blank">
              Portswigger
            </a>{" "}
            me familiarizando com técnicas e ferramentas usadas na exploração de
            vulnerabilidades web, assim como a mitigação e prevenção.
          </Text>

          <Text>
            Desejo desenvolver o conhecimento teórico necessário para atuar na
            área mas, claro, sempre colocando a mão na massa e testando na
            prática.
          </Text>

          <Text mt="12px">
            Indo um pouco além sou um pai orgulhoso e, no meu tempo livre:
            artista, tatuador, aspirante a escritor, gamer, entre outras coisas.
          </Text>

          <Text>Sinta-se à vontade para entrar em contato comigo :{")"}</Text>

          <Button
            mt={{ base: "32px", md: "64px" }}
            borderRadius="2px"
            paddingY={{ base: "22px", md: "28px" }}
            paddingX={{ base: "16px", md: "64px" }}
            w="fit-content"
            bg="main.green"
            transition=".1s ease"
            _hover={{ bg: "main.lightGreen" }}
            onClick={() => scrollToAnchor("contact")}
          >
            Mande uma mensagem
          </Button>
        </Flex>

        <Flex
          position="absolute"
          w={{ base: "75%", sm: "60%", lg: "40%" }}
          h="100%"
          align="center"
          right={{ base: -30, md: -75, lg: -10 }}
          zIndex={1}
          overflow={{ base: "hidden", lg: "visible" }}
        >
          <Flex
            position="absolute"
            top={{ base: -50, md: "auto" }}
            w={{ base: "520px", md: "620px" }}
            h={{ base: "520px", md: "620px" }}
          >
            <SpinningPlanet />
          </Flex>

          {!isMobile && (
            <Text
              position="absolute"
              top="5%"
              right={{ sm: "24px", lg: "-24px" }}
              color="#B2D5CE"
            >
              Hack the planet
            </Text>
          )}
        </Flex>
      </Flex>
    </Center>
  );
}
