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

export default function ContactSection() {
  const validationSchema = yup.object().shape({
    name: yup.string().max(128).required("O campo nome é obrigatório"),
    email: yup
      .string()
      .max(255)
      .email("Por favor, insira um email válido")
      .required("O campo email é obrigatório"),
    subject: yup
      .string()
      .max(255, "O assunto deve ter no máximo 255 caracteres")
      .required("O campo assunto é obrigatório"),
    body: yup
      .string()
      .max(512, "A mensagem deve ter no máximo 512 caracteres")
      .required("O campo mensagem é obrigatório"),
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

  const toast = useToast();

  const onSubmit = async (data) => {
    await emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SID,
        import.meta.env.VITE_EMAILJS_TID,
        data,
        import.meta.env.VITE_EMAILJS_PKEY
      )
      .then(() => {
        toast({
          title: "Enviado com sucesso, te respondo já já!",
          status: "success",
          isClosable: true,
          render: () => <CustomToast />,
        });

        reset();
      })
      .catch((e) => {
        console.log(e);
        toast({
          title: "Erro ao enviar sua mensagem!",
          status: "error",
          isClosable: true,
          render: () => (
            <CustomToast
              status="error"
              message="Ixe, falha ao enviar mensagem!"
            />
          ),
        });
      });
  };

  return (
    <Center id="contact" mt="100px">
      <Flex direction="column" w="80%">
        <Box position="relative" mb="64px">
          <Divider />
          <AbsoluteCenter px="4">
            <Heading background="bg.gray" px={8}>
              Entre em contato :{")"}
            </Heading>
          </AbsoluteCenter>
        </Box>

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
              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
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
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
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
              <FormErrorMessage>{errors?.subject?.message}</FormErrorMessage>
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
              <FormErrorMessage>{errors?.body?.message}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              mt="18px"
              maxW="fit-content"
              padding="5px 75px"
              bg="terminal.green"
              alignSelf="center"
            >
              Enviar
            </Button>
          </Flex>
        </form>
      </Flex>
    </Center>
  );
}
