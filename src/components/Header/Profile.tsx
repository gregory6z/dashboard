import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gregory Praxedes</Text>
        <Text color="gray.300" fontSize="small">
          gregoryrag@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Gregory Praxedes" />
    </Flex>
  );
}
