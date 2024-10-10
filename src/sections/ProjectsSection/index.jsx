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
import SectionTitle from "@/components/SectionTitle";

export default function ProjectsSection() {
  const { t } = useTranslation();

  const settings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Center mt="100px">
      <Flex direction="column" w="80%">
        <SectionTitle align="end">{t("title_projects")}</SectionTitle>

        <Slider className="projects" {...settings}>
          {projectsData.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </Slider>
      </Flex>
    </Center>
  );
}
