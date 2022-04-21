import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Name obligatoire"),
  email: yup
    .string()
    .required("E-mail obligatoire")
    .email("Le champ doit être un email valide"),
  password: yup
    .string()
    .required("Mot de passe obligatoire")
    .min(6, "au moins 6 caractéres"),
  password_confirmation: yup
    .string()
    .oneOf(
      [null, yup.ref("password")],
      "Les mots de passe doivent être identiques",
    ),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values,
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };
  return (
    <Box>
      <Header />
      <Flex maxWidth={1480} w="100%" my="6" mx="auto" px="6">
        <Sidebar />
        <Box
          as="form"
          flex="1"
          bg="gray.800"
          p="8"
          borderRadius={8}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Créer un utilisateur
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nom et prenom"
                {...register("name")}
                error={formState.errors.name}
              />
              <Input
                name="email"
                label="E-mail"
                {...register("email")}
                error={formState.errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                label="Mot de passe"
                error={formState.errors.password}
                {...register("password")}
              />
              <Input
                name="password_confirmation"
                label="Confirmation mot de passe"
                error={formState.errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Annuler
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Sauver
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
