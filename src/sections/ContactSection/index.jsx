import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import emailjs from "@emailjs/browser";

import CustomToast from "@/components/CustomToast";
import SectionTitle from "@/components/SectionTitle";
import CustomButton from "@/components/CustomButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function ContactSection() {
  const { t } = useTranslation();

  const validationSchema = yup.object().shape({
    name: yup.string().required("err_required_field"),
    email: yup
      .string()
      .max(255)
      .email("err_invalid_email")
      .required("err_required_field"),
    subject: yup
      .string()
      .max(255, "err_subject_length")
      .required("err_required_field"),
    body: yup
      .string()
      .max(512, "err_message_length")
      .required("err_required_field"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const onSubmit = async (data) => {
    setLoading(true);

    await emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SID,
        import.meta.env.VITE_EMAILJS_TID,
        data,
        import.meta.env.VITE_EMAILJS_PKEY
      )
      .then(() => {
        toast({
          status: "success",
          isClosable: true,
          render: () => <CustomToast />,
        });

        reset();
      })
      .catch((e) => {
        console.log(e)
        
        toast({
          status: "error",
          isClosable: true,
          render: () => (
            <CustomToast status="error" message="contact_toast_error" />
          ),
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Center id="contact" mt="100px">
      <Flex direction="column" w="80%">
        <SectionTitle>{t("title_contact")}</SectionTitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap="12px">
            <FormControl isInvalid={errors?.name}>
              <FormLabel>Nome *</FormLabel>
              <Input
                {...register("name")}
                placeholder="Trinity"
                borderRadius="2px"
                _focusVisible={{
                  bg: "#202020",
                  boxShadow: "none",
                  border: "1px solid",
                  borderColor: " terminal.green",
                }}
              />
              <FormErrorMessage>{t(errors?.name?.message)}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors?.email}>
              <FormLabel>Email *</FormLabel>
              <Input
                {...register("email")}
                type="email"
                placeholder="trinity@zion.com"
                borderRadius="2px"
                _focusVisible={{
                  bg: "#202020",
                  boxShadow: "none",
                  border: "1px solid",
                  borderColor: " terminal.green",
                }}
              />
              <FormErrorMessage>{t(errors?.email?.message)}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors?.subject}>
              <FormLabel>Assunto *</FormLabel>
              <Input
                {...register("subject")}
                placeholder="Follow the white rabbit"
                borderRadius="2px"
                _focusVisible={{
                  bg: "#202020",
                  boxShadow: "none",
                  border: "1px solid",
                  borderColor: " terminal.green",
                }}
              />
              <FormErrorMessage>{t(errors?.subject?.message)}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors?.body}>
              <FormLabel>Mensagem *</FormLabel>
              <Textarea
                {...register("body")}
                rows={4}
                placeholder="Knock, knock, neo..."
                borderRadius="2px"
                _focusVisible={{
                  bg: "#202020",
                  boxShadow: "none",
                  border: "1px solid",
                  borderColor: " terminal.green",
                }}
              />
              <FormErrorMessage>{t(errors?.body?.message)}</FormErrorMessage>
            </FormControl>

            <CustomButton type="submit" alignSelf="center" isLoading={loading}>
              {t("send")}
            </CustomButton>
          </Flex>
        </form>
      </Flex>
    </Center>
  );
}
