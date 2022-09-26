import { Box, Center } from "@chakra-ui/react";

import Navbar from "@/components/navbar";
import SocialsFooter from "@/components/socialsFooter";
import Header from "@/config";
import { bgStyle } from "@/styles";

export default function Team() {
  return (
    <>
      <Header title="MACH :: Team" />
      <Box {...bgStyle} bg="#000b17" />
      <Navbar />
      <Center>{/*content goes here*/}</Center>
      <SocialsFooter />
    </>
  );
}
