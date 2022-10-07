import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

import CopyrightFooter from "@/components/copyrightFooter";
import LeadCard from "@/components/leadCard";
import Navbar from "@/components/navbar";
import SocialsFooter from "@/components/socialsFooter";
import WIPBanner from "@/components/wipBanner";
import Header from "@/config";
import {
  b1Style,
  b2Style,
  bgStyle,
  em1Style,
  h1Style,
  h2Style,
  h3Style,
  linkStyle,
  liStyle,
  p1Style,
  p2Style,
} from "@/styles";

export default function Team() {
  return (
    <>
      <Header title="MACH :: Our Team" />
      <Box {...bgStyle} bg="black" />
      <WIPBanner />
      <Navbar />
      <Center>
        <Box w="64vw">
          <Heading {...h1Style}>Our Team</Heading>
          <br />
          <Text {...p1Style}>
            MACH is divided into five subteams. Our technical subteams are{" "}
            <br />
            <Text {...em1Style}>Combustion Dynamics</Text>,{" "}
            <Text {...em1Style}>Propellant Management</Text>, and{" "}
            <Text {...em1Style}>Transfer &amp; Control</Text>, supported by the{" "}
            <Text {...em1Style}>Safety</Text> and{" "}
            <Text {...em1Style}>Business Development</Text> subteams.
          </Text>
          <Text {...p1Style}>
            <br />
          </Text>
          <Text {...p1Style}>
            Our projects would be impossible without all our subteams working
            together, and each one offers unique and invaluable experiences for
            our members.
          </Text>
          <br />
          <Text {...p2Style}>
            From a tiny group of students with a big project, we&rsquo;ve grown
            to a team of <Text {...b1Style}>over 70 active members</Text>. Not
            only do we have a large number of engineering students of every
            specialization, members from unexpected disciplines and outside of
            TMU have also joined us along the way.
          </Text>
          <Text {...p2Style} {...b1Style}>
            Through early mornings, sleepless nights, and every heavily
            caffeinated moment in between,{" "}
            <Text {...b2Style}>
              a common passion for rocketry has become so much more
            </Text>{" "}
            for everyone at MACH.
          </Text>
          <Text {...p2Style}>
            <br />
          </Text>
          <Heading
            {...h2Style}
            bgGradient="linear(to-r, cyan.300 0%, yellow.500 25%)"
            bgClip="text"
          >
            Team Leads
          </Heading>
          <Text {...p2Style}>
            <br />
          </Text>
          <SimpleGrid minChildWidth="300px" spacing="20px">
            <LeadCard name="Umar Shabbir" pos="Team Director">
              As a 4th year aerospace engineering student and MACH&rsquo;s team
              director, Umar is a project manager in training during his
              undergrad has been lucky enough to work alongside leading industry
              professionals in the world of rocketry! Besides a love for
              anything combustible, he also loves photography, weird foods, and
              fat cats.
            </LeadCard>
            <LeadCard name="Yiwei Luo" pos="Combustion Dynamics Lead">
              A 4th year aerospace engineering student, lifelong enthusiast of
              anything that flies, and a Combustion Dynamics lead for the MACH
              design team. He has far too many hobbies and not enough time, but
              tries to make some stuff and write some stuff.
            </LeadCard>
            <LeadCard name="Orion Moore" pos="Combustion Dynamics Lead">
              Orion is a Mechanical Engineering Graduate currently working at
              Honda. He&rsquo;s been with MACH from the beginning and currently
              serves as a design consultant for the team. He specializes in
              parametric design of rocket engine combustion chambers, injectors
              and cooling systems. He&rsquo;s also an avid movie buff, and
              he&rsquo;s trying to teach himself how to draw and write.
            </LeadCard>
            <LeadCard name="William Pirie" pos="Combustion Dynamics Lead">
              Will is a 3rd year aerospace engineering student currently on an
              engineering co-op. While by and large interested in the world of
              science, he has leaned heavily toward the field of rocket
              propulsion. He works full-time assembling state-of-the-art solid
              rocket engines and balances the rest of the time between MACH
              (designing liquid rocket engines), and at Launch Canada
              (developing parts for other liquid rocket engines). Outside of
              aerospace, he is also a synthesist/composer of electronic music
              and has a long lasting passion for creating fine art photography.
              He has a tendency to find new things that capture his interest,
              and will always go down the rabbit hole to know more.
            </LeadCard>
            <LeadCard name="Shivesh Maraj" pos="Propellant Management Lead">
              Shivesh is a 3rd year aerospace engineering student and one of the
              current propellant management leads for MACH. In addition to his
              interests in space exploration and rocketry, Shivesh is an avid
              golfer and a self-proclaimed amateur DJ.
            </LeadCard>
            <LeadCard name="Ahad Razak" pos="Propellant Management Lead">
              Ahad is a 3rd year Aerospace student. He&rsquo;s one of the leads
              for MACHs Propellant management subteam, working on building the
              propellant delivery system. His interests include cooking, reading
              comics, and working out.
            </LeadCard>
            <LeadCard
              name="Georgia Jovanovic"
              pos="Transfer &amp; Control Hardware Lead"
            >
              Georgia is a 5th year electrical engineering student set to
              graduate in April 2023. She is the transfer and control (hardware)
              lead for MACH with a keen interest in circuits and communication
              systems. Along with her passion for rocketry she enjoys sailing
              and a few other unconventional hobbies!
            </LeadCard>
            <LeadCard name="Jack Sinclair" pos="Safety Lead">
              Jack is a 1st year Aerospace Engineering student. He is
              MACH&rsquo;s Safety Officer and is working on MACH&rsquo;s Risk
              Assessments & Risk Modeling, Radio Communications Network, Joint
              health and Safety Committee, and Cybersecurity. His interests are
              gaming, space exploration and habitats, and videos of raccoons
              eating.
            </LeadCard>
            <LeadCard name="Laxan Puveendran" pos="Finance Lead">
              Laxan is a 3rd year industrial engineering student. He&rsquo;s the
              finance lead for MACH, who&rsquo;s worked on creating the team
              budget and processing cheque reimbursements for team members. His
              interests include playing soccer, gaming, and watching movies.
            </LeadCard>
          </SimpleGrid>
          <br />
          <Heading
            {...h2Style}
            bgGradient="linear(to-r, cyan.300 0%, yellow.500 25%)"
            bgClip="text"
          >
            Subteams
          </Heading>
          <br />
          <Text {...p2Style}>
            The development of the Borealis has been an incredible and ongoing
            journey for all of us. Every subteam offers{" "}
            <Text {...b1Style}>
              experiential learning, industry knowledge, professional
              connections, and countless other{" "}
              <Text {...b2Style}>
                opportunities and experiences we&rsquo;ve never found in our
                classes, internships, or any other team
              </Text>
            </Text>
            .
          </Text>
          <Accordion allowMultiple defaultIndex={[-1]}>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <AccordionButton>
                <Box>
                  <Heading
                    {...h3Style}
                    bgGradient="linear(to-r, cyan.300 0%, orange.50 25%)"
                    bgClip="text"
                  >
                    Combustion Dynamics
                  </Heading>
                  <Text
                    {...p2Style}
                    mr="4vw"
                    fontWeight="bold"
                    textAlign="left"
                  >
                    is responsible for the design, iteration, manufacturing, and
                    testing of the combustion chamber, nozzle, injector, and
                    cooling system for Borealis and future engines.
                  </Text>
                </Box>
                <AccordionIcon color="teal.300" />
              </AccordionButton>
              <AccordionPanel>
                <Text {...p2Style}>
                  {/*TODO: bold up until 'future engines'*/}Using calculations,
                  published references, and simulations, the Borealis was
                  meticulously designed, then redesigned, and redesigned, and
                  redesigned&hellip; until it became the engine we have now.
                </Text>
                <Text {...p2Style}>
                  Currently, the CD subteam is working on manufacturing the
                  engine, developing testing procedures, and integrating it with
                  the other subsystems, as well as concurrent development of
                  flightweight engines. After our first hot-fire, they will
                  continue conducting engineering tests and combustion research
                  using Borealis and subsequent engines.
                </Text>
                <Text {...p2Style}>
                  {/*TODO: turquoise from 'novel research' to 'design for manufacturing'*/}
                  This subteam offers extensive experience in{" "}
                  <Text {...em1Style}>
                    novel research, parametric design, finite element analysis &
                    computational fluid dynamics, rapid prototyping, material
                    science, industry practices, computer aided design, design
                    for manufacturing
                  </Text>
                  , and much more.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <AccordionButton>
                <Box>
                  <Heading
                    {...h3Style}
                    bgGradient="linear(to-r, cyan.300 0%, blue.400 25%)"
                    bgClip="text"
                  >
                    Propellant Management
                  </Heading>
                  <Text
                    {...p2Style}
                    mr="4vw"
                    fontWeight="bold"
                    textAlign="left"
                  >
                    is responsible for the design, sourcing, assembly, and
                    testing of the propellant, pressurization, coolant, and test
                    stand systems.
                  </Text>
                </Box>
                <AccordionIcon color="teal.300" />
              </AccordionButton>
              <AccordionPanel>
                <Text {...p2Style}>
                  Using extensive research, calculations, and hands-on
                  experience, the PM subteam develops all the hardware used to
                  directly support the engine. A robust and failsafe propellant
                  system and other supporting ground infrastructure are
                  absolutely critical to the safe and successful operation of
                  Borealis and all subsequent engines.
                </Text>
                <Text {...p2Style}>
                  Currently, the PM subteam is working on assembly, testing, and
                  integration of the propellant system, propellant stand, and
                  thrust stand. This subteam will be developing flightweight
                  propellant systems after Borealis, using self-pressurizing
                  supercharged nitrous oxide and common bulkhead tanks, as well
                  as potentially cryogenic propellant systems for kerolox. They
                  will also work closely with the future aerostructures team to
                  develop structural tanks.
                </Text>
                <Text {...p2Style}>
                  This subteam offers extensive experience in{" "}
                  <Text {...em1Style}>
                    industry practices, hydraulic &amp; pneumatic systems,
                    aerospace valves &amp; actuators, finite element analysis
                    &amp; computational fluid dynamics, pressurized systems
                    &amp; procedure, tool use
                  </Text>
                  , and much more.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <AccordionButton>
                <Box>
                  <Heading
                    {...h3Style}
                    bgGradient="linear(to-r, cyan.300 0%, orange.300 25%)"
                    bgClip="text"
                  >
                    Transfer &amp; Control
                  </Heading>
                  <Text
                    {...p2Style}
                    mr="4vw"
                    fontWeight="bold"
                    textAlign="left"
                  >
                    is responsible for the development, sourcing, integration,
                    and testing of data acquisition, telemetry, control, and
                    communication systems.
                  </Text>
                </Box>
                <AccordionIcon color="teal.300" />
              </AccordionButton>
              <AccordionPanel>
                <Text {...p2Style}>
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
                <Text {...p2Style}>
                  Currently, the T&C subteam is sourcing, integrating, and
                  testing the data collection, control, and communication
                  systems for our various tests leading up to the hot-fire. This
                  subteam will be developing flightweight and
                  avionics-integrated control systems after Borealis.
                </Text>
                <Text {...p2Style}>
                  This subteam offers extensive experience in{" "}
                  <Text {...em1Style}>
                    scientific data acquisition, signal processing, sensor
                    systems, aerospace hardware integration, industry
                    communication standards, real-time control &amp; telemetry,
                    mission-critical systems, circuit &amp; PCB design, physical
                    &amp; radio communications
                  </Text>
                  , and much more.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <AccordionButton>
                <Box>
                  <Heading
                    {...h3Style}
                    bgGradient="linear(to-r, cyan.300 0%, red.500 7.5%)"
                    bgClip="text"
                  >
                    Safety
                  </Heading>
                  <Text
                    {...p2Style}
                    mr="4vw"
                    fontWeight="bold"
                    textAlign="left"
                  >
                    is responsible for risk assessment, documentation,
                    cybersecurity, legal &amp; controlled goods compliance, as
                    well as training &amp; supervision of our members on
                    equipment, procedure, radio communications, first aid, and
                    more.
                  </Text>
                </Box>
                <AccordionIcon color="teal.300" />
              </AccordionButton>
              <AccordionPanel>
                <Text {...p2Style}>
                  The goals of this subteam are straightforward, but the tasks
                  to accomplish them are expansive and ever-changing. Rocketry
                  is a field with very high risks, and the Safety subteam is
                  essential to minimize those risks and ensure MACH&rsquo;s
                  continual operation and compliance with international
                  standards.
                </Text>
                <Text {...p2Style}>
                  Currently, the Safety subteam is heavily involved in creating
                  documentation, procedure, risk assessment, and training for
                  our upcoming tests, as well as procuring the necessary
                  protective and communications equipment to carry them out.
                  This team will continue ensuring our flawless safety record
                  for the Borealis and all future projects.
                </Text>
                <Text {...p2Style}>
                  This subteam offers extensive experience in industry standard
                  practices &amp; tools in{" "}
                  <Text {...em1Style}>
                    risk management, reliability modeling, standard operating
                    procedures, logistics management, legal &amp; CGP
                    compliance, cybersecurity, first aid training, radio
                    operations
                  </Text>
                  , and much more.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <AccordionButton>
                <Box>
                  <Heading
                    {...h3Style}
                    bgGradient="linear(to-r, cyan.300 0%, green.300 25%)"
                    bgClip="text"
                  >
                    Business Development
                  </Heading>
                  <Text
                    {...p2Style}
                    mr="4vw"
                    fontWeight="bold"
                    textAlign="left"
                  >
                    is responsible for fundraising, finance, sponsorships,
                    advisors, recruitment, outreach, legal compliance, and
                    external relations for the team.
                  </Text>
                </Box>
              </AccordionButton>
              <AccordionPanel>
                <Text {...p2Style}>
                  Rocketry is an extremely costly endeavor in time, money, and
                  talent without immediate potential for profit. The BizDev
                  subteam is indispensable to ensure MACH has the financial,
                  technical, and intellectual support we need to become one of
                  the few student teams and companies to develop a liquid rocket
                  engine.
                </Text>
                <Text {...p2Style}>
                  Currently, the BizDev team is recruiting and onboarding new
                  members, securing funding and sponsorships, and overhauling
                  our online presence, as well as developing industry
                  connections to support our other subteams. They will also work
                  with the technical subteams to determine our best options for
                  aerostructure integration and future engines.
                </Text>
                <Text {...p2Style}>
                  This subteam offers extensive experience in{" "}
                  <Text {...em1Style}>
                    project management, technical communication, financial
                    management, public outreach, startup fundraising, legal
                    compliance, research applications
                  </Text>
                  , and much more.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/*JOIN US SECTION*/}
          <Heading {...h1Style} fontSize="3xl">
            Join Us
          </Heading>
          <br />
          <Text {...p2Style}>
            If what we&rsquo;re doing sounds awesome and you&rsquo;d like to
            join MACH, please reach out to us through the{" "}
            <Link {...linkStyle} href="/mach-website/contact">
              contact
            </Link>{" "}
            form.
          </Text>
          <Text {...p2Style}>
            Please also check out our{" "}
            <Link {...linkStyle} href="/mach-website/faq">
              FAQ
            </Link>{" "}
            to learn more about what we&rsquo;re doing and what to expect as
            part of the team.
          </Text>
          <Box bg="gray.900" borderRadius="lg">
            <Box m="1%">
              <Text {...p2Style}>
                Please note that our general recruitment cycle is currently
                closed. However, we are still open to recruiting select new
                members who meet any of the following prerequisites:
              </Text>
              <List>
                <ListItem {...liStyle}>
                  <ListIcon as={FaRocket} color="teal.300" />
                  Senior-year or graduate engineering or computer science
                  students
                </ListItem>
                <ListItem {...liStyle} ml="2.5%">
                  <ListIcon as={FaRocket} color="teal.300" />
                  Preferred specialization in avionics and/or CFD
                </ListItem>
                <ListItem {...liStyle}>
                  <ListIcon as={FaRocket} color="teal.300" />
                  Students with experience in Web development
                </ListItem>
                <ListItem {...liStyle} ml="2.5%">
                  <ListIcon as={FaRocket} color="teal.300" />
                  Preferred specialization in UI/UX design and/or Next.js
                </ListItem>
                <ListItem {...liStyle}>
                  <ListIcon as={FaRocket} color="teal.300" />
                  Students with an interest in Business Development
                </ListItem>
                <ListItem {...liStyle} ml="2.5%">
                  <ListIcon as={FaRocket} color="teal.300" />
                  e.g. Social media marketing, graphic design, sponsorship
                  outreach, external communications, etc.
                </ListItem>
                <ListItem {...liStyle}>
                  <ListIcon as={FaRocket} color="teal.300" />
                  Students interested in helping MACH with our safety
                  procedures, guidelines, and documentation
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Center>
      <SocialsFooter />
      <CopyrightFooter />
    </>
  );
}
