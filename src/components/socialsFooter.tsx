import { Center, IconButton, Link } from "@chakra-ui/react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function SocialsFooter() {
  return (
    <Center m="2%">
      <Link mx="0.5%" href="https://www.facebook.com/rupropulsion/">
        <IconButton
          color="white"
          bg="black"
          aria-label="MACH Facebook"
          icon={<AiOutlineFacebook size="50px" />}
        />
      </Link>
      <Link mx="0.5%" href="https://www.instagram.com/mach_tmu/">
        <IconButton
          color="white"
          bg="black"
          aria-label="MACH Instagram"
          icon={<AiOutlineInstagram size="50px" />}
        />
      </Link>
      <Link mx="0.5%" href="https://www.linkedin.com/company/rupropulsion/">
        <IconButton
          color="white"
          bg="black"
          aria-label="MACH LinkedIn"
          icon={<AiOutlineLinkedin size="50px" />}
        />
      </Link>
    </Center>
  );
}
