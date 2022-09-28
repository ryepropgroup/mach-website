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
export const headingStyle: HeadingProps = {
  bgClip: "text",
  bgGradient: "linear(to-r, cyan.300, yellow.500)",
  fontFamily: "Inter, sans-serif",
  fontSize: "5xl",
  fontWeight: 700,
};

export const introStyleFirst: TextProps = {
  color: "gray.100",
  fontFamily: "Inter, sans-serif",
  fontSize: "3xl",
  fontWeight: 700,
  lineHeight: "200%",
};

export const introStyleSecond: TextProps = {
  color: "gray.100",
  fontFamily: "Inter, sans-serif",
  fontSize: "3xl",
  lineHeight: "200%",
};

export const introStyleThird: TextProps = {
  color: "gray.100",
  fontFamily: "Inter, sans-serif",
  fontSize: "xl",
  lineHeight: "200%",
};

export const linkStyle: LinkProps = {
  color: "purple.400",
  fontFamily: "Inter, sans-serif",
  fontSize: "xl",
  fontWeight: 700,
};

export const questionStyle: TextProps = {
  color: "teal.300",
  fontFamily: "Inter, sans-serif",
  fontSize: "2xl",
  fontWeight: 700,
  flex: 1,
  textAlign: "left",
};

export const answerStyle: TextProps = {
  color: "gray.100",
  fontFamily: "Inter, sans-serif",
  fontSize: "xl",
  lineHeight: "48px",
  marginBottom: "20px",
};

export const teamHeadingStyle: TextProps = {
  color: "teal.300", // TODO: each team heading will eventually have its own color so this will need to be removed
  fontFamily: "Inter, sans-serif",
  fontSize: "4xl",
  fontWeight: 700,
  flex: 1,
  lineHeight: "48px",
  textAlign: "left",
};

export const teamDetailsStyle: TextProps = {
  color: "gray.100",
  fontFamily: "Inter, sans-serif",
  fontSize: "xl",
  lineHeight: "48px",
  marginBottom: "20px",
};

export const listItemStyle: ListItemProps = {
  color: "gray.100",
  fontFamily: "Inter, sans-serif",
  fontSize: "xl",
  lineHeight: "48px",
};
