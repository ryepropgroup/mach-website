import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";

import Navbar from "@/components/navbar";
import Header from "@/config";

export default function FAQ() {
  return (
    <>
      <Header title="MACH :: FAQ" />
      <Box bg="black">
        <Navbar />
        <Accordion allowMultiple defaultIndex={[0]}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1">
                  What is a liquid rocket? What makes it different?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>
                Rocket engines can be liquid, solid, or hybrid depending on the
                type of propellants used. Solid rocket motors typically use
                relatively stable fuel and oxidizers mixed with a binder. Once
                ignited, the combustion occurs within a cavity through the
                center of the propellant grains, and the exhaust products exit
                through a nozzle at the end of the motor. Though simple to
                manufacture and use, they cannot be throttled, shut off, or
                reignited. The majority of hobby and student rocketry teams use
                premade off-the-shelf solid motors for propulsion.
              </Text>
              <Text>
                Liquid engines, straightforwardly, store their fuel and oxidizer
                in liquid form. In addition to the control not possible in solid
                motors, these engines can achieve much higher efficiency due to
                the propellants available, better mixing, and lack of inert
                binder. As a tradeoff, they are much more complex to develop and
                operate. The majority of orbital launch vehicles like the Saturn
                V, Space Shuttle, Falcon 9, and Electron are largely or
                completely liquid-fueled.
              </Text>
              <Text>
                Hybrid is another type of rocket engine which typically uses
                solid fuel grains with a liquid oxidizer. There are a variety of
                approaches to these systems, but in general they combine various
                advantages and disadvantages of both solid and liquid engines.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1">What is a “bipropellant” liquid engine?</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>
                Over decades of rocketry, many thousands of combinations of
                fuels and oxidizers in various forms have been tested, some of
                them successfully. Bipropellants are a broad categorization of
                separately stored liquid fuel and oxidizers that are mixed and
                ignited upon injection into the combustion chamber. There are
                other classes and subclasses of liquid propellants like
                monopropellants and hypergolics, but bipropellant engines offer
                an excellent balance of performance, control, and safety, and
                are the standard for high-powered liquid rockets.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1">
                  What does “pressure-fed” mean, and why does Borealis use it?
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>
                Like any engine, a liquid rocket requires a consistent and
                controllable flow of fuel and oxidizer to function. Because the
                chamber pressures in a rocket are extremely high, any backflow
                of combustion gasses into the propellant would yield undesirable
                consequences. Hence, a high-pressure, high-flow-rate, and
                high-reliability propellant feed system is required. The two
                most common methods of achieving this are “pressure-fed” and
                “pump-fed”. The former uses a highly pressurized tank of inert
                gas like nitrogen to force the propellants into the injector.
                The latter uses a turbopump instead, which is much lighter than
                a pressurization tank, but also much more complex.
              </Text>
              <Text>
                The Borealis currently uses a pressure-fed system for its
                relative simplicity and reliability, but we are actively
                exploring self-pressurizing supercharged nitrous oxide for our
                flightweight system, as well as electric turbopumps for longer
                term projects.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
}
