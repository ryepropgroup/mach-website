import {
  Alert,
  AlertIcon,
  CloseButton,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function WIPBanner() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [dismissed, setDismissed] = useState(true);
  useEffect(() => {
    setDismissed(!!window.localStorage.getItem("bannerDismissed"));
  }, []);
  return (
    !dismissed &&
    isOpen && (
      <Alert justifyContent="space-between" bg="teal.300" status="info">
        <Flex>
          <AlertIcon />
          <Text>
            Our site is still under construction, please bear with us!
          </Text>
        </Flex>

        <CloseButton
          onClick={() => {
            window.localStorage.setItem("bannerDismissed", "true");
            onClose();
          }}
        />
      </Alert>
    )
  );
}
