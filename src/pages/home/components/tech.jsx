import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Container } from "react-bootstrap";
import BgImage from "../../../assets/images/tv_series_bg.jpg";
import Player from "../../../assets/images/Single Player card.png";
// import Reflection from "../../../assets/images/Single Player card reflection.png";

const sharedstyles = {
  paddingRight: { base: "0", lg: "30%" },
  paddingBottom: { base: "1%", lg: "5%" },
};

export const Techology = () => {
  return (
    <Box bgImage={BgImage} color="#fff" padding="10%">
      <Container>
        <Box
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <Box display="flex" flexDirection="column" fontWeight="900">
            <Heading>PROVEN TECHNOLOGY</Heading>
            <Box
              paddingTop="3%"
              display="flex"
              flexDirection={{ base: "column", lg: "row" }}
              flexWrap="wrap"
              paddingRight="10%"
              gap="10%"
            >
              <Box paddingBottom="5%">
                <Heading paddingBottom={sharedstyles} color="#ffcd00">
                  40M MATCHES
                </Heading>
                <Text paddingRight={sharedstyles}>
                  Soccer, basketball, rugby, tennis & beyond
                </Text>
              </Box>
              <Box>
                <Heading paddingBottom={sharedstyles} color="#ffcd00">
                  15M MARKS PER YEAR
                </Heading>
                <Text paddingRight={sharedstyles}>
                  Running, swimming & gymnastics
                </Text>
              </Box>

              <Box>
                <Heading paddingBottom={sharedstyles} color="#ffcd00">
                  93 FEDERATIONS
                </Heading>
                <Text paddingRight={sharedstyles}>
                  International, national and local federations
                </Text>
              </Box>
              <Box>
                <Heading paddingBottom={sharedstyles} color="#ffcd00">
                  420K ATHLETES
                </Heading>
                <Text paddingRight={sharedstyles}>
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
