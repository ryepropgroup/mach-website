import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Navbar() {
  const isDesktop = true; // useBreakpointValue({base: false, lg: true})
  return (
    <Flex
      as="section"
      pos="static"
      align="flex-start"
      pb={{ base: "12", md: "24" }}
      pl="10"
    >
      <Box as="nav" bg="bg-surface" shadow={useColorModeValue("sm", "sm-dark")}>
        <Container py={{ base: "4", lg: "5" }}>
          <HStack justify="space-between" spacing="10">
            <Image alt="mach logo" src="/img/mach_logo.png"></Image>
            {isDesktop ? (
              <Flex justify="space-between" flex="1" pl="10">
                <ButtonGroup spacing="8" variant="link">
                  {["About", "Engine", "Team", "Sponsors", "Contact"].map(
                    (item) => (
                      <NavItem key={item} item={item}></NavItem>
                    )
                  )}
                </ButtonGroup>
              </Flex>
            ) : (
              <IconButton
                aria-label="Open Menu"
                icon={<HamburgerIcon />}
                variant="ghost"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Flex>
  );
}
const NavItem = ({ item }: { item: string }) => {
  return (
    <Button variant="link">
      <Link href={`/${item.toLowerCase()}`}>
        <Text color="gray.200" fontSize="3xl">
          {item}
        </Text>
      </Link>
    </Button>
  );
};
