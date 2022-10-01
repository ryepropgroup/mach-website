import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Heading,
  HeadingProps,
  Image,
  Text,
  TextProps,
} from "@chakra-ui/react";

const nameStyle: HeadingProps = {
  color: "gray.100",
  fontSize: "xl",
  fontWeight: "bold",
};

const posStyle: HeadingProps = {
  color: "teal.300",
  fontSize: "lg",
  fontWeight: "bold",
};

const descStyle: TextProps = {
  color: "gray.100",
  fontSize: "md",
};

export default function LeadCard({
  name,
  pos,
  children,
}: {
  name: string;
  pos: string;
  children: string;
}) {
  return (
    <Center>
      <Box px="20px" py="30px" bg="gray.900" rounded="lg">
        <Image
          alt={name}
          rounded="lg"
          src={`/mach-website/img/leads/${name.split(" ").join("_")}.jpg`}
        />
        <Center>
          <Accordion allowToggle>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h3>
                <AccordionButton alignItems="center" justifyContent="center">
                  <Box>
                    <Heading {...nameStyle}>{name}</Heading>
                    <Heading {...posStyle}>{pos}</Heading>
                    <AccordionIcon color="teal.300" />
                  </Box>
                </AccordionButton>
              </h3>
              <AccordionPanel>
                <Text {...descStyle}>{children}</Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Center>
      </Box>
    </Center>
  );
}
