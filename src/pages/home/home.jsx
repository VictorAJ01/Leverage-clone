import { Box } from "@chakra-ui/react";
import React from "react";
// import Business from "./components/businessModels";
import { Hero } from "./components/hero";
import Collection from "./components/movieCollection";
import { Section } from "./components/movies";
import { Techology } from "./components/tech";
import { Tokenomics } from "./components/tokenomics";

export const Home = () => {
  return (
    <Box width="100%">
      <Hero />
      <Collection />
      {/* <Business /> */}
      <Tokenomics />
      <Section />
      <Techology />
    </Box>
  );
};
