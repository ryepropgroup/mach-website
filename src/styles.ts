import {
  BoxProps,
  HeadingProps,
  LinkProps,
  ListItemProps,
  TextProps,
} from "@chakra-ui/react";

export const bgStyle: BoxProps = {
  pos: "fixed",
  zIndex: -1,
  top: 0,
  left: 0,
  w: "100vw",
  h: "100vh",
  objectFit: "cover",
};

export const linkStyle: LinkProps = {
  color: "purple.400",
  fontWeight: "bold",
};

export const h1Style: HeadingProps = {
  as: "h1",
  bgClip: "text",
  bgGradient: "linear(to-r, cyan.300 0%, yellow.500 25%)",
  fontSize: "4xl",
  fontWeight: "bold",
};

export const h2Style: HeadingProps = {
  color: "teal.300",
  fontSize: "3xl",
  fontWeight: "bold",
};

export const h3Style: HeadingProps = {
  color: "teal.300",
  fontSize: "2xl",
  fontWeight: "bold",
  flex: 1,
  lineHeight: "48px",
  marginBottom: "20px",
  textAlign: "left",
};

export const p1Style: TextProps = {
  color: "gray.100",
  fontSize: "2xl",
  lineHeight: "72px",
};

export const p2Style: TextProps = {
  color: "gray.100",
  fontSize: "xl",
  lineHeight: "48px",
  marginBottom: "20px",
};

export const liStyle: ListItemProps = {
  color: "gray.100",
  fontSize: "xl",
  lineHeight: "48px",
};
