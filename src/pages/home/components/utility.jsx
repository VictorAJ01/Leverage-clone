import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Container } from "react-bootstrap";
import BgImage from "../../../assets/images/tv_series_bg.jpg";
import Card from "../../../assets/images/Hero_card.png";
import Offering from "../../../assets/images/pic.svg";
import Staking from "../../../assets/images/pic2.svg";
import Governance from "../../../assets/images/pic3.svg";
import Earn from "../../../assets/images/pic4.svg";
import data from "../../../assets/images/pic5.svg";
import Sponsors from "../../../assets/images/pic6.svg";
import Payments from "../../../assets/images/pic7.svg";
import Athletes from "../../../assets/images/pic8.svg";

const sharestyles = {
  width: { base: "18%", lg: "8%" },
  gap: { base: "3%", lg: "2%" },
  paddingBottom: { base: "3%", lg: "3%" },
};

const Utility = () => {
  return (
    <Box
      bgImage={BgImage}
      color="#fff"
      paddingTop={{ base: "10%", lg: "7%" }}
      paddingBottom={{ base: "10%", lg: "7%" }}
    >
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Heading
            fontWeight="900"
            fontSize={{ base: "1.6rem", md: "2rem", lg: "2.5rem" }}
            paddingBottom={{ lg: "5%" }}
          >
            <strong>
              {" "}
              $LEGEND <span className="colorChange">UTILITY TOKEN</span>
            </strong>
          </Heading>
          <Box
            display="flex"
            alignItems="start"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Box width={{ lg: "180%" }}>
              <img src={Card} alt="card" />
            </Box>
            <Box
              display="flex"
              flexDirection={{ base: "column", lg: "column" }}
              // width={{ lg: "50%" }}
            >
              <Text
                fontSize={{ base: "1rem", md: "1.2rem" }}
                paddingBottom={{ base: "5%" }}
              >
                Our <strong>$LEGEND token</strong> is your key to a new reality
                in sports. You can gain access to the world's first Initial
                Federation Offerings <strong>IFO</strong> and their NFT sales.
                Hold it and influence key federation decisions, support players
                &<strong>share revenue from sponsorship</strong> deals &{" "}
                <strong>staking,</strong> or connect directly to your sports
                community & stakeholders
              </Text>
              <Box
                fontSize={{ base: "1rem", md: "1rem", lg: "1.3rem" }}
                fontWeight={{ base: "700", lg: "400" }}
              >
                <Flex
                  alignItems="center"
                  gap={sharestyles.gap}
                  paddingBottom={sharestyles.paddingBottom}
                >
                  <Box width={sharestyles.width}>
                    <img src={Offering} alt="offering" />
                  </Box>
                  <Text>Initial Federation Offerings</Text>
                </Flex>
                <Flex
                  alignItems="center"
                  gap={sharestyles.gap}
                  paddingBottom={sharestyles.paddingBottom}
                >
                  <Box width={sharestyles.width}>
                    <img src={Staking} alt="Staking" />
                  </Box>
                  <Text>Staking</Text>
                </Flex>
                <Flex
                  alignItems="center"
                  gap={sharestyles.gap}
                  paddingBottom={sharestyles.paddingBottom}
                >
                  <Box width={sharestyles.width}>
                    <img src={Governance} alt="Governance" />
                  </Box>
                  <Text>Governance</Text>
                </Flex>
                <Flex
                  alignItems="center"
                  gap={sharestyles.gap}
                  paddingBottom={sharestyles.paddingBottom}
                >
                  <Box width={sharestyles.width}>
                    <img src={Earn} alt="Earn" />
                  </Box>
                  <Text>Play 2 Earn</Text>
                </Flex>
                <Flex
                  alignItems="center"
                  gap={sharestyles.gap}
                  paddingBottom={sharestyles.paddingBottom}
                >
                  <Box width={sharestyles.width}>
                    <img src={data} alt="data" />
                  </Box>
                  <Text>Big data</Text>
                </Flex>
                <Flex
                  alignItems="center"
                  gap={sharestyles.gap}
                  paddingBottom={sharestyles.paddingBottom}
                >
                  <Box width={sharestyles.width}>
                    <img src={Sponsors} alt="Sponsors" />
                  </Box>
                  <Text>Sponsors</Text>
                </Flex>
                <Flex
                  alignItems="center"
                  gap={sharestyles.gap}
                  paddingBottom={sharestyles.paddingBottom}
                >
                  <Box width={sharestyles.width}>
                    <img src={Payments} alt="Payments" />
                  </Box>
                  <Text>Payments</Text>
                </Flex>
                <Flex
                  alignItems="center"
                  gap={sharestyles.gap}
                  paddingBottom={sharestyles.paddingBottom}
                >
                  <Box width={sharestyles.width}>
                    <img src={Athletes} alt="Athletes" />
                  </Box>
                  <Text>Athletes contracts</Text>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Utility;
