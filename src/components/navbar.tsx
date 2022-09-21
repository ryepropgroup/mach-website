import {HamburgerIcon} from "@chakra-ui/icons";
import {
  Box, Button,
  ButtonGroup,
  Container,
  Flex,
  HStack, IconButton, Image,
  useColorModeValue,
}                      from "@chakra-ui/react";

export default function Navbar(): JSX.Element {
  const isDesktop = true;//useBreakpointValue({base: false, lg: true})
  return (
    <Flex as="section" pos="static" align="flex-start" pb={{base: '12', md: '24'}}>
      <Box as="nav" bg="bg-surface" shadow={useColorModeValue('sm', 'sm-dark')}>
        <Container py={{base: '4', lg: '5'}}>
          <HStack justify="space-between" spacing="10">
            <Image alt="mach logo" src="/img/mach_logo.png"></Image>
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup spacing="8" variant="link">
                  {['About', 'Engine', 'Team', 'Sponsors', 'Contact'].map(( item ) => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
              </Flex>
            ) : (
               <IconButton aria-label="Open Menu" icon={<HamburgerIcon/>} variant="ghost"/>
             )}
          </HStack>
        </Container>
      </Box>
    </Flex>
  );
}
