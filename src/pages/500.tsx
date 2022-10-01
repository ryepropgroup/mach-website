import { Box, Button, Center, Heading, Link } from "@chakra-ui/react";

import Header from "@/config";
import { bgStyle, h1Style } from "@/styles";

export default function Error() {
  return (
    <>
      <Header title="MACH :: 404" />
      <Box {...bgStyle} bg="black" />
      <Center h="100vh">
        <Box>
          <Heading {...h1Style}>500 - Internal Server Error</Heading>
          <br />
          <Center>
            <Link href="/mach-website">
              <Button size="lg">Return to Home Page</Button>
            </Link>
          </Center>
        </Box>
      </Center>
    </>
  );
}
