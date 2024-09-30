import {
  AbsoluteCenter,
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Text,
  Tooltip,
} from "@chakra-ui/react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { techStackData } from "@/data/techStackData";
import { useTranslation } from "react-i18next";
import "@/styles/css/slider.css";
import { projectsData } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  const { t } = useTranslation();

  const settings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Center mt="100px">
      <Flex direction="column" w="80%">
        <Flex w="full" position="relative" mb="32px" align="end" justify="end">
          <Heading
            w="fit-content"
            background="bg.gray"
            paddingLeft={8}
            zIndex={1}
          >
            Alguns projetos
          </Heading>
          <Divider position="absolute" top="50%" zIndex={0} />
        </Flex>

        <Slider {...settings}>
          {projectsData.map((p) => (
            <ProjectCard {...p} />
          ))}
        </Slider>
      </Flex>
    </Center>
  );
}
