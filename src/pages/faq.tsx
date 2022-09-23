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
  Link,
  LinkProps,
  Text,
  TextProps,
} from "@chakra-ui/react";

import Navbar from "@/components/navbar";
import SocialsFooter from "@/components/socialsFooter";
import Header from "@/config";
import { bgStyle } from "@/styles";

const headingStyle: HeadingProps = {
  bgClip: "text",
  bgGradient: "linear(to-r, cyan.300, yellow.500)",
  fontFamily: "Inter, sans-serif",
  fontSize: "5xl",
  fontWeight: 700,
};

const introStyleFirst: TextProps = {
  color: "gray.100",
  fontFamily: "Inter, sans-serif",
  fontSize: "3xl",
  lineHeight: "200%",
};

const introStyleSecond: TextProps = {
  color: "gray.100",
  fontFamily: "Inter, sans-serif",
  fontSize: "xl",
  lineHeight: "200%",
};

const linkStyle: LinkProps = {
  color: "purple.400",
  fontFamily: "Inter, sans-serif",
  fontSize: "xl",
  fontWeight: 700,
};

const questionStyle: TextProps = {
  color: "gray.100",
  fontFamily: "Inter, sans-serif",
  fontSize: "2xl",
  fontWeight: 700,
  flex: 1,
  textAlign: "left",
};

const answerStyle: TextProps = {
  color: "gray.100",
  fontFamily: "Inter, sans-serif",
  fontSize: "xl",
  lineHeight: "200%",
};

export default function FAQ() {
  return (
    <>
      <Header title="MACH :: FAQ" />
      <Box {...bgStyle} bg="black" />
      <Navbar />
      <Center>
        <Box w="56vw">
          <Heading {...headingStyle}>Frequently Asked Questions</Heading>
          <br />
          <Text {...introStyleFirst}>
            Rockets are complicated. It took us a very long time to learn what
            we have, and we are constantly learning more. We&rsquo;ve collected
            some questions we&rsquo;ve received from varying levels of technical
            background, and hopefully this will answer some of your questions
            too!
          </Text>
          <br />
          <Text {...introStyleSecond}>
            We&rsquo;ve tried our best to make these answers concise yet
            accurate, but rockets are complicated. If we&rsquo;ve simplified too
            much or got too technical, or you have more questions that we
            haven&rsquo;t addressed here, please feel free to{" "}
            <Link {...linkStyle} href="/mach-website/contact">
              contact us
            </Link>
            ; we&rsquo;re always happy to talk about rockets.
          </Text>
          <br />
          <Accordion allowMultiple defaultIndex={[0]}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Text {...questionStyle}>
                    What is a liquid rocket? What makes it different?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text {...answerStyle}>
                  Rocket engines can be liquid, solid, or hybrid depending on
                  the type of propellants used. Solid rocket motors typically
                  use relatively stable fuel and oxidizers mixed with a binder.
                  Once ignited, the combustion occurs within a cavity through
                  the center of the propellant grains, and the exhaust products
                  exit through a nozzle at the end of the motor. Though simple
                  to manufacture and use, they cannot be throttled, shut off, or
                  reignited. The majority of hobby and student rocketry teams
                  use premade off-the-shelf solid motors for propulsion.
                </Text>
                <Text {...answerStyle}>
                  Liquid engines, straightforwardly, store their fuel and
                  oxidizer in liquid form. In addition to the control not
                  possible in solid motors, these engines can achieve much
                  higher efficiency due to the propellants available, better
                  mixing, and lack of inert binder. As a tradeoff, they are much
                  more complex to develop and operate. The majority of orbital
                  launch vehicles like the Saturn V, Space Shuttle, Falcon 9,
                  and Electron are largely or completely liquid-fueled.
                </Text>
                <Text {...answerStyle}>
                  Hybrid is another type of rocket engine which typically uses
                  solid fuel grains with a liquid oxidizer. There are a variety
                  of approaches to these systems, but in general they combine
                  various advantages and disadvantages of both solid and liquid
                  engines.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Text {...questionStyle}>
                    What is a &ldquo;bipropellant&rdquo; liquid engine?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text {...answerStyle}>
                  Over decades of rocketry, many thousands of combinations of
                  fuels and oxidizers in various forms have been tested, some of
                  them successfully. Bipropellants are a broad categorization of
                  separately stored liquid fuel and oxidizers that are mixed and
                  ignited upon injection into the combustion chamber. There are
                  other classes and subclasses of liquid propellants like
                  monopropellants and hypergolics, but bipropellant engines
                  offer an excellent balance of performance, control, and
                  safety, and are the standard for high-powered liquid rockets.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Text {...questionStyle}>
                    What does &ldquo;pressure-fed&rdquo; mean, and why does
                    Borealis use it?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...answerStyle}>
                  Like any engine, a liquid rocket requires a consistent and
                  controllable flow of fuel and oxidizer to function. Because
                  the chamber pressures in a rocket are extremely high, any
                  backflow of combustion gasses into the propellant would yield
                  undesirable consequences. Hence, a high-pressure,
                  high-flow-rate, and high-reliability propellant feed system is
                  required. The two most common methods of achieving this are
                  &ldquo;pressure-fed&rdquo; and &ldquo;pump-fed&rdquo;. The
                  former uses a highly pressurized tank of inert gas like
                  nitrogen to force the propellants into the injector. The
                  latter uses a turbopump instead, which is much lighter than a
                  pressurization tank, but also much more complex.
                </Text>
                <Text {...answerStyle}>
                  The Borealis currently uses a pressure-fed system for its
                  relative simplicity and reliability, but we are actively
                  exploring self-pressurizing supercharged nitrous oxide for our
                  flightweight system, as well as electric turbopumps for longer
                  term projects.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Text {...questionStyle}>
                    What is &ldquo;flightweight&rdquo;? Why isn&rsquo;t
                    Borealis?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...answerStyle}>
                  Borealis was designed as a static test engine, this means it
                  was never meant to be integrated into an airframe and flown.
                  This can be seen in design elements such as the heavy cooling
                  system, propellant tanks, and control computers.
                  &ldquo;Flightweight&rdquo; refers to an engine, propellant,
                  and control system designed with the weight and space
                  constraints of a vehicle, in our case - a sounding rocket. Our
                  first engine and propellant system designs were ambitiously
                  flightweight, but we very quickly realized the scope of
                  difficulty, time, and cost required for the development of
                  liquid rockets. The Borealis was a refocusing of efforts to be
                  more grounded, intended both technically and procedurally to
                  pave the way for our following engines to fly.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Text {...questionStyle}>
                    What do you hope to learn from Borealis?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...answerStyle}>
                  The primary technical goal of the Borealis engine is to
                  collect high quality combustion data. This data will be used
                  to validate and improve our design methodology and conduct
                  research on the relatively little-explored combustion of
                  ethanol-nitrous oxide rockets. The first hot-fire of the
                  Borealis is a huge milestone for us, but only the beginning.
                  The Borealis is reusable and modular, allowing us to prototype
                  various injector and coolant system designs for future
                  engines, as well as the effects of different propellant flow
                  rates and ratios.
                </Text>
                <Text {...answerStyle}>
                  Perhaps more importantly, through the development and
                  construction of our first engine and supporting systems, our
                  team has gained an incredible amount of experience. This
                  invaluable knowledge of engine, coolant, propellant,
                  telemetry, and control system design will allow MACH to take
                  on even bigger projects, and give our members an incredible
                  head start to their engineering careers.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Text {...questionStyle}>
                    What&rsquo;s the plan for your next engine?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...answerStyle}>
                  Our first flightweight engine and propellant system is
                  currently in the design phase. We are planning a carbon
                  phenolic ablative engine, coupled with structural stacked
                  ethanol and self-pressurized supercharged nitrous oxide tanks.
                  The airframe integration will be a collaborative project with
                  an established solid rocketry team experienced in
                  aerostructures and avionics. Another serious consideration for
                  our team is a regeneratively cooled Kerolox engine, depending
                  on budget and administrative approval.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Text {...questionStyle}>
                    What are your long-term plans after that?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...answerStyle}>
                  Liquid rocket engines can achieve horrendous levels of
                  complexity, so a successful flight test is only the beginning
                  of our journey. Long-term projects of varying ambitions are
                  under consideration, such as spaceshot (a rocket which reaches
                  over 100 km of altitude), throttle control, in-flight
                  reignition, propulsive landing, and many more. With rapid
                  ongoing innovations in rocket technology and accessible
                  manufacturing, MACH will never stop aiming higher.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Text {...questionStyle}>
                    What fuel and oxidizer does Borealis use?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...answerStyle}>
                  The Borealis engine uses ethanol as the fuel and nitrous oxide
                  as the oxidizer; we&rsquo;ve been calling this relatively
                  uncommon combination &ldquo;EthaNOS&rdquo; for short. Our
                  choice in propellants for Borealis was initially informed by
                  our total inexperience at the time and budget limitations.
                  Although ethanol and nitrous oxide have significant
                  performance disadvantages, they are some of the safest
                  propellants to handle (by the standards of rocketry). Our top
                  priority is the safety of our members, which was the primary
                  rationale behind our propellant choice. After the procedural
                  and hands-on experience gained through a number of cold-flow
                  and hot-fire tests with both inert and live propellants, we
                  are confident in seeking approval for more conventional
                  propellant combinations like Kerolox.
                </Text>
                <Text {...answerStyle}>
                  During the research phase of our engine design, we realized
                  that a relatively miniscule amount of research has been
                  published on ethanol and nitrous oxide rocket engines.
                  Although this resulted in less references to draw upon, it
                  also represented an opportunity to do combustion research and
                  explore completely new flightweight system designs. After
                  publishing a paper on our design methodology, we intend to
                  follow it up with more novel research using experimental data
                  collected during our hot-fires, as well as even more new
                  research on injector designs, chamber cooling, propellant
                  ratios, and much more. Our progress so far has led us to
                  believe that there is real potential for low-cost liquid
                  rocket propulsion using these propellants, such as the
                  self-pressurization capabilities of nitrous oxide and
                  excellent cooling potential of ethanol.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Text {...questionStyle}>Why is water used as coolant?</Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...answerStyle}>
                  A counterintuitive quirk of rocket engines is the scalability
                  of cooling systems. Because combustion temperature is
                  dependent on the propellant combination, a larger engine
                  spreads the heat load across a much larger surface area,
                  resulting in easier cooling. Water is one of the best coolants
                  available, and we are confident it will provide a very large
                  margin of safety for our first hot-fire test. As Borealis is a
                  static instrumentation engine, the weight penalty of an
                  external cooling system was not a factor for us. Our thin
                  chamber walls will also allow us to collect the best
                  combustion data possible compared to alternative methods like
                  heatsink engines.
                </Text>
                <Text {...answerStyle}>
                  From the beginning, our coolant system was also designed to
                  withstand very high pressures and ethanol flow. After our
                  initial hot-fire, we will use Borealis to conduct extensive
                  regenerative cooling tests by using various ethanol-water
                  mixtures and flow rates. The results of this testing will be
                  the topic of another research paper as well as inform the
                  viability of a flightweight regenerative ethanol-nitrous oxide
                  liquid rocket.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Text {...questionStyle}>
                    What tests are planned before the hot-fire?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...answerStyle}>
                  As excited as we are to begin hot-fire testing of the
                  Borealis, it is even more important that we do so safely and
                  collect useful data out of our testing. As a result, our
                  testing schedule is heavily informed by industry standard
                  rocket engine development. Beginning with a hydrostatic test
                  to validate the structural design of our parts, we will move
                  on to cold-flow testing with inert propellant stand-ins. After
                  these initial tests, we will conduct a series of additional
                  flow tests for fine-tuning our injector, propellant, and
                  ignitor systems. In addition to these comprehensive tests, we
                  will conduct various system-level experiments to validate
                  transducer thermal isolation, cavitating venturi design,
                  sensor data acquisition, and so much more. This is a packed
                  testing schedule but we are confident that our team can pull
                  it off to ensure a safe and nominal hot-fire test in the
                  summer of 2023.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Text {...questionStyle}>
                    What prerequisite knowledge do I need to join MACH?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...answerStyle}>
                  Many of our members have become integral parts of our team
                  without prior academic knowledge. Although material from STEM
                  courses will give you a head start, much of what we&rsquo;re
                  doing is self-taught experientially-learned. With enough
                  interest and dedication, anyone can contribute to the team on
                  our many varied tasks. Additionally, we have non-technical
                  subteams that are just as important and do not require any
                  in-depth technical knowledge, they are also a great way to
                  start and learn more about the technical subteams if you want
                  to join them down the line.
                </Text>
                <Text {...answerStyle}>
                  That said, onboarding is a lengthy process for us to catch new
                  members up on the details of what we&rsquo;re doing. As a
                  result, our general recruitment isn&rsquo;t open year-round,
                  please see the{" "}
                  <Link {...linkStyle} href="/mach-website/team">
                    Team page
                  </Link>{" "}
                  for current recruitment status.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Text {...questionStyle}>
                    How much time commitment should I expect if I want to join?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...answerStyle}>
                  Each week, each subteam conducts 1-hour meetings during the
                  weekdays; we also host 2-hour general meetings with all
                  subteams every weekend. Additionally, team members are
                  expected to work on their tasks for several hours outside of
                  the weekly meeting times. Setting up meetings with smaller
                  task groups within or across subteams is highly encouraged and
                  facilitated on our communications platforms.
                </Text>
                <Text {...answerStyle}>
                  As a student design team, we completely understand that our
                  members get busy with exams, projects, and life in general.{" "}
                  <Text as="span" {...answerStyle} fontWeight={700}>
                    The most important thing is letting us know if you need some
                    time away from the team so we can redistribute tasks and
                    still meet our deadlines.
                  </Text>{" "}
                  We realize how difficult university can be, and no effort put
                  into our team goes unappreciated.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Text {...questionStyle}>
                    Can I contribute to the team virtually?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...answerStyle}>
                  While we try to accommodate virtual attendance for members who
                  cannot physically attend any specific meeting, we highly
                  encourage all members to join our in-person sessions. As we
                  are currently in the manufacturing, assembly, and integration
                  phase, being in our workspace is absolutely critical. The
                  pandemic was one of the most difficult times for our team, and
                  the momentum we&rsquo;ve picked up since returning to campus
                  has been incredible.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Text {...questionStyle}>
                    I joined the team but took a break, can I rejoin?
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...answerStyle}>
                  {/*TODO: link to contact page*/}
                  As students ourselves, we totally understand if life gets in
                  the way sometimes. If you&rsquo;ve taken a break from the
                  team, but want to know what we&rsquo;re doing now and what you
                  can do to help, please reach out to the leads of the
                  subteam(s) you were on or are interested in or use the contact
                  form. We&rsquo;d be happy to catch you up and have you back on
                  the team.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Center>
      <SocialsFooter />
    </>
  );
}
