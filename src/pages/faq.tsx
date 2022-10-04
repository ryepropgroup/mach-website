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
  Text,
} from "@chakra-ui/react";

import Navbar from "@/components/navbar";
import SocialsFooter from "@/components/socialsFooter";
import Header from "@/config";
import {
  b1Style,
  b2Style,
  bgStyle,
  em2Style,
  h1Style,
  h3Style,
  linkStyle,
  p1Style,
  p2Style,
} from "@/styles";

export default function FAQ() {
  return (
    <>
      <Header title="MACH :: FAQ" />
      <Box {...bgStyle} bg="black" />
      <Navbar />
      <Center>
        <Box w="64vw">
          <Heading {...h1Style}>Frequently Asked Questions</Heading>
          <br />
          <Text {...p1Style}>
            <Text {...b1Style}>Rockets are complicated.</Text> It took us a very
            long time to learn what we have, and{" "}
            <Text {...b1Style}>we are constantly learning more.</Text>
          </Text>
          <br />
          <Text {...p1Style}>
            We&rsquo;ve collected some questions we&rsquo;ve received from
            varying levels of technical background, and hopefully this will
            answer some of your questions too!
          </Text>
          <br />
          <Text {...p2Style}>
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
          <Accordion allowMultiple defaultIndex={[-1]}>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h2>
                <AccordionButton>
                  <Text {...h3Style}>What is a rocket engine anyway?</Text>
                  <AccordionIcon color="teal.300" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text {...p2Style}>
                  A rocket engine is a type of combustion engine, burning fuel
                  with oxygen and using the resulting energy to achieve a
                  purpose.{" "}
                  <Text {...b1Style}>
                    Rockets carry not only fuel, but their own oxidizer as well.
                  </Text>{" "}
                  The high speed exhaust products are expelled through a nozzle,
                  propelling the rocket forward per Newton’s second law.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h2>
                <AccordionButton>
                  <Text {...h3Style}>
                    What is a liquid rocket? What makes it different?
                  </Text>
                  <AccordionIcon color="teal.300" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text {...p2Style}>
                  <Text {...b1Style}>
                    Rocket engines can be liquid, solid, or hybrid depending on
                    the type of propellants used
                  </Text>
                  . Solid rocket motors typically use relatively stable fuel and
                  oxidizers mixed with a binder. Once ignited, the combustion
                  occurs within a cavity through the center of the propellant
                  grains, and the exhaust products exit through a nozzle at the
                  end of the motor. Though simple to manufacture and use, they
                  cannot be throttled, shut off, or reignited.{" "}
                  <Text {...em2Style}>
                    The majority of hobby and student rocketry teams use premade
                    commercial off-the-shelf (COTS) solid motors for propulsion
                  </Text>
                  .
                </Text>
                <Text {...p2Style}>
                  By contrast,{" "}
                  <Text {...b1Style}>
                    liquid engines store their fuel and oxidizer in liquid form
                  </Text>
                  . In addition to the <Text {...b1Style}>control</Text> not
                  possible in solid motors, these engines can achieve much
                  higher efficiency due to the propellants available, better
                  mixing, and lack of inert binder. As a tradeoff, they are much
                  more complex to develop and operate.{" "}
                  <Text {...em2Style}>
                    The majority of orbital launch vehicles like the{" "}
                    <Text {...b1Style}>Saturn V</Text>,{" "}
                    <Text {...b1Style}>Space Shuttle</Text>,{" "}
                    <Text {...b1Style}>Falcon 9</Text>, and{" "}
                    <Text {...b1Style}>Electron</Text> are largely or completely
                    liquid-fueled
                  </Text>
                  .
                </Text>
                <Text {...p2Style}>
                  Hybrid is another type of rocket engine which typically uses
                  solid fuel grains with a liquid oxidizer. There are a variety
                  of approaches to these systems, but in general they combine
                  various advantages and disadvantages of both solid and liquid
                  engines.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h2>
                <AccordionButton>
                  <Text {...h3Style}>
                    What is a &ldquo;bipropellant&rdquo; liquid engine?
                  </Text>
                  <AccordionIcon color="teal.300" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text {...p2Style}>
                  Over decades of rocketry, many thousands of combinations of
                  fuels and oxidizers in various forms have been tested, some of
                  them successfully.{" "}
                  <Text {...b1Style}>
                    Bipropellants are a broad categorization of separately
                    stored liquid fuel and oxidizers that are mixed and ignited
                    upon injection into the combustion chamber
                  </Text>
                  . There are other classes and subclasses of liquid propellants
                  like monopropellants and hypergolics, but bipropellant engines
                  offer an excellent balance of performance, control, and
                  safety, and{" "}
                  <Text {...b1Style}>
                    are the standard for high-powered liquid rockets
                  </Text>
                  .
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h2>
                <AccordionButton>
                  <Text {...h3Style}>
                    What does &ldquo;pressure-fed&rdquo; mean, and why does
                    Borealis use it?
                  </Text>
                  <AccordionIcon color="teal.300" />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...p2Style}>
                  Like any engine, a liquid rocket requires a{" "}
                  <Text {...b1Style}>
                    consistent and controllable flow of fuel and oxidizer to
                    function
                  </Text>
                  . Because the chamber pressures in a rocket are extremely
                  high, any backflow of combustion gasses into the propellant
                  would yield undesirable consequences. Hence, a high-pressure,
                  high-flow-rate, and high-reliability propellant feed system is
                  required. The two most common methods of achieving this are
                  &ldquo;pressure-fed&rdquo; and &ldquo;pump-fed&rdquo;. The
                  former{" "}
                  <Text {...b1Style}>
                    uses a highly pressurized tank of inert gas like nitrogen to
                    force the propellants into the injector
                  </Text>
                  . The latter uses a turbopump instead, which is much lighter
                  than a pressurization tank, but also much more complex.
                </Text>
                <Text {...p2Style}>
                  The Borealis currently uses a pressure-fed system for its
                  relative simplicity and reliability, but we are actively
                  exploring self-pressurizing supercharged nitrous oxide for our
                  flightweight system, as well as electric turbopumps for longer
                  term projects.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h2>
                <AccordionButton>
                  <Text {...h3Style}>
                    What is &ldquo;flightweight&rdquo;? Why isn&rsquo;t
                    Borealis?
                  </Text>
                  <AccordionIcon color="teal.300" />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...p2Style}>
                  Borealis was designed as a static test engine, this means it
                  was never meant to be integrated into an airframe and flown.
                  This can be seen in design elements such as the heavy cooling
                  system, propellant tanks, and control computers.{" "}
                  <Text {...b1Style}>
                    &ldquo;Flightweight&rdquo; refers to an engine, propellant,
                    and control system designed with the weight and space
                    constraints of a vehicle
                  </Text>
                  , in our case - a sounding rocket. Our first engine and
                  propellant system designs were ambitiously flightweight, but
                  we very quickly realized the scope of difficulty, time, and
                  cost required for the development of liquid rockets. The
                  Borealis was a refocusing of efforts to be more grounded,
                  intended both technically and procedurally to pave the way for
                  our following engines to fly.
                </Text>
                <Text {...p2Style}>
                  Additionally,{" "}
                  <Text {...b1Style}>
                    a static engine allows us to add far more instrumentation
                    and their supporting hardware than a flightweight system
                  </Text>
                  , drastically improving the primary goal of a combustion
                  research engine.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <br />
          <Accordion allowMultiple defaultIndex={[-1]}>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h2>
                <AccordionButton>
                  <Text {...h3Style}>
                    What do you hope to learn from Borealis?
                  </Text>
                  <AccordionIcon color="teal.300" />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...p2Style}>
                  The primary technical goal of the Borealis engine is to{" "}
                  <Text {...b1Style}>collect high quality combustion data</Text>
                  . This data will be used to{" "}
                  <Text {...b1Style}>
                    validate and improve our design methodology
                  </Text>
                  , and{" "}
                  <Text {...b1Style}>
                    conduct research on the relatively little-explored
                    combustion of ethanol-nitrous oxide rockets
                  </Text>
                  . The first hot-fire of the Borealis is a huge milestone for
                  us, but only the beginning. The Borealis is reusable and
                  modular, allowing us to prototype various injector and coolant
                  system designs for future engines, as well as the effects of
                  different propellant flow rates and ratios.
                </Text>
                <Text {...p2Style}>
                  Perhaps more importantly, through the development and
                  construction of our first engine and supporting systems, our
                  team has gained{" "}
                  <Text {...b1Style}>an incredible amount of experience</Text>.
                  This invaluable knowledge of engine, coolant, propellant,
                  telemetry, and control system design will allow MACH to take
                  on even bigger projects, and give our members an incredible
                  head start to their engineering careers.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h2>
                <AccordionButton>
                  <Text {...h3Style}>
                    What&rsquo;s the plan for your next engine?
                  </Text>
                  <AccordionIcon color="teal.300" />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...p2Style}>
                  Our first flightweight engine and propellant system is
                  currently in the design phase.{" "}
                  <Text {...b1Style}>
                    We are planning a carbon phenolic ablative engine, coupled
                    with structural stacked ethanol and self-pressurized
                    supercharged nitrous oxide tanks
                  </Text>
                  . The airframe integration will be a collaborative project
                  with an established solid rocketry team experienced in
                  aerostructures and avionics. Another serious consideration for
                  our team is a regeneratively cooled Kerolox engine, depending
                  on budget and administrative approval.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h2>
                <AccordionButton>
                  <Text {...h3Style}>
                    What are your long-term plans after that?
                  </Text>
                  <AccordionIcon color="teal.300" />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...p2Style}>
                  Liquid rocket engines can achieve horrendous levels of
                  complexity, so a successful flight test is only the beginning
                  of our journey. Long-term projects of varying ambitions are
                  under consideration, such as{" "}
                  <Text {...b1Style}>spaceshot</Text> (a rocket which reaches
                  over 100 km of altitude),{" "}
                  <Text {...b1Style}>throttle control</Text>,{" "}
                  <Text {...b1Style}>in-flight reignition</Text>,{" "}
                  <Text {...b1Style}>propulsive landing</Text>, and{" "}
                  <Text {...b1Style}>many more</Text>. With rapid ongoing
                  innovations in rocket technology and accessible manufacturing,
                  MACH will never stop aiming higher.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <br />
          <Accordion allowMultiple defaultIndex={[-1]}>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h2>
                <AccordionButton>
                  <Text {...h3Style}>
                    What fuel and oxidizer does Borealis use?
                  </Text>
                  <AccordionIcon color="teal.300" />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...p2Style}>
                  The Borealis engine uses{" "}
                  <Text {...b1Style}>
                    ethanol as the fuel and nitrous oxide as the oxidizer
                  </Text>
                  ; we&rsquo;ve been calling this relatively uncommon
                  combination &ldquo;<Text {...b2Style}>EthaNOS</Text>&rdquo;
                  for short. Our choice in propellants for Borealis was
                  initially informed by our total inexperience at the time and
                  budget limitations. Although ethanol and nitrous oxide have
                  significant performance disadvantages, they are{" "}
                  <Text {...b1Style}>
                    some of the safest propellants to handle
                  </Text>{" "}
                  (by the standards of rocketry). Our top priority is the safety
                  of our members, which was the primary rationale behind our
                  propellant choice. After the procedural and hands-on
                  experience gained through a number of cold-flow and hot-fire
                  tests with both inert and live propellants, we are confident
                  in seeking approval for more conventional propellant
                  combinations like Kerolox.
                </Text>
                <Text {...p2Style}>
                  During the research phase of our engine design, we realized
                  that a relatively miniscule amount of research has been
                  published on ethanol and nitrous oxide rocket engines.
                  Although this resulted in less references to draw upon, it
                  also represented{" "}
                  <Text {...b1Style}>
                    an opportunity to do combustion research and explore
                    completely new flightweight system designs
                  </Text>
                  . After publishing a paper on our design methodology, we
                  intend to follow it up with more{" "}
                  <Text {...b1Style}>
                    novel research using experimental data collected during our
                    hot-fires
                  </Text>
                  , as well as even more new research on injector designs,
                  chamber cooling, propellant ratios, and much more. Our
                  progress so far has led us to believe that there is{" "}
                  <Text {...b1Style}>
                    real potential for low-cost liquid rocket propulsion using
                    EthaNOS
                  </Text>
                  , such as the self-pressurization capabilities of nitrous
                  oxide and excellent cooling potential of ethanol.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h2>
                <AccordionButton>
                  <Text {...h3Style}>Why is water used as coolant?</Text>
                  <AccordionIcon color="teal.300" />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...p2Style}>
                  A counterintuitive quirk of rocket engines is the scalability
                  of cooling systems -{" "}
                  <Text {...b1Style}>larger engines are easier to cool</Text>.
                  This is because combustion temperature is only dependent on
                  the propellant combination, so a larger engine spreads a
                  similar heat load across a much larger surface area.{" "}
                  <Text {...b1Style}>
                    Water is one of the best coolants available
                  </Text>
                  , and we are confident it will provide a{" "}
                  <Text {...b1Style}>very large margin of safety</Text> for our
                  first hot-fire test. As Borealis is a static instrumentation
                  engine, the weight penalty of an external cooling system was
                  not a factor for us. Our thin chamber walls will also allow us
                  to collect the{" "}
                  <Text {...b1Style}>best combustion data possible</Text>{" "}
                  compared to alternative methods like heatsink engines.
                </Text>
                <Text {...p2Style}>
                  From the beginning, our coolant system was also designed to
                  withstand very high pressures and ethanol flow. After our
                  initial hot-fire,{" "}
                  <Text {...b1Style}>
                    we will use Borealis to conduct extensive regenerative
                    cooling tests by using various ethanol-water mixtures and
                    flow rates
                  </Text>
                  . The results of this testing will be the topic of another
                  research paper as well as inform the viability of a
                  flightweight regenerative ethanol-nitrous oxide liquid rocket.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h2>
                <AccordionButton>
                  <Text {...h3Style}>
                    What tests are planned before the hot-fire?
                  </Text>
                  <AccordionIcon color="teal.300" />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...p2Style}>
                  As excited as we are to begin hot-fire testing of the
                  Borealis, it is even more important that we do so safely and
                  collect useful data out of our testing. As a result, our
                  testing schedule is{" "}
                  <Text {...b1Style}>
                    heavily informed by industry standard rocket engine
                    development
                  </Text>
                  . Beginning with a <Text {...b1Style}>hydrostatic</Text> test
                  to validate the structural design of our parts, we will move
                  on to <Text {...b1Style}>cold-flow</Text> testing with inert
                  propellant stand-ins. After these initial tests, we will
                  conduct a series of{" "}
                  <Text {...b1Style}>additional flow tests</Text> for
                  fine-tuning our injector, propellant, and ignitor systems. In
                  addition to these comprehensive tests, we will conduct various{" "}
                  <Text {...b1Style}>system-level experiments</Text> to validate
                  transducer thermal isolation, cavitating venturi design,
                  sensor data acquisition, and so much more. This is a packed
                  testing schedule but we are confident that our team can pull
                  it off{" "}
                  <Text {...b1Style}>
                    to ensure a safe and nominal hot-fire test in the{" "}
                    <Text {...b2Style}>summer of 2023</Text>
                  </Text>
                  .
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <br />
          <Accordion allowMultiple defaultIndex={[-1]}>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h2>
                <AccordionButton>
                  <Text {...h3Style}>
                    What prerequisite knowledge do I need to join MACH?
                  </Text>
                  <AccordionIcon color="teal.300" />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...p2Style}>
                  Many of our members have become integral parts of our team{" "}
                  <Text {...b1Style}>without prior academic knowledge</Text>.
                  Although material from STEM courses will give you a head
                  start, much of what we&rsquo;re doing is self-taught
                  experientially-learned. With enough interest and dedication,
                  anyone can contribute to the team on our many varied tasks.
                  Additionally, we have{" "}
                  <Text {...b1Style}>non-technical subteams</Text> that are just
                  as important and do not require any in-depth technical
                  knowledge, they are also a great way to start and learn more
                  about the technical subteams if you want to join them down the
                  line.
                </Text>
                <Text {...p2Style}>
                  That said, onboarding is a lengthy process for us to catch new
                  members up on the details of what we&rsquo;re doing. As a
                  result, our general recruitment isn&rsquo;t open year-round,{" "}
                  <Text {...b1Style}>
                    please see the{" "}
                    <Link {...linkStyle} href="/mach-website/team">
                      Team page
                    </Link>{" "}
                    for current recruitment status.
                  </Text>
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h2>
                <AccordionButton>
                  <Text {...h3Style}>
                    How much time commitment should I expect if I want to join?
                  </Text>
                  <AccordionIcon color="teal.300" />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...p2Style}>
                  Each week, each subteam conducts 1-hour meetings during the
                  weekdays; we also host 3-hour general meetings with all
                  subteams every weekend. Additionally, team members are
                  expected to work on their tasks for{" "}
                  <Text {...b1Style}>several hours</Text> outside of the weekly
                  meeting times. Setting up meetings with smaller task groups
                  within or across subteams is highly encouraged and facilitated
                  on our communications platforms.
                </Text>
                <Text {...p2Style}>
                  As a student design team, we completely understand that our
                  members get busy with exams, projects, and life in general.{" "}
                  <Text {...b1Style}>
                    The most important thing is{" "}
                    <Text {...b2Style}>
                      letting us know if you need some time away
                    </Text>{" "}
                    from the team so we can redistribute tasks and still meet
                    our deadlines.
                  </Text>{" "}
                  We realize how difficult university can be, and no effort put
                  into our team goes unappreciated.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h2>
                <AccordionButton>
                  <Text {...h3Style}>
                    Can I contribute to the team virtually?
                  </Text>
                  <AccordionIcon color="teal.300" />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...p2Style}>
                  While we try to accommodate virtual attendance for members who
                  cannot physically attend any specific meeting,{" "}
                  <Text {...b1Style}>
                    we highly encourage all members to join our in-person
                    sessions
                  </Text>
                  . As we are currently in the manufacturing, assembly, and
                  integration phase,{" "}
                  <Text {...b1Style}>
                    being in our workspace is absolutely critical
                  </Text>
                  . The pandemic was one of the most difficult times for our
                  team, and the momentum we&rsquo;ve picked up since returning
                  to campus has been incredible.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
              <h2>
                <AccordionButton>
                  <Text {...h3Style}>
                    I joined the team but took a break, can I rejoin?
                  </Text>
                  <AccordionIcon color="teal.300" />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Text {...p2Style}>
                  As students ourselves, we totally understand if life gets in
                  the way sometimes. If you&rsquo;ve taken a break from the
                  team, but want to know what we&rsquo;re doing now and what you
                  can do to help, please{" "}
                  <Text {...b1Style}>
                    reach out to the leads of the subteam(s) you were on or are
                    interested in
                  </Text>{" "}
                  or use the contact form. We&rsquo;d be happy to catch you up
                  and have you back on the team.
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
