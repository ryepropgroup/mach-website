import {
  Box,
  BoxProps,
  Center,
  Link,
  LinkProps,
  Text,
  TextProps,
} from "@chakra-ui/react";

import BackgroundVideo from "@/components/backgroundVideo";
import Navbar from "@/components/navbar";
import Header from "@/config";

const initialStyle: TextProps = {
  as: "span",
  color: "gray.100",
  fontSize: "6xl", // to convert to rem/chakra xl values
  fontWeight: 700,
};

const acronymStyle: TextProps = {
  as: "span",
  color: "gray.300",
  fontSize: "5xl", // to convert to rem/chakra xl values
  fontWeight: 700,
};

const normalStyle: TextProps = {
  as: "span",
  color: "white",
  fontSize: "4xl",
};

const linkStyle: LinkProps = {
  color: "purple.400",
  fontSize: "4xl",
};

const lreStyle: TextProps = {
  as: "span",
  color: "teal.300",
  fontSize: "4xl",
  fontWeight: 700,
};

const bgStyle: BoxProps = {
  pos: "fixed",
  zIndex: -1,
  top: 0,
  left: 0,
  w: "100vw",
  h: "100vh",
  objectFit: "cover",
};

export default function Index() {
  return (
    <>
      <Header title="MACH :: Home" />
      <BackgroundVideo />
      <Box {...bgStyle} bg="rgba(0, 0, 0, 0.9)">
        <Box {...bgStyle} bg="rgba(0, 76, 155, 0.1)"></Box>
      </Box>
      <Box>
        <Navbar />
        <Box ml="17%">
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
        <Center>
          <Box>
            <Text {...normalStyle}>is {"a "}</Text>
            <Text {...normalStyle} fontWeight={700}>
              student design team
            </Text>
            <Text {...normalStyle}>{" from "}</Text>
            <Link {...linkStyle} href="https://torontomu.ca" isExternal>
              Toronto Metropolitan University
            </Link>
            <Text {...normalStyle}>,</Text>
          </Box>
        </Center>
        <Center>
          <Box>
            <Text {...normalStyle}>building a {"bipropellant "}</Text>
            <Text {...lreStyle}>liquid rocket engine</Text>
            <Text {...normalStyle}>.</Text>
          </Box>
        </Center>
      </Box>
    </>
  );
}
