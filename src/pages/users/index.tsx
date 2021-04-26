import { Button, Checkbox, Icon, Box, Flex, Heading, Text, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine } from "react-icons/ri";

import { Header } from "../../components/Header/index";
import { Pagination } from "../../components/Pagination/index";
import { Sidebar } from "../../components/Sidebar/index";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(data => console.log(data))
  }, []);

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Users</Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Add new
              </Button>
            </Link>

          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>User</Th>
                { isWideVersion && <Th>Sign-up date</Th> }
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Viviane Vieira</Text>
                    <Text fontSize="sm" color="gray.300">viviane.kodama@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>April 14, 2021</Td> }
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Viviane Vieira</Text>
                    <Text fontSize="sm" color="gray.300">viviane.kodama@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>April 14, 2021</Td> }
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Viviane Vieira</Text>
                    <Text fontSize="sm" color="gray.300">viviane.kodama@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>April 14, 2021</Td> }
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
