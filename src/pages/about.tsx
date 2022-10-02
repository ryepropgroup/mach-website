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
  b1Style,
  b2Style,
  bgStyle,
  emStyle,
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
            <Text {...b2Style}>MACH</Text> was founded in 2017 as{" "}
            <Text {...b1Style}>R</Text>
            yerson <Text {...b1Style}>P</Text>
            ropulsion <Text {...b1Style}>G</Text>
            roup, with the goal of building a{" "}
            <Text {...emStyle}>liquid engine</Text> for a suborbital sounding
            rocket. We are aiming to be one of the{" "}
            <Text {...emStyle}>first teams in Canada</Text> to test and fly a
            Student Researched and Developed bipropellant{" "}
            <Text {...b1Style}>liquid rocket engine</Text>.
          </Text>
          <br />
          <Text {...p2Style}>
            Our first engine and its supporting systems - the{" "}
            <Text {...b2Style}>Borealis</Text>, has{" "}
            <Text {...emStyle}>completed the preliminary design phase</Text> and
            is currently being{" "}
            <Text {...emStyle}>manufactured for testing</Text>.
          </Text>
          <Text {...p2Style}>
            We will be conducting a series of tests in the next several months,
            working towards a{" "}
            <Text {...b1Style}>static hot-fire within the year</Text>.
          </Text>
          <Text {...p2Style}>
            Using the experience and data from Borealis, we will refine our
            design methodology to develop a{" "}
            <Text {...b1Style}>flightweight engine and propellant system</Text>,
            then integrate it into an airframe for{" "}
            <Text {...emStyle}>flight testing</Text>.
          </Text>
          <br />
          <Text {...p1Style}>
            As a student design team, MACH offers more than just yearly
            competitions. Our primary goal is to provide a{" "}
            <Text {...b1Style}>unique and challenging</Text>{" "}
            <Text {...b2Style}>real-world engineering experience</Text> to our
            members.
          </Text>
          <br />
          <Text {...p1Style}>
            Our team takes on one of the{" "}
            <Text {...b2Style}>most challenging projects</Text> in the aerospace
            sector, offering a <Text {...emStyle}>unique</Text> opportunity to
            participate in a <Text {...b1Style}>research</Text>,{" "}
            <Text {...b1Style}>design</Text>,{" "}
            <Text {...b1Style}>manufacturing</Text>, and{" "}
            <Text {...b1Style}>testing</Text> process rarely found outside of{" "}
            <Text {...emStyle}>cutting-edge space industry</Text>.
          </Text>
          <br />
          <Text {...p2Style}>
            In addition to the constant iterations of our liquid engine design,
            our team has accomplished a great deal within the{" "}
            <Text {...emStyle}>Canadian rocketry community</Text>. Despite the
            difficulties of the pandemic over much of the past several years,
            our team members have:
          </Text>
          <List>
            <ListItem {...liStyle}>
              <ListIcon as={FaRocket} color="teal.300" />
              Designed, produced, and <Text {...b1Style}>hot-fired</Text> a{" "}
              <Text {...emStyle}>resin-printed propane engine</Text>.
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
              of a <Text {...b1Style}>Rocketdyne LR-101 liquid engine</Text>,
              which helped bring the Mercury astronauts to space.
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
              on our <Text {...emStyle}>design methodology</Text> at the 2022{" "}
              <Text {...emStyle}>CI/CS Combustion Conference</Text>.
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
              , the{" "}
              <Text {...emStyle}>
                first student rocketry competition ever held in Canada
              </Text>
              .
            </ListItem>
            <ListItem {...liStyle}>
              <ListIcon as={FaRocket} color="teal.300" />
              Hosted <Text {...b1Style}>
                &ldquo;Rocketry Bootcamp&rdquo;
              </Text>{" "}
              for our team as well as the TMU engineering community, a{" "}
              <Text {...emStyle}>workshop series</Text> on{" "}
              <Text {...emStyle}>rocket engine design and manufacturing</Text>.
            </ListItem>
          </List>
        </Box>
      </Center>
      <SocialsFooter />
    </>
  );
}
