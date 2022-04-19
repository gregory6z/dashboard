import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
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
  );
}
