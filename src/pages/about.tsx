import {
  Box,
  Center,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

import Navbar from "@/components/navbar";
import SocialsFooter from "@/components/socialsFooter";
import Header from "@/config";
import { bgStyle, h1Style, liStyle, p1Style, p2Style } from "@/styles";

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
            MACH was founded in 2017 as Ryerson Propulsion Group, with the goal
            of building a liquid engine for a suborbital sounding rocket. We are
            aiming to be one of the first teams in Canada to test and fly a
            Student Researched and Developed bipropellant liquid rocket engine.
          </Text>
          <br />
          <Text {...p2Style}>
            Our first engine and its supporting systems - the Borealis, has
            completed the preliminary design phase and is currently being
            manufactured for testing.
          </Text>
          <Text {...p2Style}>
            We will be conducting a series of tests in the next several months,
            working towards a static hot-fire within the year.
          </Text>
          <Text {...p2Style}>
            Using the experience and data from Borealis, we will refine our
            design methodology to develop a flightweight engine and propellant
            system, then integrate it into an airframe for flight testing.
          </Text>
          <br />
          <Text {...p1Style}>
            As a student design team, MACH offers more than just yearly
            competitions. Our primary goal is to provide a unique and
            challenging real-world engineering experience to our members.
          </Text>
          <Text {...p1Style}>
            Our team takes on one of the most challenging projects in the
            aerospace sector, offering a unique opportunity to participate in a
            research, design, manufacturing, and testing process rarely found
            outside of cutting-edge space industry.
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
              Participated in the setup and hot-fire test of a Rocketdyne LR-101
              liquid engine, which helped bring the Mercury astronauts to space.
            </ListItem>
            <ListItem {...liStyle}>
              <ListIcon as={FaRocket} color="teal.300" />
              Published and presented a research paper on our design methodology
              at the 2022 CI/CS Combustion Conference.
            </ListItem>
            <ListItem {...liStyle}>
              <ListIcon as={FaRocket} color="teal.300" />
              Participated in and assisted with Launch Canada 2022, the first
              student rocketry competition ever held in Canada.
            </ListItem>
            <ListItem {...liStyle}>
              <ListIcon as={FaRocket} color="teal.300" />
              Hosted “Rocketry Bootcamp” for our team as well as the TMU
              engineering community, a workshop series on rocket engine design
              and manufacturing.
            </ListItem>
          </List>
        </Box>
      </Center>
      <SocialsFooter />
    </>
  );
}
