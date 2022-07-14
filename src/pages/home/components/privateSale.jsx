import { Box, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { Container } from "react-bootstrap";
import BgImage from "../../../assets/images/tv_series_bg.jpg";
import { IoIosWallet } from "react-icons/io";
import Baller from "../../../assets/images/Player_With_Footbal.png";

const Sales = () => {
  return (
    <Box
      bgImage={BgImage}
      color="#fff"
      paddingBottom={{ base: "10%", lg: "10%" }}
      paddingTop={{ base: "10%", lg: "10%" }}
    >
      <Container>
        <Box
          fontWeight="900"
          //   bgColor="#333"
          className="Background"
          display="flex"
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          alignItems="center"
          letterSpacing={{ lg: "-.1rem" }}
          paddingY={{ base: "5%", md: "5%", lg: "2%" }}
        >
          <Box
            width={{ lg: "50%" }}
            display="flex"
            flexDirection="column"
            alignItems={{ base: "center", md: "start", lg: "start" }}
            paddingLeft={{ base: "0", md: "4%", lg: "5%" }}
          >
            <Heading
              fontSize={{ base: "1.5rem", md: "1.8rem", lg: "3rem" }}
              textAlign={{ base: "center", md: "left", lg: "left" }}
              paddingBottom={{ base: "3%", md: "2%", lg: "2%" }}
            >
              <span className="colorChange">JOIN</span> US TO GET NOTIFIED ABOUT
              THE <span className="colorChange">PRIVATE SALE</span>
            </Heading>
            <Button
              bgColor="#ffcd00"
              color="#000"
              display="flex"
              gap="2%"
              alignItems="center"
              justifyContent={{ base: "center", md: "center" }}
              borderRadius="50px"
              paddingY={{ base: "6%", md: "4%", lg: "5.3%" }}
              paddingX={{ base: "15%", md: "3%", lg: "9%" }}
              fontSize={{ base: "1.5rem", md: "1.4rem", lg: "1.7rem" }}
            >
              <IoIosWallet fontSize="2rem" />
              Connect Wallet
            </Button>
          </Box>
          <Box position="relative" paddingTop={{ base: "5%" }}>
            <img src={Baller} alt="Player" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Sales;
