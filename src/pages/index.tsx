import {
  Box,
  Center,
  Link,
  LinkProps,
  Text,
  TextProps,
} from "@chakra-ui/react";

import Header from "@/config";

import Navbar from "../components/navbar";

const initialStyle: TextProps = {
  as: "span",
  color: "gray.100",
  fontSize: "6xl",
  fontWeight: 700,
};

const acronymStyle: TextProps = {
  as: "span",
  color: "gray.300",
  fontSize: "5xl",
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

export default function Index() {
  return (
    <>
      <Header title="MACH :: Home" />
      <Box h="100vh" bg="black">
        <Navbar />
        <Center>
          <Box>
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
        </Center>
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
