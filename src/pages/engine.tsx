import { Box, Center, Heading, Image, Link, Text } from "@chakra-ui/react";

import Navbar from "@/components/navbar";
import SocialsFooter from "@/components/socialsFooter";
import Header from "@/config";
import { bgStyle, h1Style, linkStyle,p1Style, p2Style } from "@/styles";

export default function Engine() {
  return (
    <>
      <Header title="MACH :: The Borealis" />
      <Box {...bgStyle} bg="black" />
      <Navbar />
      <Center>
        <Box w="64vw">
          <Heading {...h1Style}>The Borealis</Heading>
          <br />
          <Text {...p1Style}>
            The{" "}
            <Text as="span" color="teal.300" fontWeight={700}>
              Borealis
            </Text>{" "}
            is a pressure-fed, bipropellant, semi-regeneratively cooled liquid
            rocket engine.
          </Text>
          <Text {...p1Style}>
            Borealis is a static instrumentation engine, collecting high-quality
            data for design validation, combustion research, and future
            development.
          </Text>
          <br />
          <Box h="656px" />
          <br />
          <Heading {...h1Style} fontSize="40px">
            Design Specifications
          </Heading>
          <br />
          <Box h="402px" />
          <br />
          <Text {...p2Style}>
            Borealis is fueled by ethanol and nitrous oxide, a combination we’ve
            been calling “EthaNOS” for short. Both propellants are pressurized
            by a common nitrogen system, and pump-fed water is initially used as
            a coolant.
          </Text>
          <Text {...p2Style}>
            The engine telemetry includes on-chamber thermocouples to collect
            three-dimensional combustion data, strain gauges to measure chamber
            expansion, and an in-chamber pressure transducer. Additionally, the
            fluid systems have a full suite of temperature and pressure sensors,
            and a load cell is used to measure thrust.
          </Text>
          <Text {...p2Style}>
            A powerful data acquisition, control, and communication system
            ensures high quality data collection and safe operation of the
            engine and propellant system.
          </Text>
          <br />
          <Box h="1180px" />
          <br />
          <Text {...p2Style}>
            After our initial hot-fire, we’ll continue to use Borealis as a
            research and development engine while we work on flightweight
            successors. Major experiments are slated to test and collect
            extensive data on design variations for injectors, cooling systems,
            propellant ratio, and more.
          </Text>
          <br />
          <Text {...p1Style}>Have questions? It’s only rocket science.</Text>
          <br />
          <Text {...p1Style}>
            See if we already have answers in our{" "}
            <Link {...linkStyle} fontSize="2xl" href="/mach-website/faq">
              FAQ
            </Link>
            , or{" "}
            <Link {...linkStyle} fontSize="2xl" href="/mach-website/contact">
              contact us
            </Link>
            !
          </Text>
        </Box>
      </Center>
      <SocialsFooter />
    </>
  );
}
