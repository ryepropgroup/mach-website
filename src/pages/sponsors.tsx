import { Box, Center, Heading, Link, SimpleGrid, Text } from "@chakra-ui/react";

import CopyrightFooter from "@/components/copyrightFooter";
import Navbar from "@/components/navbar";
import SocialsFooter from "@/components/socialsFooter";
import SponsorCard from "@/components/sponsorCard";
import WIPBanner from "@/components/wipBanner";
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
      <WIPBanner />
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
            <Link {...linkStyle} href="/contact">
              contacts page
            </Link>
            !
          </Text>
          <br />
          <Heading {...h1Style} fontSize="3xl">
            Partners
          </Heading>
          <br />
          <SimpleGrid minChildWidth="400px" spacing="20px">
            <SponsorCard
              alt="Toronto Metropolitan University (TMU)"
              href="https://www.torontomu.ca/"
              src="/img/sponsors/TMU.png"
            />
            <SponsorCard
              alt="Metropolitan Undergraduate Engineering Society (MUES)"
              href="https://www.mues.ca/"
              src="/img/sponsors/MUES.png"
            />
            <SponsorCard
              alt="Design Fabrication Zone (DFZ)"
              href="https://www.torontomu.ca/zone-learning/design-fabrication-zone/"
              src="/img/sponsors/DFZ.png"
            />
            <SponsorCard
              alt="Launch Canada"
              href="https:///www.launchcanada.org/"
              src="/img/sponsors/Launch_Canada.png"
            />
            <SponsorCard
              alt="Swagelok Central Ontario and Atlantic Canada"
              href="https://centralontario.swagelok.com/"
              src="/img/sponsors/Swagelok.png"
            />
            <SponsorCard
              alt="Megapro Tools"
              href="https://megaprotools.com/"
              src="/img/sponsors/Megapro.png"
            />
            <SponsorCard
              alt="Red Rocket Coffee"
              href="https://www.shopredrocketcoffee.com/"
              src="/img/sponsors/Red_Rocket_Coffee.png"
            />
            <SponsorCard
              alt="Altair"
              href="https://altair.com"
              src="/img/sponsors/Altair.png"
            />
            <SponsorCard
              alt="Solidworks"
              href="https://www.solidworks.com/"
              src="/img/sponsors/Solidworks.png"
            />
            <SponsorCard
              alt="Stein Industries Inc."
              href="https://steinindustriesinc.com/"
              src="/img/sponsors/Stein.png"
            />
            <SponsorCard
              alt="TeXtreme"
              href="https://www.textreme.com/"
              src="/img/sponsors/TeXtreme.png"
            />
            <SponsorCard
              alt="Flownex"
              href="https://flownex.com/"
              src="/img/sponsors/Flownex.png"
            />
            <SponsorCard
              alt="SimplePath Farms"
              href="https://www.simplepathfarms.com/"
              src="/img/sponsors/SimplePath.svg"
            />
            <SponsorCard
              alt="Vibrant Performance"
              href="https://vibrantperformance.com/"
              src="/img/sponsors/VibrantPerformance.png"
            />
            <SponsorCard
              alt="Hoskin Scientific LTD."
              href="https://www.hoskin.ca/"
              src="/img/sponsors/Hoskin.png"
            />
            <SponsorCard
              alt="Kulite"
              href="https://kulite.com/"
              src="/img/sponsors/kulite.png"
            />
            <SponsorCard
              alt="Automation Direct"
              href="https://www.automationdirect.com/"
              src="/img/sponsors/automationdirect.png"
            />
          </SimpleGrid>
        </Box>
      </Center>
      <SocialsFooter />
      <CopyrightFooter />
    </>
  );
}
