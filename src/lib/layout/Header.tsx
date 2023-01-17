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
} from "@chakra-ui/react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

import useGasQuery from "../../utils/useGasQuery";

const Header = () => {
  const navigate = useNavigate();
  const { data: gasPrice } = useGasQuery();

  const currentGas = _.get(gasPrice, "result.ProposeGasPrice");

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
          <Heading size={["xl", null, null, "2xl"]}>Kevin Davis</Heading>

          <Link
            href="https://twitter.com/thekidnamedkd"
            target="_blank"
            lineHeight="0"
          >
            <Heading size={["sm", null, null, "md"]}>@thekidnamedkd</Heading>
          </Link>
          <Box borderBottom="1px solid black" w="100%" />
          <Text fontSize={["sm", null, null, "md"]}>
            {currentGas
              ? `fullstack dev, turning
            ${currentGas} gwei into atoms & pixels`
              : `fullstack dev, turning gwei into atoms & pixels`}
          </Text>
        </VStack>
      </HStack>
      <Spacer />
      <HStack
        mt={["24px", null, null, null]}
        alignItems="end"
        justifyContent="right"
        w={["100%", null, null, "min-content"]}
      >
        <Button onClick={() => navigate("/")}>Work</Button>
        <Button onClick={() => navigate("/reading")}>Reading</Button>
      </HStack>
    </Flex>
  );
};

export default Header;
