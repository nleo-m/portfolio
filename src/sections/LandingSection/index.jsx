import {
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import SpinningPlanet from "@/components/SpinningPlanet";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { scrollToAnchor } from "@/utils/scrollToAnchor";
import { useSelector } from "react-redux";
import CustomButton from "@/components/CustomButton";

export default function LandingSection() {
  const [isMobile] = useMediaQuery("(max-width: 480px)", { ssr: false });
  const { t } = useTranslation();
  const { color } = useSelector((state) => state.theme);

  const occupations = [
    t("full_dev"),
    t("cybersec_enthusiast"),
    t("artist_designer"),
    t("ux_designer"),
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
          w={{ base: "100%", md: "78%" }}
          position="relative"
          gap="2px"
        >
          <Heading
            fontSize={{ base: 18, md: 32, lg: 38 }}
            mb="12px"
            color={`main.${color}`}
          >
            Hello world!
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: 24, md: 36, lg: 42 }}
            mb=".75em"
            whiteSpace={{ base: "pre-line", md: "normal" }}
          >
            &gt; {occupationRender}
          </Heading>
          <Text mb="12px">{t("landing1")}</Text>

          <Text>{t("landing2")}</Text>

          <Text>
            {t("landing3")}{" "}
            <a
              href="https://tryhackme.com/p/ov33r"
              _target="blank"
              style={{ color: "#007bff" }}
            >
              TryHackMe
            </a>{" "}
            {t("and")}{" "}
            <a
              href="https://portswigger.net/"
              _target="blank"
              style={{ color: "orange" }}
            >
              Portswigger
            </a>
            {isMobile && "."}
            {!isMobile && " " + t("landing4")}
          </Text>

          <Text>{t("landing5")}</Text>

          <Text mt="12px">{t("landing6")}</Text>

          <Text mt="12px">
            {t("landing7")} :{")"}
          </Text>

          <CustomButton onClick={() => scrollToAnchor("contact")}>
            {t("get_contact")}
          </CustomButton>
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
            <Flex
              direction="column"
              position="absolute"
              top="5%"
              gap="1px"
              right={{ sm: "24px", lg: "-24px" }}
              textAlign="end"
              color="#B2D5CE"
            >
              <Text>Hack the planet</Text>
              <Divider />
              <Text fontSize={13}>Click in it</Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Center>
  );
}
