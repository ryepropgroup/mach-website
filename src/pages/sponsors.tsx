import { Box, Center, Heading, Link, Text } from "@chakra-ui/react";

import Navbar from "@/components/navbar";
import Header from "@/config";
import {
  b1Style,
  b2Style,
  bgStyle,
  h1Style,
  linkStyle,
  p1Style,
  p2Style,
} from "@/styles";

export default function Sponsors() {
  return (
    <>
      <Header title="MACH :: Our Sponsors" />
      <Box {...bgStyle} bg="black" />
      <Navbar />
      <Center>
        <Box w="67vw">
          <Heading {...h1Style}>Our Sponsors</Heading>
          <br />
          <Text {...p1Style}>
            Without the genuine <Text {...b2Style}>intrigue</Text>,{" "}
            <Text {...b2Style}>vision</Text>, and{" "}
            <Text {...b2Style}>generosity</Text> of{" "}
            <Text {...b1Style}>our sponsors</Text>,<br />
            <Text {...b1Style}>we would not be where we are today.</Text>
          </Text>
          <Text {...p1Style}>
            <br />
          </Text>
          <Text {...p1Style}>
            As one of the <Text {...b1Style}>youngest</Text> Canadian rocketry
            teams with one of the <Text {...b1Style}>hardest</Text> projects,
            <br />
            MACH&rsquo;s progress is a testament to the sponsors{" "}
            <Text {...b2Style}>making it all happen</Text>.
          </Text>
          <Text {...p1Style}>
            <br />
          </Text>
          <Text {...p2Style}>
            We are reliant on external support to continue what we&rsquo;re
            doing and <Text {...b1Style}>take on even bigger projects</Text>.
            Our sponsors provide us with operational{" "}
            <Text {...b1Style}>funding</Text>,{" "}
            <Text {...b1Style}>equipment</Text> support,{" "}
            <Text {...b1Style}>parts</Text> &amp;{" "}
            <Text {...b1Style}>tools</Text>,{" "}
            <Text {...b1Style}>manufacturing</Text>, industry{" "}
            <Text {...b1Style}>expertise</Text>, and more.
          </Text>
          <Text {...p2Style}>
            As one of the only organizations in the entire country working on
            liquid rocket propulsion technology, our sponsors are{" "}
            <Text {...b1Style}>
              making a difference in the rapidly growing field of Canadian
              rocketry
            </Text>
            .
          </Text>
          <Text {...p2Style}>
            <br />
          </Text>
          <Text {...p1Style}>
            If you or your organization like what we&rsquo;re doing, and want to
            support the <Text {...b1Style}>next generation</Text> of{" "}
            <Text {...b2Style}>Canadian aerospace engineers</Text> and{" "}
            <Text {...b2Style}>rocket scientists</Text>, please get in touch
            with us through the{" "}
            <Link {...linkStyle} href="/mach-website/contact">
              contacts page
            </Link>
            !
          </Text>
          <br />
          <Heading {...h1Style} fontSize="3xl">
            Partners
          </Heading>
          <br />
        </Box>
      </Center>
    </>
  );
}
