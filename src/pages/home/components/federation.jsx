import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { Container } from "react-bootstrap";
import BgImage from "../../../assets/images/tv_series_bg.jpg";
import Lady from "../../../assets/images/woman-running.png";

const Federation = () => {
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
            <strong>WHY FEDERATIONS</strong>
          </Heading>
          <Text
            fontSize={{ base: "1rem", md: "1.6rem" }}
            textAlign="center"
            paddingX={{ lg: "10rem" }}
          >
            The sports sector is structured like a pyramid with federations,
            clubs, athletes and fans.
            <strong> BY WORKING WITH THOSE ON THE TOP</strong> , we can help all
            stakeholders in the ecosystem.
          </Text>
          <Box
            width={{ base: "50%", md: "100%", lg: "100%" }}
            paddingTop={{ base: "7%", md: "5%", lg: "5%" }}
            paddingBottom="3%"
            justifyContent="center"
            display="flex"
          >
            <img src={Lady} alt="A lady running" />
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
              top={{ lg: "-500" }}
            >
              <Heading
                fontFamily="Gtwalsheimpro, sans-serif"
                color="#ffcd00"
                fontWeight="900"
                fontSize={{ base: "3.3rem", md: "6rem", lg: "8rem" }}
              >
                01
              </Heading>
              <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
                They are the main
                <strong> SOURCE FOR CREATING NEW REVENUE STREAMS</strong> :
                members personal information and competition data and stats
              </Text>
            </Box>
            <Box
              display="flex"
              width={{ base: "100%", lg: "30%" }}
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Heading
                fontFamily="Gtwalsheimpro, sans-serif"
                color="#ffcd00"
                fontWeight="900"
                fontSize={{ base: "3.3rem", md: "6rem", lg: "8rem" }}
              >
                02
              </Heading>
              <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
                They generate
                <strong>
                  {" "}
                  BILIONS OF DOLLARS FLOWING WITHIN THEIR OWN ECOSYSTEM
                </strong>{" "}
                : from memberships and registrations to paying referees, awards
                and salaries
              </Text>
            </Box>
            <Box
              display="flex"
              width={{ base: "100%", lg: "30%" }}
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              position="relative"
              top={{ lg: "-500" }}
            >
              <Heading
                fontFamily="Gtwalsheimpro, sans-serif"
                color="#ffcd00"
                fontWeight="900"
                fontSize={{ base: "3.3rem", md: "6rem", lg: "8rem" }}
              >
                03
              </Heading>
              <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
                On top of that, their competitions attract sponsors and fans and
                become a<strong> MARKETPLACE FOR AUDIENCES</strong>
              </Text>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Federation;
