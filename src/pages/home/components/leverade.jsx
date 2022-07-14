import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { Container } from "react-bootstrap";
import BgImage from "../../../assets/images/tv_series_bg.jpg";
import Player from "../../../assets/images/Single_Player_Image_Two.png";
import Star1 from "../../../assets/images/Flywheel.png";

const Leverade = () => {
  return (
    <Box
      bgImage={BgImage}
      color="#fff"
      paddingTop={{ base: "10%", lg: "7%" }}
      paddingBottom={{ base: "10%", lg: "7%" }}
    >
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          justifyContents="center"
          alignItems="center"
        >
          <Heading
            fontSize={{ base: "3rem", md: "6rem", lg: "8rem" }}
            textAlign="center"
            color="#ffcd00"
            fontWeight="900"
          >
            <strong>WHY LEVERADE</strong>
          </Heading>
          <Text
            fontSize={{ base: "1rem", md: "1.6rem" }}
            textAlign="center"
            paddingX={{ lg: "10rem" }}
          >
            <strong> 6 YEARS</strong> in the industry creating the technology
            used for the daily operations and management of sports entities and
            athletes
          </Text>
          <Box
            width={{ base: "50%", lg: "100%" }}
            paddingTop={{ base: "7%", lg: "5%" }}
            paddingBottom="3%"
            justifyContent="center"
            display="flex"
          >
            <img src={Player} alt="A lady running" />
          </Box>
          <Flex
            justifyContents="center"
            textAlign="center"
            gap="10%"
            flexWrap={{ base: "wrap", lg: "nowrap" }}
          >
            <Box
              display="flex"
              width={{ base: "100%", lg: "30%" }}
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              position="relative"
              top={{ lg: "-460" }}
            >
              <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
                Every stakeholder is part of our
                <strong> ECOSYSTEM OF APPS: </strong> athletes, clubs, fans,
                referees, volunteers, governing bodies, sponsors
              </Text>
            </Box>
            <Box
              display="flex"
              width={{ base: "100%", lg: "30%" }}
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
                <strong>
                  {" "}
                  DIRECT ACCESS TO THE USERS DURING THE WHOLE SEASON:
                </strong>{" "}
                creation of memberships and registrations at the beginning,
                matches and meets every week, and awards at the season finals
              </Text>
            </Box>
            <Box
              display="flex"
              width={{ base: "100%", lg: "30%" }}
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              position="relative"
              top={{ lg: "-460" }}
            >
              <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
                Able to<strong> DIGEST DATA OF EVERY SPORT</strong>, like
                results for football, times for swimming and scoring for
                gymnastics
              </Text>
            </Box>
          </Flex>
          <Box
            display="flex"
            justifyContent="center"
            paddingTop={{ base: "10%", lg: "15%" }}
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

export default Leverade;
