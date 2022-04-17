import { Button, Flex, Stack } from "@chakra-ui/react";

import type { NextPage } from "next";
import { Input } from "../components/Form/Input";

const SignIn: NextPage = () => (
  <Flex // eslint-disable-next-line prettier/prettier
    w="100vw"
    h="100vh"
    align="center"
    justify="center"
  >
    <Flex // eslint-disable-next-line prettier/prettier
      as="form"
      width="100%"
      maxWidth={360}
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
    >
      <Stack spacing={4}>
        <Input name="email" type="email" label="E-mail" />
        <Input name="email" type="email" label="Password" />
      </Stack>
      <Button // eslint-disable-next-line prettier/prettier
        type="submit"
        mt="6"
        size="lg"
        colorScheme="pink"
      >
        Login
      </Button>
    </Flex>
  </Flex>
);

export default SignIn;
