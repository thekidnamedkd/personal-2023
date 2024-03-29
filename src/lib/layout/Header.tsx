import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useGasQuery from "../../utils/useGasQuery";

import Navigation from "./Navigation";

const Header = () => {
  const [lastGas, setLastGas] = useState(0);
  const [ripple, setRipple] = useState(false);
  const navigate = useNavigate();
  const { data: gasPrice } = useGasQuery();
  const currentGas = Number(_.get(gasPrice, "result.ProposeGasPrice"));

  useEffect(() => {
    setLastGas(currentGas);
  }, [currentGas]);

  const triggerRipple = () => {
    setRipple(true);
    setTimeout(() => {
      setRipple(false);
    }, 3000);
  };

  useEffect(() => {
    if (currentGas && currentGas !== lastGas) {
      triggerRipple();
    }
  }, [currentGas, lastGas]);

  const rippleAnimation = keyframes`
    0% { color: black; }
    25% { color: #ff4d16; text-shadow: 0 0 1px #ff4d16;}
    50% { color: #ff4d16; text-shadow: 0 0 2px #ff4d16;}
    75% { color: #ff4d16; text-shadow: 0 0 1px #ff4d16;}
    100% { color: black;  }
  `;

  return (
    <Flex as="header" width="full" flexWrap="wrap">
      <HStack>
        <Button
          variant="none"
          bg="none"
          w="fit-content"
          h="fit-content"
          p="0"
          border="none"
          onClick={() => navigate("/")}
        >
          <Box boxSize="150px" h="max-content">
            <Image src="/assets/kd_logo.png" alt="kd logo" />
          </Box>
        </Button>
        <VStack pl={["12px", null, null, "24px"]} align="start">
          <Heading size={["lg", null, null, "2xl"]}>Kevin Davis</Heading>

          <Link
            href="https://twitter.com/thekidnamedkd"
            target="_blank"
            lineHeight="0"
          >
            <Heading size={["sm", null, null, "md"]}>@thekidnamedkd</Heading>
          </Link>
          <Box borderBottom="1px solid black" w="100%" />
          <HStack>
            <Text fontSize={["sm", null, null, "md"]}>
              fullstack dev, turning{" "}
              <Box
                as="span"
                animation={
                  ripple ? `${rippleAnimation} 3s ease-in-out` : undefined
                }
              >
                {currentGas}
              </Box>{" "}
              gwei into atoms & pixels
            </Text>
          </HStack>
        </VStack>
      </HStack>
      <Spacer />
      <Navigation />
    </Flex>
  );
};

export default Header;
