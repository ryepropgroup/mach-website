import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
  Textarea,
  Tooltip,
  useClipboard,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { MdOutlineEmail, MdPersonOutline } from "react-icons/md";

import CopyrightFooter from "@/components/copyrightFooter";
import Navbar from "@/components/navbar";
import WIPBanner from "@/components/wipBanner";
import Header from "@/config";
import { bgStyle, h1Style, p2Style } from "@/styles";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

const defaultFormValues: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  honeypot: "",
};

export default function Contact() {
  const [form, setForm] = useState(defaultFormValues);
  const [isValid, setIsValid] = useState(false);
  const { hasCopied, onCopy } = useClipboard("mach@ryerson.ca");
  const toast = useToast();

  useEffect(() => {
    const { name, email, subject, message } = form;
    setIsValid(
      !!(
        name &&
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
        subject &&
        message
      ) // check all req'd fields are filled and that email address is valid
    );
  }, [form]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header title="MACH :: Contact Us" />
      <Box {...bgStyle} bg="black" />
      <WIPBanner />
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
                    <Center>
                      <IconButton
                        alignSelf="flex-start"
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
                      <Text {...p2Style}>mach@ryerson.ca</Text>
                    </Center>
                  </Tooltip>
                  <Link
                    href="https://ca.linkedin.com/company/rupropulsion"
                    isExternal
                  >
                    <Center>
                      <IconButton
                        alignSelf="flex-start"
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
                      <Text {...p2Style}>@rupropulsion</Text>
                    </Center>
                  </Link>
                  <Link href="https://www.instagram.com/mach_tmu/">
                    <Center>
                      <IconButton
                        alignSelf="flex-start"
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
                      <Text {...p2Style}>@mach_tmu</Text>
                    </Center>
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
                          onChange={handleChange}
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
                          onChange={handleChange}
                          placeholder="Your Email"
                          type="email"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Subject</FormLabel>
                      <InputGroup>
                        <Input
                          name="subject"
                          onChange={handleChange}
                          placeholder="Your Subject"
                          type="subject"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        resize="none"
                        name="message"
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows={6}
                      />
                      <Input
                        name="honeypot"
                        onChange={handleChange}
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
                            ...form,
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
                              setForm(defaultFormValues);
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
      <CopyrightFooter />
    </>
  );
}
