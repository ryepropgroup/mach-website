import {
  Center,
  IconButton,
  Link,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

export default function SocialsFooter() {
  const { hasCopied, onCopy } = useClipboard("mach@ryerson.ca");
  return (
    <Center as="footer" m="2%">
      <Tooltip
        closeOnClick={false}
        hasArrow
        label={hasCopied ? "Email Copied!" : "Copy Email"}
      >
        <IconButton
          mx="0.5%"
          color="white"
          bg="black"
          aria-label="MACH Email"
          icon={<AiOutlineMail size="50px" />}
          onClick={onCopy}
        />
      </Tooltip>
      <Link mx="0.5%" href="https://www.instagram.com/mach_tmu/">
        <IconButton
          color="white"
          bg="black"
          aria-label="MACH Instagram"
          icon={<AiOutlineInstagram size="50px" />}
        />
      </Link>
      <Link mx="0.5%" href="https://ca.linkedin.com/company/rupropulsion">
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
