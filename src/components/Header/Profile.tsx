import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Viviane Vieira</Text>
        <Text color="gray.300" fontSize="small">
          viviane.kodama@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Vivine Vieira" src="https://github.com/vivanevieira.png"/>

    </Flex>
  );
}
