import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { RiFileAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Users</Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiFileAddLine} />}
            >
              Add new
            </Button>
          </Flex>


        </Box>
      </Flex>
    </Box>
  );
}
