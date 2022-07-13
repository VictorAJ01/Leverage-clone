import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import BgImage from "../../../assets/images/tv_series_bg.jpg";
import { GrFormNextLink } from "react-icons/gr";
import { Container } from "react-bootstrap";

const Business = () => {
  return (
    <Box bgImage={BgImage} color="#fff" paddingTop={{ base: "15%", lg: "7%" }}>
      <Container>
        <Heading
          textAlign="center"
          fontWeight="900"
          paddingBottom={{ base: "7%", lg: "5%" }}
          fontSize={{ base: "1.6rem", md: "2rem", lg: "2.5rem" }}
        >
          BUSINESS MODELS
        </Heading>
        <Box display="flex" flexDirection="column" textAlign="center">
          <Box display="flex" alignItems="center" textAlign="left">
            <Heading>INITIAL FEDERATION OFFERING</Heading>
            <Box
              bgColor="#333"
              fontSize={{ base: "1rem", md: "1.5rem", lg: "1.3rem" }}
              display="flex"
              alignItems="center"
              className="box"
            >
              <Text>All stakeholders involved</Text>
              <Box fontSize={{ lg: "7rem" }}>
                <GrFormNextLink className="icon" />
              </Box>
              <Text>
                Launchpad of utility tokens for federations to empower & sustain
                the community
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Business;
