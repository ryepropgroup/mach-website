import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Table,
  TableCellProps,
  TableColumnHeaderProps,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import CopyrightFooter from "@/components/copyrightFooter";
import Navbar from "@/components/navbar";
import SocialsFooter from "@/components/socialsFooter";
import WIPBanner from "@/components/wipBanner";
import Header from "@/config";
import {
  b1Style,
  b2Style,
  bgStyle,
  em2Style,
  h1Style,
  linkStyle,
  p1Style,
  p2Style,
} from "@/styles";

const thStyle: TableColumnHeaderProps = {
  color: "gray.100",
  fontSize: "xl",
  lineHeight: "72px",
};

const tdStyle: TableCellProps = {
  color: "gray.100",
  fontSize: "lg",
  lineHeight: "48px",
};

export default function Engine() {
  return (
    <>
      <Header title="MACH :: The Borealis" />
      <Box {...bgStyle} bg="black" />
      <WIPBanner />
      <Navbar />
      <Center>
        <Box w="64vw">
          <Heading {...h1Style}>The Borealis</Heading>
          <br />
          <Text {...p1Style}>
            The <Text {...b2Style}>Borealis</Text> is a{" "}
            <Text {...em2Style}>
              pressure-fed, bipropellant, semi-regeneratively cooled <br />
            </Text>{" "}
            <Text
              {...b1Style}
              bgGradient="linear(to-r, cyan.300 0%, orange.50 50%)"
              bgClip="text"
            >
              liquid rocket engine
            </Text>
            .
          </Text>
          <Text {...p1Style}>
            Borealis is a{" "}
            <Text {...b1Style}>static instrumentation engine</Text>, collecting
            high-quality data for{" "}
            <Text {...em2Style}>
              <br />
              design validation, combustion research, and future development.
            </Text>
          </Text>
          <br />
          <Image
            alt="Sectioned render of the Borealis Engine"
            rounded="lg"
            src="/mach-website/img/engine/Engine_Sectioned_Render.png"
          />
          <br />
          <Heading {...h1Style} fontSize="40px">
            Design Specifications
          </Heading>
          <br />
          <Box bg="gray.900" rounded="lg">
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th {...thStyle}>Specific Impulse</Th>
                    <Th {...thStyle}>Total Thrust</Th>
                    <Th {...thStyle}>Chamber Temperature</Th>
                    <Th {...thStyle}>Chamber Pressure</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td {...tdStyle}>152 s</Td>
                    <Td {...tdStyle}>1200 N</Td>
                    <Td {...tdStyle}>2800 K</Td>
                    <Td {...tdStyle}>4.83 MPa</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <br />
          <Text {...p2Style}>
            Borealis is <Text {...em2Style}>fueled by</Text>{" "}
            <Text {...b1Style}>ethanol</Text> and{" "}
            <Text {...b1Style}>nitrous oxide</Text>, a combination we&rsquo;ve
            been calling &ldquo;
            <Text
              {...b1Style}
              bgGradient="linear(to-r, cyan.300 0%, yellow.500 66%)"
              bgClip="text"
            >
              EthaNOS
            </Text>
            &rdquo; for short. Both propellants are pressurized by a common{" "}
            <Text {...b1Style}>nitrogen</Text> system, and pump-fed{" "}
            <Text {...b1Style}>water</Text> is initially used as a coolant.
          </Text>
          <Text {...p2Style}>
            The <Text {...b2Style}>engine telemetry</Text> includes on-chamber{" "}
            <Text {...b1Style}>thermocouples</Text> to collect three-dimensional
            combustion data, <Text {...b1Style}>strain gauges</Text> to measure
            chamber expansion, and an in-chamber{" "}
            <Text {...b1Style}>pressure transducer</Text>. Additionally, the
            fluid systems have a full suite of{" "}
            <Text {...b1Style}>temperature</Text> and{" "}
            <Text {...b1Style}>pressure sensors</Text>, and a{" "}
            <Text {...b1Style}>load cell</Text> is used to measure thrust.
          </Text>
          <Text {...p2Style}>
            A powerful{" "}
            <Text {...b2Style}>
              data acquisition, control, and communication system
            </Text>{" "}
            ensures <Text {...b1Style}>high quality data collection</Text> and{" "}
            <Text {...b1Style}>safe operation</Text> of the engine and
            propellant system.
          </Text>
          <br />
          <SimpleGrid minChildWidth="392px" spacing="20px">
            <Image
              alt="Instrumentation schematic of the Borealis Engine"
              rounded="lg"
              src="/mach-website/img/engine/Instrumentation_Schematic.png"
            />
            <Image
              alt="Piping and instrumentation diagram of the Borealis engine"
              rounded="lg"
              src="/mach-website/img/engine/PM_PID_V3.2_Compacted.png"
            />
            <Image
              alt="Compacted block diagram of the Borealis Engine"
              rounded="lg"
              src="/mach-website/img/engine/TC_Block_Diagram_Compacted.png"
            />
          </SimpleGrid>
          <Grid
            gap="1vw"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
          >
            <GridItem w="42.75vw" colSpan={1} rowSpan={2}>
              <Image
                alt="Engine photo"
                rounded="lg"
                src="/mach-website/img/photos/DSC9101.jpg"
              />
            </GridItem>
            <GridItem colSpan={2} rowSpan={1}>
              <Image
                alt="Engine photo"
                rounded="lg"
                src="/mach-website/img/photos/DSC7694.jpg"
              />
            </GridItem>
            <GridItem colSpan={2} rowSpan={1}>
              <Image
                alt="Engine photo"
                rounded="lg"
                src="/mach-website/img/photos/DSC7686.jpg"
              />
            </GridItem>
          </Grid>
          <br />
          <Text {...p2Style}>
            After our initial hot-fire, we&rsquo;ll continue to use Borealis as
            a research and development engine while we work on flightweight
            successors. Major experiments are slated to test and collect
            extensive data on design variations for{" "}
            <Text {...em2Style}>injectors</Text>,{" "}
            <Text {...em2Style}>cooling systems</Text>,{" "}
            <Text {...em2Style}>propellant ratio</Text>,{" "}
            <Text {...em2Style}>and more</Text>.
          </Text>
          <br />
          <Text {...p1Style}>
            Have questions? It&rsquo;s only rocket science.
          </Text>
          <br />
          <Text {...p1Style}>
            See if we already have answers in our{" "}
            <Link {...linkStyle} href="/mach-website/faq">
              FAQ
            </Link>
            , or{" "}
            <Link {...linkStyle} href="/mach-website/contact">
              contact us
            </Link>
            !
          </Text>
        </Box>
      </Center>
      <SocialsFooter />
      <CopyrightFooter />
    </>
  );
}
