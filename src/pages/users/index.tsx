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
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useQuery } from "react-query";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const { data, isLoading, error } = useQuery("users", async () => {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();

    return data;
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Créer un nouveau
              </Button>
            </Link>
          </Flex>
          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuarios</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th color="gray.300" width="8" px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" px="6" />
                    </Th>
                    <Th>Utilisateur</Th>
                    {isWideVersion && <Th>Date d'inscription</Th>}
                    {isWideVersion && <Th width="8"></Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td px={["4", "4", "6"]}>
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
                    {isWideVersion && <Td>04 Avril, 2021</Td>}

                    {isWideVersion && (
                      <Td>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="purple"
                          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        >
                          Éditer
                        </Button>
                      </Td>
                    )}
                  </Tr>
                </Tbody>

                <Tbody>
                  <Tr>
                    <Td px={["4", "4", "6"]}>
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
                    {isWideVersion && <Td>04 Avril, 2021</Td>}

                    {isWideVersion && (
                      <Td>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="purple"
                          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        >
                          Éditer
                        </Button>
                      </Td>
                    )}
                  </Tr>
                </Tbody>

                <Tbody>
                  <Tr>
                    <Td px={["4", "4", "6"]}>
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
                    {isWideVersion && <Td>04 Avril, 2021</Td>}

                    {isWideVersion && (
                      <Td>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="purple"
                          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        >
                          Éditer
                        </Button>
                      </Td>
                    )}
                  </Tr>
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
