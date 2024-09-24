import { Button, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
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
        <Flex
          direction="column"
          w="75%"
          position="relative"
          gap="2px"
          zIndex={1}
        >
          <Heading fontSize={38} mb="12px">
            Hello world!
          </Heading>
          <Heading as="h2" fontSize={42} mb=".75em">
            {t("i_am")}
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
            </a>
            , colocando em prática o
            <a href="https://owasp.org/www-project-top-ten/" _target="blank">
              top 10 da OWASP
            </a>{" "}
            e me familiarizando com técnicas e ferramentas usadas na exploração
            de vulnerabilidades web, assim como a mitigação e prevenção.
          </Text>

          <Text mt="12px">
            Indo um pouco além sou um pai orgulhoso e, no meu tempo livre:
            artista, tatuador, aspirante a escritor, gamer, entre outras coisas.
          </Text>

          <Text>Sinta-se à vontade para entrar em contato comigo :{")"}</Text>

          <Button
            mt="75px"
            borderRadius="2px"
            paddingY="28px"
            paddingX="64px"
            w="fit-content"
            bg="main.green"
            transition=".1s ease"
            _hover={{ bg: "main.lightGreen" }}
          >
            Clique aqui para me mandar uma mensagem
          </Button>
        </Flex>

        <Flex position="absolute" w="50%" h="100%" right={0}>
          <SpinningPlanet />
        </Flex>
      </Flex>
    </Center>
  );
}
