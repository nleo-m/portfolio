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

import TerminalTextContainer from "@/components/TerminalTextContainer";

import SectionTitle from "@/components/SectionTitle";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

export default function TechnicalOverviewSection() {
  const { t } = useTranslation();

  const p = [
    t("tech1"),
    t("tech2"),
    t("tech3"),
    t("tech4"),
    t("tech5"),
    t("tech6"),
  ];

  const settings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 2500,
    slidesToShow: 12,
    rows: 2,
    slidesToScroll: 1,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Center mt="100px">
      <Flex direction="column" w="80%">
        <SectionTitle>Tech overview</SectionTitle>

        <TerminalTextContainer paragraphs={p} />

        <Flex mt="32px" direction="column">
          <Text
            fontWeight="bold"
            fontSize={{ base: "18px", md: "21px" }}
            marginY="12px"
          >
            {t("tech_stack")}
          </Text>

          <Slider className="tech-stack" {...settings}>
            {techStackData?.map((i) => (
              <Tooltip openDelay={550} label={i?.name}>
                <a target="blank" href={i?.url}>
                  {i?.icon}
                </a>
              </Tooltip>
            ))}
          </Slider>
        </Flex>
      </Flex>
    </Center>
  );
}
