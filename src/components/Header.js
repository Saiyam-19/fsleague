import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { Spacer } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { FiBell, FiSearch, FiSettings } from "react-icons/fi";
import { Heading } from "@chakra-ui/react";
export default () => {
  return (
    <Box p={10}>
      <Box boxShadow='xl' p='6' rounded='md' bg='white'>
      <Flex>
        <Heading as='h2' size='xl' isTruncated>Hey Saiyam</Heading>
        <Spacer />
        <HStack fontSize="xl" spacing="4">
          <FiSearch />
          <FiBell />
          <FiSettings />
          <Avatar
            w={12}
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </HStack>
      </Flex>
    </Box>
    </Box>
  );
};
