import React from "react";
import { Container } from "react-bootstrap";
import { movieCollection } from "./data";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import BgImage from "../../../assets/components/images/tv_series_bg.jpg";
import { BsFillHandThumbsUpFill, BsClock } from "react-icons/bs";

const Collection = () => {
  return (
    <Box bgImage={BgImage} color="#fff" paddingTop={{ base: "15%", lg: "7%" }}>
      <Container>
        <Box
          display="flex"
          flexWrap="wrap"
          gap={{ base: "2%", md: "5%", lg: "2%" }}
          fontWeight="900"
          justifyContent="center"
        >
          <Heading
            textAlign="center"
            paddingBottom={{ base: "7%", lg: "5%" }}
            fontSize={{ base: "1.6rem", md: "2rem", lg: "2.5rem" }}
            paddingX={{ base: "0", lg: "10rem" }}
          >
            EMPOWERING<span className="colorChange"> MOVIES</span> &{" "}
            <span className="colorChange">FEDERATIONS </span>
            THROUGH BLOCKCHAIN TECHNOLOGY
          </Heading>
          {movieCollection.map((movieCollection) => {
            return (
              <Box>
                <Box>
                  <img src={movieCollection.image} alt="moviePhotos" />
                </Box>
                <Flex
                  justifyContent="space-between"
                  paddingTop={{ base: "4%", lg: "5%" }}
                  paddingBottom={{ base: "4%", lg: "5%" }}
                >
                  <Text>{movieCollection.title}</Text>
                  <Text color="#ffcd00">{movieCollection.year}</Text>
                </Flex>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  paddingBottom={{ base: "10%", lg: "10%" }}
                >
                  <Box
                    color="#ffcd00"
                    className="whiteBorder"
                    fontSize={{ lg: ".8rem" }}
                  >
                    {movieCollection.resolution}
                  </Box>
                  <Box fontWeight="400" display="flex" gap="1rem">
                    <Flex alignItems="center" gap="5%">
                      <BsClock color="#ffcd00" />
                      <Text fontSize={{ lg: ".8rem" }}>
                        {movieCollection.time}
                      </Text>
                    </Flex>
                    <Flex alignItems="center" gap="5%">
                      <BsFillHandThumbsUpFill color="#ffcd00" />
                      <Text fontSize={{ lg: ".8rem" }}>
                        {movieCollection.rating}
                      </Text>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Collection;
