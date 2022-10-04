import { Center, Text } from "@chakra-ui/react";

import { p2Style } from "@/styles";

export default function CopyrightFooter() {
  return (
    <Center as="footer" m="1%">
      <Text {...p2Style} color="gray.500">
        Copyright &copy; 2022 Metropolitan Aerospace &amp; Combustion Hub. All
        rights reserved.
      </Text>
    </Center>
  );
}
