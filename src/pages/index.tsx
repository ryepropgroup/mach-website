import { Box, Link, LinkProps, Text, TextProps } from "@chakra-ui/react";

import BackgroundVideo from "@/components/backgroundVideo";
import Navbar from "@/components/navbar";
import Header from "@/config";
import { bgStyle } from "@/styles";

const initialStyle: TextProps = {
  as: "span",
  color: "gray.100",
  fontFamily: "Poppins, sans-serif",
  fontSize: "6xl",
  fontWeight: "bold",
};

const acronymStyle: TextProps = {
  as: "span",
  color: "gray.300",
  fontFamily: "Poppins, sans-serif",
  fontSize: "5xl",
  fontWeight: "bold",
};

const normalStyle: TextProps = {
  as: "span",
  color: "white",
  fontFamily: "Poppins, sans-serif",
  fontSize: "2xl",
};

const linkStyle: LinkProps = {
  color: "purple.400",
  fontFamily: "Poppins, sans-serif",
  fontSize: "2xl",
};

const lreStyle: TextProps = {
  as: "span",
  color: "teal.300",
  fontFamily: "Poppins, sans-serif",
  fontSize: "2xl",
  fontWeight: "bold",
};

export default function Index() {
  return (
    <>
      <Header title="MACH :: Home" />
      <BackgroundVideo />
      <Box {...bgStyle} bg="blackAlpha.900">
        <Box {...bgStyle} bg="blackAlpha.100" />
      </Box>
      <Box>
        <Navbar />
        <Box ml="17vw">
          <Text {...initialStyle}>M</Text>
          <Text {...acronymStyle}>etropolitan</Text>
          <br />
          <Text {...initialStyle}>A</Text>
          <Text {...acronymStyle}>erospace</Text>
          <Text {...initialStyle} fontSize="5xl">
            {" &"}
          </Text>
          <br />
          <Text {...initialStyle}>C</Text>
          <Text {...acronymStyle}>ombustion</Text>
          <br />
          <Text {...initialStyle}>H</Text>
          <Text {...acronymStyle}>ub</Text>
        </Box>
        <Box ml="17vw">
          <Text {...normalStyle}>is {"a "}</Text>
          <Text {...normalStyle} fontWeight="bold">
            student design team
          </Text>
          <Text {...normalStyle}>{" from "}</Text>
          <Link {...linkStyle} href="https://torontomu.ca" isExternal>
            Toronto Metropolitan University
          </Link>
          <Text {...normalStyle}>,</Text>
        </Box>
        <Box ml="17vw">
          <Text {...normalStyle}>building a {"bipropellant "}</Text>
          <Text {...lreStyle}>liquid rocket engine</Text>
          <Text {...normalStyle}>.</Text>
        </Box>
      </Box>
    </>
  );
}
