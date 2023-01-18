import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      <Meta />
      <Flex
        justifyContent="space-between"
        alignItems="start"
        flexDirection="column"
        overflowY="scroll"
        sx={{
          "::-webkit-scrollbar": {
            width: "10px",
          },
          "::-webkit-scrollbar-thumb": {
            background: "black",
            borderRadius: "10px",
            border: "4px solid transparent",
            backgroundClip: "padding-box",
          },
        }}
        w={["93vw", "90vw", null, "82vw"]}
        h={["95vh", "90vh", null, "82vh"]}
        border="2px solid"
        borderRadius="3px"
        p="24px"
        pl={["32px", "32px", null, null]}
        bg="#dddddd"
        boxShadow="dark-lg"
      >
        <Header />
        <Box
          id="#"
          width="full"
          height={["min-content", "min-content", "full", "full"]}
          as="main"
          overflowY={["visible", "visible", "scroll", "scroll"]}
          bg="white"
          border="2px solid"
          boxShadow="inset 0 0 3px black"
          my="24px"
          p="14px"
          sx={{
            "::-webkit-scrollbar": {
              width: "10px",
            },
            "::-webkit-scrollbar-thumb": {
              background: "black",
              borderRadius: "10px",
              border: "4px solid transparent",
              backgroundClip: "padding-box",
            },
          }}
        >
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
