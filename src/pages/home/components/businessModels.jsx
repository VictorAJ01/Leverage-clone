import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import BgImage from "../../../assets/images/tv_series_bg.jpg";
// import { GrFormNextLink } from "react-icons/gr";
import Right from "../../../assets/images/icons8-arrow-48.png";
import { Container } from "react-bootstrap";

const Business = () => {
  return (
    <Box
      bgImage={BgImage}
      color="#fff"
      paddingTop={{ base: "15%", lg: "7%" }}
      paddingBottom={{ base: "10%", lg: "7%" }}
    >
      <Container>
        <Heading
          textAlign="center"
          fontWeight="900"
          paddingBottom={{ base: "7%", lg: "5%" }}
          fontSize={{ base: "1.6rem", md: "2rem", lg: "2.5rem" }}
        >
          BUSINESS MODELS
        </Heading>
        <Flex
          flexDirection={{ lg: "column" }}
          alignItems={{ base: "baseline", lg: "initial" }}
          gap="3%"
          className="scroll"
        >
          <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            paddingBottom={{ lg: "2%" }}
            fontWeight="700"
          >
            <Box
              display="flex"
              flexDirection={{ base: "column", md: "column", lg: "row" }}
              alignItems="center"
              textAlign={{ base: "center", md: "center", lg: "left" }}
              justifyContent="space-between"
            >
              <Box width={{ lg: "30%" }}>
                <Heading
                  fontSize={{ base: "1rem", md: "1.5rem", lg: "1.5rem" }}
                  paddingBottom={{ base: "17%", md: "5%", lg: "0" }}
                >
                  INITIAL FEDERATION OFFERING
                </Heading>
              </Box>
              <Box
                className="Background"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "1.3rem" }}
                width={{ base: "20rem", md: "30rem", lg: "80%" }}
                height={{ base: "280px", md: "400px", lg: "140px" }}
                justifyContent={{ base: "center", md: "center", lg: "center" }}
                display="flex"
                flexDirection={{ base: "column", md: "column", lg: "row" }}
                textAlign="center"
                alignItems="center"
              >
                <Box width={{ base: "100%", lg: "40%" }}>
                  <Text>All stakeholders involved</Text>
                </Box>
                <Box
                  width={{ lg: "15%" }}
                  transform={{ base: "rotate(90deg)", lg: "none" }}
                  paddingY={{ base: "7%", lg: "0" }}
                >
                  <img src={Right} alt="right arrow" />
                </Box>
                <Box width={{ base: "90%", lg: "40%" }}>
                  <Text>
                    Launchpad of utility tokens for federations to empower &
                    sustain the community
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            paddingBottom={{ lg: "2%" }}
            fontWeight="700"
          >
            <Box
              display="flex"
              flexDirection={{ base: "column", md: "column", lg: "row" }}
              alignItems="center"
              textAlign={{ base: "center", md: "center", lg: "left" }}
              justifyContent="space-between"
            >
              <Box width={{ base: "100%", lg: "30%" }}>
                <Heading
                  fontSize={{ base: "1rem", md: "1.5rem", lg: "1.5rem" }}
                  paddingBottom={{ base: "7%", md: "5%", lg: "0" }}
                >
                  BASE CURRENCY FOR THE TRADING PLATFORM
                </Heading>
              </Box>
              <Box
                className="Background"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "1.3rem" }}
                height={{ base: "280px", md: "400px", lg: "140px" }}
                justifyContent={{ base: "center", md: "center", lg: "center" }}
                width={{ base: "20rem", md: "30rem", lg: "80%" }}
                display="flex"
                flexDirection={{ base: "column", md: "column", lg: "row" }}
                textAlign="center"
                alignItems="center"
              >
                <Box width={{ base: "100%", lg: "40%" }}>
                  <Text>$LEGEND and federation tokens</Text>
                </Box>
                <Box
                  width={{ lg: "15%" }}
                  transform={{ base: "rotate(90deg)", lg: "none" }}
                  paddingY={{ base: "7%", lg: "0" }}
                >
                  <img src={Right} alt="right arrow" />
                </Box>
                <Box width={{ base: "90%", lg: "40%" }}>
                  <Text>Trading platform</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            paddingBottom={{ lg: "2%" }}
            fontWeight="700"
          >
            <Box
              display="flex"
              flexDirection={{ base: "column", md: "column", lg: "row" }}
              alignItems="center"
              textAlign={{ base: "center", md: "center", lg: "left" }}
              justifyContent="space-between"
            >
              <Box width={{ base: "100%", lg: "30%" }}>
                <Heading
                  fontSize={{ base: "1rem", md: "1.5rem", lg: "1.5rem" }}
                  paddingBottom={{ base: "13.5%", md: "5%", lg: "0" }}
                >
                  PLAY2EARN
                </Heading>
              </Box>
              <Box
                className="Background"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "1.3rem" }}
                width={{ base: "20rem", md: "30rem", lg: "80%" }}
                height={{ base: "280px", md: "400px", lg: "140px" }}
                justifyContent={{ base: "center", md: "center", lg: "center" }}
                display="flex"
                flexDirection={{ base: "column", md: "column", lg: "row" }}
                textAlign="center"
                alignItems="center"
              >
                <Box width={{ base: "100%", lg: "40%" }}>
                  <Text>Real life matches and events</Text>
                </Box>
                <Box
                  width={{ lg: "15%" }}
                  transform={{ base: "rotate(90deg)", lg: "none" }}
                  paddingY={{ base: "7%", lg: "0" }}
                >
                  <img src={Right} alt="right arrow" />
                </Box>
                <Box width={{ base: "90%", lg: "40%" }}>
                  <Text>$LEGEND and NFTs rewards to athletes</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            paddingBottom={{ lg: "2%" }}
            fontWeight="700"
          >
            <Box
              display="flex"
              flexDirection={{ base: "column", md: "column", lg: "row" }}
              alignItems="center"
              textAlign={{ base: "center", md: "center", lg: "left" }}
              justifyContent="space-between"
            >
              <Box width={{ base: "100%", lg: "30%" }}>
                <Heading
                  fontSize={{ base: "1rem", md: "1.5rem", lg: "1.5rem" }}
                  paddingBottom={{ base: "14%", md: "5%", lg: "0" }}
                >
                  SPONSORSHIPS
                </Heading>
              </Box>
              <Box
                className="Background"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "1.3rem" }}
                width={{ base: "20rem", md: "30rem", lg: "80%" }}
                height={{ base: "280px", md: "400px", lg: "140px" }}
                justifyContent={{ base: "center", md: "center", lg: "center" }}
                display="flex"
                flexDirection={{ base: "column", md: "column", lg: "row" }}
                textAlign="center"
                alignItems="center"
              >
                <Box width={{ base: "100%", lg: "40%" }}>
                  <Text>Brand exposure</Text>
                </Box>
                <Box
                  width={{ lg: "15%" }}
                  transform={{ base: "rotate(90deg)", lg: "none" }}
                  paddingY={{ base: "7%", lg: "0" }}
                >
                  <img src={Right} alt="right arrow" />
                </Box>
                <Box width={{ base: "90%", lg: "40%" }}>
                  <Text>Brands pay $LEGENDto the athletes</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            paddingBottom={{ lg: "2%" }}
            fontWeight="700"
          >
            <Box
              display="flex"
              flexDirection={{ base: "column", md: "column", lg: "row" }}
              alignItems="center"
              textAlign={{ base: "center", md: "center", lg: "left" }}
              justifyContent="space-between"
            >
              <Box width={{ base: "100%", lg: "30%" }}>
                <Heading
                  fontSize={{ base: "1rem", md: "1.5rem", lg: "1.5rem" }}
                  paddingBottom={{ base: "14%", md: "5%", lg: "0" }}
                >
                  PAYMENTS
                </Heading>
              </Box>
              <Box
                className="Background"
                fontSize={{ base: "1rem", md: "1.5rem", lg: "1.3rem" }}
                width={{ base: "20rem", md: "30rem", lg: "80%" }}
                height={{ base: "280px", md: "400px", lg: "140px" }}
                justifyContent={{ base: "center", md: "center", lg: "center" }}
                display="flex"
                flexDirection={{ base: "column", md: "column", lg: "row" }}
                textAlign="center"
                alignItems="center"
              >
                <Box width={{ base: "100%", lg: "40%" }}>
                  <Text>Internal payments</Text>
                </Box>
                <Box
                  width={{ lg: "15%" }}
                  transform={{ base: "rotate(90deg)", lg: "none" }}
                  paddingY={{ base: "7%", lg: "0" }}
                >
                  <img src={Right} alt="right arrow" />
                </Box>
                <Box width={{ base: "90%", lg: "40%" }}>
                  <Text>Shift to crypto payments</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Business;
