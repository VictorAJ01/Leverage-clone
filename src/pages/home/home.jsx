import { Box } from "@chakra-ui/react";
import React from "react";
import { Hero } from "./components/hero";
import { Section } from "./components/movies";
import { Techology } from "./components/tech";
import { Tokenomics } from "./components/tokenomics";

export const Home = () => {
  return (
    <Box width="100%">
      <Hero />
      <Tokenomics />
      <Section />
      <Techology />
    </Box>
  );
};
