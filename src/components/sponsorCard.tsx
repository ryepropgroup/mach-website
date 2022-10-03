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
      <Center>
        <Center w="21vw" h="21vw" p="21px" bg="gray.900" rounded="lg">
          <Image alt={alt} rounded="lg" src={src} />
        </Center>
      </Center>
    </Link>
  );
}
