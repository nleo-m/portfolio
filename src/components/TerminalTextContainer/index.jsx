import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Paragraph from "./Paragraph";

export default function TerminalTextContainer({ paragraphs = [] }) {
  const maxIndex = paragraphs.length - 1;
  const [index, setIndex] = useState(0);
  const ref = useRef();

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
        bg="#131313"
        whiteSpace="pre-line"
        mb="12px"
        h="320px"
        overflow="scroll"
        borderRadius="2px"
        p={6}
      >
        {elements.map((e) => e)}
      </Box>

      <Button
        bg="#131313"
        paddingX={8}
        color="main.green"
        borderRadius="2px"
        onClick={nextText}
      >
        Mais...
      </Button>
    </Box>
  );
}
