import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { capitalizeFirstChar } from "@/utils/capitalizeFirstChar";

const MotionBox = motion(Box);

export default function ExperienceCard({
  institution,
  position,
  description,
  tags,
  startDate,
  endDate,
  odd = false,
}) {
  const { t } = useTranslation();
  const { color } = useSelector((state) => state.theme);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const posX = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <MotionBox
      ref={ref}
      display="flex"
      flexDirection="column"
      bg={odd % 2 === 0 ? "#161616" : "#202020"}
      padding={{ base: ".75em 1em", sm: "1.25em 1.5em" }}
      borderLeft="4px solid"
      borderColor={`terminal.${color}`}
      justify="center"
      minH="175px"
      style={{ opacity: opacity, x: posX }}
      gap=".25em"
    >
      <Flex
        align="center"
        justify="space-between"
        fontSize={{ base: 16, md: 18 }}
      >
        <Text>{institution}</Text>
        <Text fontSize={{ base: 14, sm: 16, md: 18 }} color="gray.200">
          {startDate} - {t(endDate)}
        </Text>
      </Flex>
      <Text fontWeight="bold" color={`main.${color}`} fontSize={20}>
        {capitalizeFirstChar(t(position))}
      </Text>
      <Text mt="8px" color="gray.100">
        {description}
      </Text>

      <Flex mt="24px" gap="1em" overflowX="scroll">
        {tags?.map((t) => (
          <Text bg="black" padding="4px 8px" fontSize={13} whiteSpace="nowrap">
            {t}
          </Text>
        ))}
      </Flex>
    </MotionBox>
  );
}
