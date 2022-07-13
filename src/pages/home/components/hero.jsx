import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import React from "react";
import Image1 from "../../../assets/images/Hero_image.jpg";
import { Container } from "react-bootstrap";
import { IoIosWallet } from "react-icons/io";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

export const Hero = () => {
  return (
    <Box
      backgroundImage={Image1}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      height={{ base: "550px", md: "830px", lg: "850px" }}
      paddingTop={{ base: "5rem", md: "10%", lg: "12rem" }}
      width="100%"
    >
      <Container>
        <Box
          color="#fff"
          fontWeight="900"
          width={{ base: "100%", lg: "60%" }}
          display="flex"
          flexDirection="column"
          textAlign={{ base: "center", lg: "left" }}
        >
          <Heading fontSize={{ base: "1.5rem", md: "2rem" }}>
            THE FIRST MOVIE
          </Heading>
          <Heading
            fontSize={{ base: "3.3rem", md: "6rem", lg: "6rem" }}
            color="#ffcd00"
            lineHeight={{ base: "3.5rem", md: "5.2rem", lg: "5.5rem" }}
            fontWeight="900"
          >
            <strong>FEDERATION LAUNCHPAD</strong>
          </Heading>
          <Text paddingTop="1%" fontSize={{ base: "1rem", md: "1.6rem" }}>
            Building the bridge between movies governing bodies and blockchain,
            creating and launching their tokens, NFT and multiple apps with
            innovative utilities
          </Text>
          <Flex marginTop="4%" alignItems="center" gap="3%">
            <Button
              bgColor="#ffcd00"
              color="#000"
              display="flex"
              gap="3%"
              alignItems="center"
              justifyContent={{ base: "center", md: "center" }}
              borderRadius="50px"
              paddingY={{ base: "6%", md: "5%", lg: "4%" }}
              paddingX={{ base: "8%", md: "20%", lg: "4%" }}
              fontSize="1.4rem"
            >
              <IoIosWallet fontSize="2rem" />
              Connect Wallet
            </Button>
            <Flex color="#ffcd00" fontSize="2rem" gap="25%">
              <Box className="gradient" borderRadius="50%">
                <FaTwitter />
              </Box>
              <Box className="gradient" borderRadius="50%">
                <FaTelegramPlane />
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box
          display="flex"
          fontWeight="900"
          color="#fff"
          marginTop={{ base: "5%", lg: "1.8%" }}
          gap={{ base: "5.5%", lg: "3.5%" }}
        >
          <Box textAlign="left">
            <Heading fontSize={{ base: "1.4rem", md: "2.7rem", lg: "2.4rem" }}>
              47,233,392
            </Heading>
            <Text>MOVIES</Text>
          </Box>
          <Box textAlign="left">
            <Heading fontSize={{ base: "1.4rem", md: "2.7rem", lg: "2.4rem" }}>
              11,109,652
            </Heading>
            <Text>ACTORS</Text>
          </Box>
          <Box textAlign="left">
            <Heading fontSize={{ base: "1.4rem", md: "2.7rem", lg: "2.4rem" }}>
              5,768,825
            </Heading>
            <Text>SEASONS</Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
