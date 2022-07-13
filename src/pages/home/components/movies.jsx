import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Container } from "react-bootstrap";
import BgImage from "../../../assets/images/tv_series_bg.jpg";
import Star1 from "../../../assets/images/Flywheel.png";

export const Section = () => {
  return (
    <Box bgImage={BgImage}>
      <Container>
        <Box
          color="#fff"
          textAlign="center"
          alignItems="center"
          flexDirection="column"
          display="flex"
          justifyContent="center"
          paddingBottom={{ base: "10%", lg: "10%" }}
        >
          <Heading
            fontWeight="900"
            fontSize={{ base: "1.5rem", md: "2.3rem" }}
            paddingX={{ lg: "15rem" }}
            paddingTop={{ base: "10%", lg: "5%" }}

            // color="#ffcd00"
          >
            DIRECT ACCESS TO THE USERS DURING THE WHOLE SEASON:
          </Heading>
          <Text
            fontSize={{ base: "1rem", md: "1.5rem", lg: "1.2rem" }}
            paddingX={{ lg: "23rem" }}
          >
            Creation of memberships and registrations at the beginning, matches
            and meets every week, and awards at the season finals
          </Text>
          <Box
            display="flex"
            justifyContent="center"
            paddingTop={{ base: "10%", lg: "5%" }}
            width={{ base: "80%", lg: "100%" }}
            height={{ base: "80%", lg: "100%" }}
          >
            <img src={Star1} alt="star1" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
