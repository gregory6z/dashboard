import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex maxWidth={1480} w="100%" my="6" mx="auto" px="6">
        <Sidebar />
        <Box flex="1" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Utilisateur
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
              Créer un nouveau
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th color="gray.300" width="8" px="6">
                  <Checkbox colorScheme="pink" px="6" />
                </Th>
                <Th>Utilisateur</Th>
                <Th>Date d'inscription</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" px="6" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Gregory PRAXEDES</Text>
                    <Text fontSize="sm" color="gray.300">
                      gregoryrag@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 Avril, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                    Éditer
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}