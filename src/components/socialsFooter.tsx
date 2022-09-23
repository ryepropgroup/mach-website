import { Center, IconButton, Link } from "@chakra-ui/react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function SocialsFooter() {
  return (
    <Center m="1%">
      <Link mx="0.5%" href="https://www.facebook.com/rupropulsion/">
        <IconButton
          as={AiOutlineFacebook}
          color="white"
          bg="black"
          aria-label="MACH Facebook"
        />
      </Link>
      <Link mx="0.5%" href="https://www.instagram.com/mach_tmu/">
        <IconButton
          as={AiOutlineInstagram}
          color="white"
          bg="black"
          aria-label="MACH Instagram"
        />
      </Link>
      <Link mx="0.5%" href="https://www.linkedin.com/company/rupropulsion/">
        <IconButton
          as={AiOutlineLinkedin}
          color="white"
          bg="black"
          aria-label="MACH LinkedIn"
        />
      </Link>
    </Center>
  );
}
