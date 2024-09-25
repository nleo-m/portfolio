import { Box, keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const ScaleToRightBox = (props) => {
  const { children, transitionTime, widthScale } = props;

  const scaleToRightFrames = keyframes`
        from {width: 0}
        to: {width: ${widthScale}}
    `;

  const scaleToRight = `${scaleToRightFrames} ${transitionTime} ease-out`;

  return (
    <Box as={motion.div} animation={scaleToRight} {...props}>
      {children}
    </Box>
  );
};
