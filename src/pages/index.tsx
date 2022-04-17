import {
  Button,
  Flex,
  FormLabel,
  Input,
  Stack,
  FormControl,
} from "@chakra-ui/react";

import type { NextPage } from "next";

const Home: NextPage = () => (
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
        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input // eslint-disable-next-line prettier/prettier
            name="email"
            type="email"
            id="email"
            size="lg"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgCollor: "gray.900",
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input // eslint-disable-next-line prettier/prettier
            name="password"
            type="password"
            id="password"
            size="lg"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
          />
        </FormControl>
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

export default Home;
