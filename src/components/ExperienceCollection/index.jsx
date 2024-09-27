import ExperienceCard from "@/components/ExperienceCard";
import {
  professionalExperienceData,
  academicExperienceData,
} from "@/data/experienceData";
import { Flex } from "@chakra-ui/react";

export default function ExperienceCollection({ type = "professional" }) {
  const experiences = {
    professional: professionalExperienceData,
    academic: academicExperienceData,
  };

  return (
    <Flex direction="column">
      {experiences[type]?.map((e) => (
        <ExperienceCard {...e} />
      ))}
    </Flex>
  );
}
