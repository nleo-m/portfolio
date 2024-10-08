import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Paragraph from "./Paragraph";
import { useSelector } from "react-redux";
import CustomButton from "@/components/CustomButton";

export default function TerminalTextContainer({ paragraphs = [] }) {
  const maxIndex = paragraphs.length - 1;
  const [index, setIndex] = useState(0);
  const ref = useRef();
  const { color } = useSelector((state) => state.theme);

  const [elements, setElements] = useState([
    React.createElement(Paragraph, {
      key: 0,
      paragraph: paragraphs[0],
      containerRef: ref,
    }),
  ]);

  const nextText = () => {
    if (index < maxIndex) setIndex((i) => i + 1);
  };

  useEffect(() => {
    if (index > 0) {
      const element = React.createElement(Paragraph, {
        key: index,
        paragraph: paragraphs[index],
        containerRef: ref,
      });

      setElements((e) => [...e, element]);
    }
  }, [index]);

  return (
    <Box position="relative" w="100%" align="center">
      <Box
        ref={ref}
        bg="#101010"
        whiteSpace="pre-line"
        mb="12px"
        h="320px"
        overflow="scroll"
        borderRadius="2px"
        p={6}
      >
        {elements.map((e) => e)}
      </Box>

      <CustomButton
        bg="#090909"
        color={`main.${color}`}
        _hover={{ bg: "#101010" }}
        mt="12px"
        w="100%"
        onClick={nextText}
      >
        Ver mais...
      </CustomButton>
    </Box>
  );
}
