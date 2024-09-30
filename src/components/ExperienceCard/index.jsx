import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
      padding="1.25em 1.5em"
      borderLeft="4px solid"
      borderColor="terminal.green"
      justify="center"
      minH="175px"
      style={{ opacity: opacity, x: posX }}
      gap=".25em"
    >
      <Flex justify="space-between" fontSize={18}>
        <Text>{institution}</Text>
        <Text>
          {startDate} - {endDate}
        </Text>
      </Flex>
      <Text fontWeight="bold" color="main.green" fontSize={20}>
        {t(position)}
      </Text>
      <Text mt="8px" color="gray.100">
        {description}
      </Text>

      <Flex mt="24px" gap="1em">
        {tags?.map((t) => (
          <Text fontSize={13} padding="4px 18px" bg="black">
            {t}
          </Text>
        ))}
      </Flex>
    </MotionBox>
  );
}
