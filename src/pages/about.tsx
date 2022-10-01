import {
  Box,
  Center,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

import Navbar from "@/components/navbar";
import SocialsFooter from "@/components/socialsFooter";
import Header from "@/config";
import {
  bgStyle,
  h1Style,
  linkStyle,
  liStyle,
  p1Style,
  p2Style,
} from "@/styles";

export default function About() {
  return (
    <>
      <Header title="MACH :: About Us" />
      <Box {...bgStyle} bg="black" />
      <Navbar />
      <Center>
        <Box w="64vw">
          <Heading {...h1Style}>About Us</Heading>
          <br />
          <Text {...p1Style}>
            <Text as="span" color="teal.300">
              MACH
            </Text>{" "}
            was founded in 2017 as <Text as="b">R</Text>yerson{" "}
            <Text as="b">P</Text>ropulsion <Text as="b">G</Text>roup, with the
            goal of building a liquid engine for a suborbital sounding rocket.
            We are aiming to be one of the first teams in Canada to test and fly
            a Student Researched and Developed bipropellant{" "}
            <Text as="b">liquid rocket engine</Text>.
          </Text>
          <br />
          <Text {...p2Style}>
            Our first engine and its supporting systems - the{" "}
            <Text as="span" color="teal.300">
              Borealis
            </Text>
            , has completed the preliminary design phase and is currently being
            manufactured for testing.
          </Text>
          <Text {...p2Style}>
            We will be conducting a series of tests in the next several months,
            working towards a{" "}
            <Text as="b">static hot-fire within the year</Text>.
          </Text>
          <Text {...p2Style}>
            Using the experience and data from Borealis, we will refine our
            design methodology to develop a{" "}
            <Text as="b">flightweight engine and propellant system</Text>, then
            integrate it into an airframe for flight testing.
          </Text>
          <br />
          <Text {...p1Style}>
            As a student design team, MACH offers more than just yearly
            competitions. Our primary goal is to provide a{" "}
            <Text as="b">unique and challenging</Text>{" "}
            <Text as="span" color="teal.300" font-weight={700}>
              real-world engineering experience
            </Text>{" "}
            to our members.
          </Text>
          <Text {...p1Style}>
            Our team takes on one of the{" "}
            <Text as="span" color="teal.300" font-weight={700}>
              most challenging projects
            </Text>{" "}
            in the aerospace sector, offering a unique opportunity to
            participate in a <Text as="b">research</Text>,{" "}
            <Text as="b">design</Text>, <Text as="b">manufacturing</Text>, and{" "}
            <Text as="b">testing</Text> process rarely found outside of
            cutting-edge space industry.
          </Text>
          <br />
          <Text {...p2Style}>
            In addition to the constant iterations of our liquid engine design,
            our team has accomplished a great deal within the Canadian rocketry
            community. Despite the difficulties of the pandemic over much of the
            past several years, our team members have:
          </Text>
          <List>
            <ListItem {...liStyle}>
              <ListIcon as={FaRocket} color="teal.300" />
              Designed, produced, and hot-fired a resin-printed propane engine.
            </ListItem>
            <ListItem {...liStyle}>
              <ListIcon as={FaRocket} color="teal.300" />
              Participated in the setup and{" "}
              <Link
                {...linkStyle}
                href="/mach-website/uploadthestupidvideo"
                isExternal
              >
                hot-fire test
              </Link>{" "}
              of a Rocketdyne LR-101 liquid engine, which helped bring the
              Mercury astronauts to space.
            </ListItem>
            <ListItem {...liStyle}>
              <ListIcon as={FaRocket} color="teal.300" />
              Published and presented a{" "}
              <Link
                {...linkStyle}
                href="/mach-website/uploadresearchpaper"
                isExternal
              >
                research paper
              </Link>{" "}
              on our design methodology at the 2022 CI/CS Combustion Conference.
            </ListItem>
            <ListItem {...liStyle}>
              <ListIcon as={FaRocket} color="teal.300" />
              Participated in and assisted with{" "}
              <Link
                {...linkStyle}
                href="https://www.launchcanada.org"
                isExternal
              >
                Launch Canada 2022
              </Link>
              , the first student rocketry competition ever held in Canada.
            </ListItem>
            <ListItem {...liStyle}>
              <ListIcon as={FaRocket} color="teal.300" />
              Hosted <Text as="b">“Rocketry Bootcamp”</Text> for our team as
              well as the TMU engineering community, a workshop series on rocket
              engine design and manufacturing.
            </ListItem>
          </List>
        </Box>
      </Center>
      <SocialsFooter />
    </>
  );
}
