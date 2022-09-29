import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Heading,
  List,
  ListIcon,
  ListItem,
  ListItemProps,
  Text,
} from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

import Navbar from "@/components/navbar";
import SocialsFooter from "@/components/socialsFooter";
import Header from "@/config";
import {
  bgStyle,
  headingStyle,
  introStyleSecond,
  listItemStyle,
  teamDetailsStyle,
  teamHeadingStyle,
} from "@/styles";

export default function Team() {
  /*TODO: SMALL STYLES*/
  return (
    <>
      <Header title="MACH :: Team" />
      <Box {...bgStyle} bg="#000b17" />
      <Navbar />
      <Center>
        <Box w="56vw">
          <Heading {...headingStyle}>Our Team</Heading>
          <br />
          <Text {...introStyleSecond} lineHeight="72px">
            MACH is divided into five subteams. Our technical subteams are
            Combustion Dynamics, Propellant Management, and Transfer & Control,
            supported by the Safety and Business Development subteams.
          </Text>
          <Text {...introStyleSecond}>
            <br />
          </Text>
          <Text {...introStyleSecond} lineHeight="72px">
            Our projects would be impossible without all our subteams working
            together, and each one offers unique and invaluable experiences for
            our members.
          </Text>
          <br />
          <Text {...teamDetailsStyle}>
            From a tiny group of students with a big project, we’ve grown to a
            team of {/*TODO: BOLD THIS UNTIL END OF SENTENCE*/}over 70 active
            members. Not only do we have a large number of engineering students
            of every specialization, members from unexpected disciplines and
            outside of TMU have also joined us along the way.
          </Text>
          <Text {...teamDetailsStyle} fontWeight={700}>
            Through early mornings, sleepless nights, and every heavily
            caffeinated moment in between, {/*TODO:BOLD UNTIL FOR*/}a common
            passion for rocketry has become so much more for everyone at MACH.
          </Text>
          <br />
          <Heading {...headingStyle} fontSize="40px">
            Subteams
          </Heading>
          <br />
          <Text {...teamDetailsStyle}>
            {/*TODO: bold from 'experiential learning' to 'countless other' , then do turquoise + bold to the end*/}
            The development of the Borealis has been an incredible and ongoing
            journey for all of us. Every subteam offers experiential learning,
            industry knowledge, professional connections, and countless other
            opportunities and experiences we’ve never found in our classes,
            internships, or any other team.
          </Text>
          <br />
          <Accordion allowMultiple defaultIndex={[-1]}>
            {/*COMBUSTION DYNAMICS SECTION*/}
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <AccordionButton>
                <Box>
                  <Heading {...teamHeadingStyle}>
                    {/*TODO: make umar color idk*/}Combustion Dynamics
                  </Heading>
                  <br />
                  <Text {...teamDetailsStyle} textAlign="left">
                    is responsible for the design, iteration, manufacturing, and
                    testing of the combustion chamber, nozzle, injector, and
                    cooling system for Borealis and future engines.
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text {...teamDetailsStyle}>
                  {/*TODO: bold up until 'future engines'*/}Using calculations,
                  published references, and simulations, the Borealis was
                  meticulously designed, then redesigned, and redesigned, and
                  redesigned… until it became the engine we have now.
                </Text>
                <br />
                <Text {...teamDetailsStyle}>
                  Currently, the CD subteam is working on manufacturing the
                  engine, developing testing procedures, and integrating it with
                  the other subsystems, as well as concurrent development of
                  flightweight engines. After our first hot-fire, they will
                  continue conducting engineering tests and combustion research
                  using Borealis and subsequent engines.
                </Text>
                <Text {...teamDetailsStyle}>
                  {/*TODO: turquoise from 'novel research' to 'design for manufacturing'*/}
                  This subteam offers extensive experience in novel research,
                  parametric design, finite element analysis & computational
                  fluid dynamics, rapid prototyping, material science, industry
                  practices, computer aided design, design for manufacturing,
                  and much more.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            {/*PROPELLANT MANAGEMENT SECTION*/}
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <AccordionButton>
                <Box>
                  <Heading {...teamHeadingStyle}>
                    {/*TODO: make umar color idk*/}Propellant Management
                  </Heading>
                  <br />
                  <Text {...teamDetailsStyle} textAlign="left">
                    is responsible for the design, sourcing, assembly, and
                    testing of the propellant, pressurization, coolant, and test
                    stand systems.
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text {...teamDetailsStyle}>
                  {/*TODO: bold up until 'test stand systems'*/}Using extensive
                  research, calculations, and hands-on experience, the PM
                  subteam develops all the hardware used to directly support the
                  engine. A robust and failsafe propellant system and other
                  supporting ground infrastructure are absolutely critical to
                  the safe and successful operation of Borealis and all
                  subsequent engines.
                </Text>
                <br />
                <Text {...teamDetailsStyle}>
                  Currently, the PM subteam is working on assembly, testing, and
                  integration of the propellant system, propellant stand, and
                  thrust stand. This subteam will be developing flightweight
                  propellant systems after Borealis, using self-pressurizing
                  supercharged nitrous oxide and common bulkhead tanks, as well
                  as potentially cryogenic propellant systems for kerolox. They
                  will also work closely with the future aerostructures team to
                  develop structural tanks.
                </Text>
                <br />
                <Text {...teamDetailsStyle}>
                  {/*TODO: turquoise from 'industry practices' to 'tool use'*/}
                  This subteam offers extensive experience in industry
                  practices, hydraulic & pneumatic systems, aerospace valves &
                  actuators, finite element analysis & computational fluid
                  dynamics, pressurized systems & procedure, tool use, and much
                  more.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            {/*TRANSFER & CONTROL SECTION*/}
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <AccordionButton>
                <Box>
                  <Heading {...teamHeadingStyle}>
                    {/*TODO: make umar color idk*/}Transfer & Control
                  </Heading>
                  <Text {...teamDetailsStyle} textAlign="left">
                    is responsible for the development, sourcing, integration,
                    and testing of data acquisition, telemetry, control, and
                    communication systems.
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text {...teamDetailsStyle}>
                  {/*TODO: bold from 'is responsible' to 'communication systems'*/}
                  Working alongside CD and PM, the T&C subteam designs all of
                  the extensive electrical hardware and software systems needed
                  for Borealis and future engines. A liquid rocket engine is an
                  extremely complex system requiring accurate and reliable
                  control of ignitors, valves, actuators, and telemetry to
                  safely and reliably operate. As the Borealis is an
                  instrumentation engine that will continue to be used for
                  research, the necessity for high-quality data collection makes
                  the T&C subteam even more critical.
                </Text>
                <br />
                <Text {...teamDetailsStyle}>
                  Currently, the T&C subteam is sourcing, integrating, and
                  testing the data collection, control, and communication
                  systems for our various tests leading up to the hot-fire. This
                  subteam will be developing flightweight and
                  avionics-integrated control systems after Borealis.
                </Text>
                <br />
                <Text {...teamDetailsStyle}>
                  {/*TODO: turqouise from 'scientific data acquisition' to 'physical and radio communications'*/}
                  This subteam offers extensive experience in scientific data
                  acquisition, signal processing, sensor systems, aerospace
                  hardware integration, industry communication standards,
                  real-time control & telemetry, mission-critical systems,
                  circuit & PCB design, physical & radio communications, and
                  much more.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <AccordionButton>
                <Box>
                  <Heading {...teamHeadingStyle}>
                    {/*TODO: make umar color idk*/}Safety
                  </Heading>
                  <br />
                  <Text {...teamDetailsStyle} textAlign="left">
                    is responsible for risk assessment, documentation,
                    cybersecurity, legal & controlled goods compliance, as well
                    as training & supervision of our members on equipment,
                    procedure, radio communications, first aid, and more.
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text {...teamDetailsStyle}>
                  {/*TODO: bold from start to 'first aid, and more.' */}The
                  goals of this subteam are straightforward, but the tasks to
                  accomplish them are expansive and ever-changing. Rocketry is a
                  field with very high risks, and the Safety subteam is
                  essential to minimize those risks and ensure MACH’s continual
                  operation and compliance with industry standards.
                </Text>
                <br />
                <Text {...teamDetailsStyle}>
                  Currently, the Safety subteam is heavily involved in creating
                  documentation, procedure, risk assessment, and training for
                  our upcoming tests, as well as procuring the necessary
                  protective and communications equipment to carry them out.
                  This team will continue ensuring our flawless safety record
                  for the Borealis and all future projects.
                </Text>
                <br />
                <Text {...teamDetailsStyle}>
                  {/*TODO: turquoise from 'data modeling' to 'radio operations,'*/}
                  This subteam offers extensive experience in industry standard
                  practices & tools in data modeling, risk management, standard
                  operating procedures, logistics management, legal & CGP
                  compliance, cybersecurity, first aid training, radio
                  operations, and much more.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <AccordionButton>
                <Box>
                  <Heading {...teamHeadingStyle}>
                    {/*TODO: make umar color idk*/}Business Development
                  </Heading>
                  <br />
                  <Text {...teamDetailsStyle} textAlign="left">
                    is responsible for fundraising, finance, sponsorships,
                    advisors, recruitment, outreach, legal compliance, and
                    external relations for the team.
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text {...teamDetailsStyle}>
                  {/*TODO: bold from start to 'external relations for the team.'*/}{" "}
                  Rocketry is an extremely costly endeavor in time, money, and
                  talent without immediate potential for profit. The BizDev
                  subteam is indispensable to ensure MACH has the financial,
                  technical, and intellectual support we need to become one of
                  the few student teams and companies to develop a liquid rocket
                  engine.
                </Text>
                <br />
                <Text {...teamDetailsStyle}>
                  Currently, the BizDev team is recruiting and onboarding new
                  members, securing funding and sponsorships, and overhauling
                  our online presence, as well as developing industry
                  connections to support our other subteams. They will also work
                  with the technical subteams to determine our best options for
                  aerostructure integration and future engines.
                </Text>
                <br />
                <Text {...teamDetailsStyle}>
                  {/*TODO: turqoise from 'project management' to 'research applications'*/}
                  This subteam offers extensive experience in project
                  management, technical communication, financial management,
                  public outreach, startup fundraising, legal compliance,
                  research applications, and much more.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/*JOIN US SECTION*/}
          <br />
          <Heading {...headingStyle} fontSize="40px">
            Join Us
          </Heading>
          <Text {...introStyleSecond}>
            {/*TODO: Link for contact and FAQ*/}
            If what we’re doing sounds awesome and you’d like to join MACH,
            please reach out to us through the contact form. Please also check
            out our FAQ to learn more about what we’re doing and what to expect
            as part of the team.
          </Text>
          <Box bg="#19232e" borderRadius="lg">
            <Box m="1%">
              <Text {...teamDetailsStyle}>
                Please note that our general recruitment cycle is currently
                closed. However, we are still open to select new members who
                meet any of the following prerequisites:
              </Text>
              <List>
                <ListItem {...listItemStyle}>
                  <ListIcon as={FaRocket} color="turquoise" />
                  Senior-year or graduate engineering students, particularly
                  those specializing in avionics and CFD
                </ListItem>
                <ListItem {...listItemStyle}>
                  <ListIcon as={FaRocket} color="turquoise" />
                  Computer science students with experience in [??]
                </ListItem>
                <ListItem {...listItemStyle}>
                  <ListIcon as={FaRocket} color="turquoise" />
                  Webdevs so our webdevs can stop doing webdev
                </ListItem>
                <ListItem {...listItemStyle}>
                  <ListIcon as={FaRocket} color="turquoise" />
                  Safety & bizdev pls
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Center>
      <SocialsFooter />
    </>
  );
}
