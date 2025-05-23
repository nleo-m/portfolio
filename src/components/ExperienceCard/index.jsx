import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { capitalizeFirstChar } from "@/utils/capitalizeFirstChar";
import { Link } from "@phosphor-icons/react/dist/ssr";

const MotionBox = motion(Box);

export default function ExperienceCard({
  institution,
  position,
  description,
  tags,
  startDate,
  endDate,
  url,
  odd = false,
}) {
  const { t } = useTranslation();
  const { color } = useSelector((state) => state.theme);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-75px" });

  const urlRef = useRef(null);

  const urlClick = () => {
    if (urlRef?.current) urlRef.current?.click();
  };

  return (
    <MotionBox
      ref={ref}
      display="flex"
      flexDirection="column"
      bg={odd % 2 === 0 ? "#202020" : "#161616"}
      padding={{ base: ".75em 1em", sm: "1.25em 1.5em" }}
      borderLeft="4px solid"
      borderColor={`terminal.${color}`}
      justify="center"
      minH="175px"
      style={{
        transform: isInView ? "none" : "translateX(-50px)",
        opacity: isInView ? 1 : 0,
        transition: ".5s ease-out",
      }}
      gap=".25em"
    >
      <Flex
        justify="space-between"
        fontSize={{ base: 16, md: 18 }}
        direction={{ base: "column", sm: "row" }}
      >
        <Text>{institution}</Text>

        <Text fontSize={{ base: 14, sm: 16, md: 18 }} color="gray.200">
          {startDate && `${startDate} ${"-"}`} {t(endDate)}
        </Text>
      </Flex>
      <Flex
        gap="12px"
        align="center"
        color={`main.${color}`}
        cursor={url ? "pointer" : "normal"}
        _hover={{ textDecoration: url ? "underline" : "none" }}
        onClick={urlClick}
      >
        <Text fontWeight="bold" fontSize={20}>
          {capitalizeFirstChar(t(position))}
        </Text>
        {url && (
          <a ref={urlRef} href={url} target="_blank" rel="noopener noreferrer">
            <Link size={24} />
          </a>
        )}
      </Flex>
      <Text mt="12px" color="gray.100" whiteSpace="pre-line">
        {t(description)}
      </Text>

      <Flex mt="24px" gap="1em" overflowX="scroll">
        {tags?.map((t, i) => (
          <Text
            key={i}
            bg="black"
            padding="4px 8px"
            fontSize={13}
            whiteSpace="nowrap"
          >
            {t}
          </Text>
        ))}
      </Flex>
    </MotionBox>
  );
}
