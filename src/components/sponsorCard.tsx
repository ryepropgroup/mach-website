import { Center, Image, Link } from "@chakra-ui/react";

export default function SponsorCard({
  alt,
  href,
  src,
}: {
  alt: string;
  href: string;
  src: string;
}) {
  return (
    <Link href={href} isExternal>
      <Center w="400px" h="400px" p="20px" bg="gray.900" rounded="lg">
        <Image alt={alt} rounded="lg" src={src} />
      </Center>
    </Link>
  );
}
