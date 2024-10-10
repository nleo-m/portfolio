import ExperienceCard from "@/components/ExperienceCard";

import {
  professionalExperienceData,
  academicExperienceData,
  complementaryExperienceData,
} from "@/data/experienceData";

import { Flex } from "@chakra-ui/react";

export default function ExperienceCollection({ type = "professional" }) {
  const experiences = {
    professional: professionalExperienceData,
    academic: academicExperienceData,
    complementary: complementaryExperienceData,
  };

  return (
    <Flex direction="column">
      {experiences[type]?.map((e, i) => (
        <ExperienceCard {...e} odd={i} />
      ))}
    </Flex>
  );
}
