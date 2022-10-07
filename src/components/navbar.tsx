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
import { useEffect, useState } from "react";

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
            <Image
              cursor="pointer"
              alt="mach logo"
              onClick={() => {
                window.location.href = "/mach-website";
              }}
              src="/img/mach_logo.png"
            ></Image>
            {isDesktop ? (
              <Flex justify="space-between" flex="1" pl="10">
                <ButtonGroup spacing="8" variant="link">
                  {[
                    "About",
                    "Engine",
                    "Team",
                    "Sponsors",
                    "FAQ",
                    "Contact",
                  ].map((item) => (
                    <NavItem key={item} item={item}></NavItem>
                  ))}
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
  const [opacity, setOpacity] = useState("100%");
  useEffect(() => {
    if (window.location.href.split("/").slice(-1)[0] === item.toLowerCase()) {
      setOpacity("25%");
    }
  }, [item]);
  return (
    <Button variant="link">
      <Link href={`/${item.toLowerCase()}`}>
        <Text
          color="gray.200"
          fontFamily="Poppins, sans-serif"
          fontSize="3xl"
          opacity={opacity}
        >
          {item}
        </Text>
      </Link>
    </Button>
  );
};
