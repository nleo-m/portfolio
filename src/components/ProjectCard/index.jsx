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

export default function ProjectCard({
  img,
  name,
  description,
  tags,
  repo,
  preview,
}) {
  const { t } = useTranslation();

  return (
    <Card
      bg="#202020"
      w={{ base: "230px", sm: "260px", md: "480px" }}
      h="520px"
      color="white"
      cursor="pointer"
      transition=".25s ease"
      border="none"
      borderColor="terminal.green"
      _hover={{
        transform: "scale(1.05)",
        borderTop: "2px solid",
        borderBottom: "2px solid",
        borderColor: "terminal.green",
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
      </CardBody>
      <CardFooter>
        <Flex mt="24px" gap="1em" flexWrap="wrap">
          {tags?.map((t) => (
            <Text fontSize={13} padding="4px 18px" bg="black">
              {t}
            </Text>
          ))}
        </Flex>
      </CardFooter>
    </Card>
  );
}
