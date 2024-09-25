import {
  AbsoluteCenter,
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function TechnicalOverviewSection() {
  return (
    <Center mt="100px">
      <Flex direction="column" w="80%">
        <Box position="relative" mb="64px">
          <Divider />
          <AbsoluteCenter px="4">
            <Heading background="bg.gray" px={8}>
              {" "}
              Tech overview
            </Heading>
          </AbsoluteCenter>
        </Box>

        <Text whiteSpace="pre-line" mb="12px">
          Como já dito, durante a minha trajetória no desenvolvimento tive a
          oportunidade de trabalhar com diversas linguagens e tecnologias.
          Dentre elas, posso destacar o uso de: Javascript principalmente
          através do framework React, Node, Python e Laravel. Também me
          aventurei na criação de jogos na engine Unity, utilizando C#. Chegando
          a atuar na área por um breve período como professor substituto. {"\n"}
          Apesar de ainda ter muito o que aprender, posso dizer que trabalhei
          com diferentes Design Patterns. Sempre tentando me atentar aos
          conceitos do SOLID e clean code para desenvolver um código limpo,
          reutilizável e escalável.
          {"\n"}
          Utilizei bancos de dados MySQL e Postgres, interagindo com eles
          manualmente e através de ORMs como Eloquent e Sequelize. {"\n"}
          Tenho facilidade e controle do versionamento com o Git, e também de
          conteinerização de ambientes com o Docker. {"\n"}
          Hosteei aplicações full-stack em VMs no Compute Engine do GCP,
          configurando Nginx como proxy reverso e utilizando pm2 para
          persistência da aplicação. {"\n"}
          Utilizo Linux desde antes do ínicio da minha carreira na TI e estou
          bem familiarizado com shell. Minha distribuição de escolha para o
          dia-a-dia é o Mint, mas já brinquei com outras distribuições. {"\n"}
          Implementei Restful APIs e fiz uso do Postman para testar {"\n"}
          Venho estudando Cybersegurança diariamente e completando CTFs,
          principalmente nas plataformas TryHackMe e Portswigger. O que tem me
          permitido desenvolver o conhecimento teórico, prático e técnico
          necessários. Enfoque no blue-team, por ora. Mas também me aventuro por
          técnicas e ferramentas utilizadas pelo red-team. {"\n"}
          {"\n"} Quase ou tão importante quanto, sou uma pessoa criativa e
          dedicada. Todo dia e todo obstáculo é uma oportunidade para se
          aprender algo novo. Nossos maiores aliados são o Google e as
          documentações, e sou capaz de pesquisar e navegar por eles :{")"}
        </Text>

        <Flex direction="column">
          <Text>Tecnologias e linguagens utilizadas</Text>
          <Text>Ferramentas</Text>
        </Flex>
      </Flex>
    </Center>
  );
}
