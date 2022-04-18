import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export function Header() {
  return (
    <Flex // eslint-disable-next-line prettier/prettier
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text // eslint-disable-next-line prettier/prettier
        w="64"
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
      >
        Dashboard
        <Text // eslint-disable-next-line prettier/prettier
          as="span"
          ml="1"
          color="pink.500"
        >
          .
        </Text>
      </Text>
      <Flex // eslint-disable-next-line prettier/prettier
        maxWidth={400}
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input // eslint-disable-next-line prettier/prettier
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Recherche dans l'application"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon fontSize="20" as={RiSearchLine} />
      </Flex>
      <Flex // eslint-disable-next-line prettier/prettier
        align="center"
        ml="auto"
      >
        <HStack // eslint-disable-next-line prettier/prettier
          spacing="8"
          mx="8"
          pr="8"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon fontSize="20" as={RiNotificationLine} />
          <Icon fontSize="20" as={RiUserAddLine} />
        </HStack>
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Gregory Praxedes</Text>
            <Text color="gray.300" fontSize="small">
              gregoryrag@gmail.com
            </Text>
          </Box>
          <Avatar size="md" name="Gregory Praxedes" />
        </Flex>
      </Flex>
    </Flex>
  );
}
