import { Box } from "@chakra-ui/react";
import React from "react";
import Federation from "./components/federation";
import Business from "./components/businessModels";
import { Hero } from "./components/hero";
import Leverade from "./components/leverade";
import Collection from "./components/movieCollection";
import Sales from "./components/privateSale";
import { Techology } from "./components/tech";
import { Tokenomics } from "./components/tokenomics";
import Utility from "./components/utility";

export const Home = () => {
  return (
    <Box width="100%">
      <Hero />
      <Collection />
      <Federation />
      <Utility />
      <Business />
      <Leverade />
      <Techology />
      <Tokenomics />
      <Sales />
    </Box>
  );
};
