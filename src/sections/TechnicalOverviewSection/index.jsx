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

export default function TechnicalOverviewSection() {
  const { t } = useTranslation();

  const p = [
    "Como já dito, durante a minha trajetória no desenvolvimento tive a oportunidade de trabalhar com diversas linguagens e tecnologias. Dentre elas, posso destacar o uso de: Javascript principalmente através do framework React, Node, Python e Laravel. \n Também me aventurei na criação de jogos na engine Unity, utilizando C#. Chegando a atuar na área por um breve período como professor substituto. \n Apesar de ainda ter muito o que aprender, posso dizer que trabalhei com diferentes Design Patterns. Sempre tentando me atentar aos conceitos do SOLID e clean code para desenvolver um código limpo, reutilizável e escalável.",
    "Utilizei bancos de dados MySQL e Postgres, interagindo com eles manualmente e através de ORMs como Eloquent e Sequelize. Tenho facilidade e controle do versionamento com o Git, e também de conteinerização de ambientes com o Docker.",
    "Hosteei aplicações full-stack em VMs no Compute Engine do GCP, configurando Nginx como proxy reverso e utilizando pm2 para persistência da aplicação. ",
    "Implementei Restful APIs e fiz uso do Postman para testá-las. Utilizo Linux desde antes do ínicio da minha carreira na TI e estou bem familiarizado com shell. Minha distribuição de escolha para o dia-a-dia é o Mint, mas já brinquei com outras distribuições.",
    "Venho estudando Cybersegurança diariamente e completando CTFs, principalmente nas plataformas TryHackMe e Portswigger. O que tem me permitido desenvolver o conhecimento teórico, prático e técnico necessários. Enfoque no blue-team, por ora. Mas também me aventuro por técnicas e ferramentas utilizadas pelo red-team.",
    "Quase ou tão importante quanto, sou uma pessoa criativa e dedicada. Todo dia e todo obstáculo é uma oportunidade para se aprender algo novo. Nossos maiores aliados são o Google e as documentações, e sou capaz de pesquisar e navegar por eles :)",
  ];

  const settings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 2500,
    slidesToShow: 12,
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
          {techStackData?.map((category) => (
            <>
              <Text
                fontWeight="bold"
                fontSize={{ base: "18px", md: "21px" }}
                marginY="12px"
              >
                {t(category?.title)}
              </Text>

              <Slider className="tech-stack" {...settings}>
                {category.items.map((i) => (
                  <Tooltip openDelay={550} label={i?.name}>
                    <a target="blank" href={i?.url}>
                      {i?.icon}
                    </a>
                  </Tooltip>
                ))}
              </Slider>
            </>
          ))}
        </Flex>
      </Flex>
    </Center>
  );
}
