import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Paragraph({ paragraph, containerRef }) {
  const [render, setRender] = useState("");
  const [index, setIndex] = useState(0);
  const { color } = useSelector((state) => state.theme);

  const scrollToBottom = () => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  };

  const writeWithDelay = () => {
    if (index <= paragraph.length - 1) {
      setRender((r) => r + paragraph[index]);

      setIndex((i) => i + 1);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(writeWithDelay, 1);

    scrollToBottom();

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <Text marginY="8px">
      &gt; {render}
      {index < paragraph.length && (
        <Text as="span" fontSize={22} color={`terminal.${color}`}>
          {" "}
          ▮
        </Text>
      )}
    </Text>
  );
}
