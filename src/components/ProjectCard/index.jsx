import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";

import { useTranslation } from "react-i18next";
import { Eye, GitCommit } from "@phosphor-icons/react";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import SocialButton from "@/components/SocialButton";
import { useSelector } from "react-redux";

export default function ProjectCard({
  img,
  name,
  description,
  tags,
  repo,
  preview,
}) {
  const { t } = useTranslation();
  const { color } = useSelector((state) => state.theme);

  return (
    <Card
      bg="#202020"
      w={{ base: "270px", sm: "480px", md: "300px", lg: "480px" }}
      h="520px"
      color="white"
      cursor="pointer"
      transition=".25s ease"
      border="none"
      borderColor={`terminal.${color} !important`}
      boxShadow="0 4px 12px 4px #00000025"
      padding={{ base: ".25em", md: "1em" }}
      _hover={{
        transform: "scale(1.025)",
        borderTop: "2px solid",
        borderBottom: "2px solid",
        boxShadow: "0 10px 24px 8px #00000050",
      }}
    >
      <CardBody>
        <Box position="relative" bg="black" h="220px" w="100%" mb="16px">
          <Image
            src={img}
            h="100%"
            w="100%"
            borderRadius="lg"
            objectFit="cover"
          />
        </Box>
        <Flex align="center" justify="space-between" mb="14px">
          <Heading size="md">{name}</Heading>
          <Flex gap="16px" align="center">
            <Tooltip openDelay={550} label="Source">
              <SocialButton
                icon={<GithubLogo size={22} weight="fill" />}
                url={repo}
                props={{ h: "30px", w: "30px", borderRadius: "2px" }}
              />
            </Tooltip>
            {preview && (
              <Tooltip openDelay={550} label="Preview">
                <SocialButton
                  icon={<Eye size={22} weight="fill" />}
                  url={repo}
                  props={{ h: "30px", w: "30px", borderRadius: "2px" }}
                />
              </Tooltip>
            )}
          </Flex>
        </Flex>
        <Flex direction="column" gap="10px">
          <Text>{t(description)}</Text>
        </Flex>

        <Flex mt="24px" gap={{ base: ".75em", sm: "1em" }} overflow="scroll">
          {tags?.map((t) => (
            <Text bg="black" padding="4px" fontSize={13} whiteSpace="nowrap">
              {t}
            </Text>
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
}
