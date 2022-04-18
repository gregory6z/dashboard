import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export function Header() {
  return (
    <Flex
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center">
      <Text w="64" fontSize="3xl" fontWeight="bold" letterSpacing="tight">
        Dashboard
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>
      <Flex
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
        borderRadius="full">
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Recherche dans l'application"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon fontSize="20" as={RiSearchLine} />
      </Flex>
      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700">
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
