import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Container } from "react-bootstrap";
import BgImage from "../../../assets/images/tv_series_bg.jpg";
import Player from "../../../assets/images/Single Player card.png";
// import Reflection from "../../../assets/images/Single Player card reflection.png";

const sharedstyles = {
  paddingRight: { base: "0", lg: "5rem" },
  paddingBottom: { base: "1%", lg: "3%" },
  fontSize: { base: "1rem", md: "1.5rem", lg: "1rem" },
};

export const Techology = () => {
  return (
    <Box bgImage={BgImage} color="#fff" padding="10%">
      <Container>
        <Box
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          textAlign={{ base: "center", lg: "left" }}
          fontWeight="900"
        >
          <Box display="flex" flexDirection="column" fontWeight="900">
            <Heading fontSize={{ base: "1.6rem", md: "2rem", lg: "2.8rem" }}>
              PROVEN TECHNOLOGY
            </Heading>
            <Box
              paddingTop="3%"
              display="flex"
              flexDirection={{ base: "column", lg: "row" }}
              flexWrap="wrap"
              paddingRight="10%"
              gap="5%"
            >
              <Box paddingBottom="5%">
                <Heading
                  fontSize={{ base: "1.5rem", md: "1.5rem", lg: "1.8rem" }}
                  paddingBottom={sharedstyles.paddingBottom}
                  color="#ffcd00"
                >
                  40M MATCHES
                </Heading>
                <Text
                  paddingRight={sharedstyles}
                  fontSize={sharedstyles.fontSize}
                >
                  Soccer, basketball, rugby, tennis & beyond
                </Text>
              </Box>
              <Box>
                <Heading
                  fontSize={{ base: "1.5rem", md: "1.5rem", lg: "1.8rem" }}
                  paddingBottom={sharedstyles.paddingBottom}
                  color="#ffcd00"
                >
                  15M MARKS PER YEAR
                </Heading>
                <Text
                  paddingRight={sharedstyles}
                  fontSize={sharedstyles.fontSize}
                >
                  Running, swimming & gymnastics
                </Text>
              </Box>

              <Box>
                <Heading
                  fontSize={{ base: "1.5rem", md: "1.5rem", lg: "1.8rem" }}
                  paddingBottom={sharedstyles.paddingBottom}
                  color="#ffcd00"
                >
                  93 FEDERATIONS
                </Heading>
                <Text
                  paddingRight={sharedstyles}
                  fontSize={sharedstyles.fontSize}
                >
                  International, national and local federations
                </Text>
              </Box>
              <Box>
                <Heading
                  fontSize={{ base: "1.5rem", md: "1.5rem", lg: "1.8rem" }}
                  paddingBottom={sharedstyles.paddingBottom}
                  color="#ffcd00"
                >
                  420K ATHLETES
                </Heading>
                <Text
                  paddingRight={sharedstyles}
                  fontSize={sharedstyles.fontSize}
                >
                  Monthly access to our platform & it's benefits
                </Text>
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <img src={Player} alt="Reflection" />
            {/* <img src={Reflection} alt="Reflection" /> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
