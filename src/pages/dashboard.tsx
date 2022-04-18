import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex
        border="solid red 1px"
        maxWidth={1480}
        w="100%"
        my="6"
        mx="auto"
        px="6"
      >
        <Sidebar></Sidebar>
      </Flex>
    </Flex>
  );
}

export default Dashboard;
