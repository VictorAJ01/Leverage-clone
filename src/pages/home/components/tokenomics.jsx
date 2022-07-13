import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Container } from "react-bootstrap";
import BgImage from "../../../assets/images/tv_series_bg.jpg";
import Star2 from "../../../assets/images/Star.svg";

export const Tokenomics = () => {
  return (
    <Box bgImage={BgImage}>
      <Container>
        <Box
          color="#fff"
          textAlign="center"
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          paddingBottom={{ base: "10%", lg: "10%" }}
        >
          <Heading
            fontWeight="900"
            fontSize={{ base: "1.6rem", md: "2rem", lg: "2.5rem" }}
            paddingX={{ lg: "15rem" }}
            paddingTop={{ base: "10%", lg: "10%" }}
          >
            TOKENOMICS
          </Heading>
          <Box paddingTop={{ lg: "3%" }}>
            <img src={Star2} alt="star1" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
