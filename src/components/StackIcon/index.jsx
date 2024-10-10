import { Icon } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function StackIcon(props) {
  const { color } = useSelector((state) => state.theme);

  const { children, hover = "blue.500", invert = false } = props;

  return (
    <Icon
      viewBox="0 0 32 32"
      boxSize={20}
      transition=".25s ease"
      fill={invert ? "none" : `main.${color}`}
      background={invert ? `main.${color}` : "none"}
      borderRadius="2px"
      _hover={{
        cursor: "pointer",
        transform: "scale(1.10)",
        ...(!invert && { fill: hover }),
        ...(invert && { background: hover }),
      }}
      {...props}
    >
      {children}
    </Icon>
  );
}
