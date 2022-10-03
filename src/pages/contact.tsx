import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Select,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { MdOutlineEmail, MdPersonOutline } from "react-icons/md";

import Navbar from "@/components/navbar";
import Header from "@/config";
import { bgStyle, h1Style } from "@/styles";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [customSubject, setCustomSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { hasCopied, onCopy } = useClipboard("mach@ryerson.ca");
  const toast = useToast();
  useEffect(() => {
    setIsValid(
      name &&
        email &&
        subject &&
        message && // check all req'd fields are filled
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) // check for email validity
    );
    if (subject == "Other") setIsValid(!!customSubject);
  }, [name, email, subject, message, customSubject]);
  return (
    <>
      <Header title="MACH :: Contact Us" />
      <Box {...bgStyle} bg="black" />
      <Navbar />
      <Flex align="center" justify="center" bg="black" id="contact">
        <Box borderRadius="lg">
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading {...h1Style}>Get in Touch</Heading>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={{ base: 4, md: 8, lg: 20 }}
              >
                <Stack
                  align="center"
                  justify="space-around"
                  direction={{ base: "row", md: "column" }}
                >
                  <Tooltip
                    closeOnClick={false}
                    hasArrow
                    label={hasCopied ? "Email Copied!" : "Copy Email"}
                  >
                    <IconButton
                      color="gray.100"
                      fontSize="3xl"
                      _hover={{
                        bg: "blue.400",
                      }}
                      aria-label="email"
                      icon={<AiOutlineMail size="28px" />}
                      isRound
                      onClick={onCopy}
                      size="lg"
                      variant="ghost"
                    />
                  </Tooltip>
                  <Link
                    href="https://ca.linkedin.com/company/rupropulsion"
                    isExternal
                  >
                    <IconButton
                      color="gray.100"
                      _hover={{
                        bg: "blue.400",
                      }}
                      aria-label="linkedin"
                      icon={<AiOutlineLinkedin size="28px" />}
                      isRound
                      size="lg"
                      variant="ghost"
                    />
                  </Link>
                  <Link href="https://www.instagram.com/mach_tmu/">
                    <IconButton
                      color="gray.100"
                      _hover={{
                        bg: "blue.400",
                      }}
                      aria-label="instagram"
                      icon={<AiOutlineInstagram size="28px" />}
                      isRound
                      size="lg"
                      variant="ghost"
                    />
                  </Link>
                </Stack>
                <Box
                  p={8}
                  color="whiteAlpha.900"
                  bg="gray.900"
                  borderRadius="lg"
                  shadow="base"
                >
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
                      <InputGroup>
                        <InputLeftElement>
                          <MdPersonOutline />
                        </InputLeftElement>
                        <Input
                          name="name"
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          type="text"
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <InputGroup>
                        <InputLeftElement>
                          <MdOutlineEmail />
                        </InputLeftElement>
                        <Input
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your Email"
                          type="email"
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Subject</FormLabel>
                      <InputGroup>
                        <Select
                          onChange={(e) => {
                            setSubject(e.target.value);
                            if (e.target.value !== "Other")
                              setCustomSubject("");
                          }}
                          placeholder="Subject"
                        >
                          <option>Sponsor MACH</option>
                          <option>Join MACH</option>
                          <option>Other</option>
                        </Select>
                      </InputGroup>
                    </FormControl>
                    {subject === "Other" && (
                      <FormControl>
                        <FormLabel>If other, please specify subject</FormLabel>
                        <InputGroup>
                          <Input
                            name="subject"
                            onChange={(e) => setCustomSubject(e.target.value)}
                            placeholder="Your Custom Subject"
                            type="subject"
                          />
                        </InputGroup>
                      </FormControl>
                    )}
                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        resize="none"
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Message"
                        rows={6}
                      />
                      <Input
                        name="honeypot"
                        onChange={(e) => setHoneypot(e.target.value)}
                        style={{ display: "none" }}
                        type="text"
                      />
                    </FormControl>
                    <Button
                      color="white"
                      bg="blue.400"
                      _hover={{
                        bg: "blue.500",
                      }}
                      colorScheme="blue"
                      isDisabled={!isValid}
                      onClick={(e) => {
                        e.preventDefault();
                        fetch("https://api.staticforms.xyz/submit", {
                          method: "POST",
                          body: JSON.stringify({
                            name,
                            email,
                            subject:
                              subject === "Other" ? customSubject : subject,
                            message,
                            honeypot,
                            replyTo: "@",
                            accessKey: "2d0f1899-6886-4f40-ad3c-72275f41d888",
                          }),
                          headers: { "Content-Type": "application/json" },
                        })
                          .then(
                            (r) => r.json() as Promise<Record<string, unknown>>
                          )
                          .then((r) => {
                            if (r.success) {
                              [
                                setName,
                                setEmail,
                                setSubject,
                                setCustomSubject,
                                setMessage,
                                setHoneypot,
                              ].forEach((f) => f(""));
                              toast({
                                title: "Form submitted!",
                                description:
                                  "Thank you for reaching out to us.",
                                status: "success",
                                duration: 10000,
                                isClosable: true,
                              });
                            } else {
                              toast({
                                title: "Error",
                                description:
                                  "Sorry, something went wrong while submitting the form. Please try again later.",
                                status: "error",
                                duration: 10000,
                                isClosable: true,
                              });
                            }
                          })
                          .catch(() => {
                            toast({
                              title: "Error",
                              description:
                                "Sorry, something went wrong while submitting the form. Please try again later.",
                              status: "error",
                              duration: 10000,
                              isClosable: true,
                            });
                          });
                      }}
                    >
                      Submit
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
      <br />
    </>
  );
}
