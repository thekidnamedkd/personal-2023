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
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      minW="100vw"
      bgColor="#e0ac00"
    >
      <Meta />
      <Flex
        justifyContent="space-between"
        alignItems="start"
        flexDirection="column"
        w={[
          "calc(100vw - 1rem)",
          "calc(100vw - 5rem)",
          "calc(100vw - 8rem)",
          "calc(100vw - 20rem)",
        ]}
        h={[
          "calc(100vh - 1rem)",
          "calc(100vh - 5rem)",
          "calc(100vh - 8rem)",
          "calc(100vh-10rem)",
        ]}
        border="2px solid"
        borderRadius="3px"
        p="24px"
        mx=".5rem"
        bg="#dddddd"
        boxShadow="dark-lg"
      >
        <Header />

        <Box
          width="full"
          height="full"
          as="main"
          overflowY="scroll"
          bg="white"
          border="2px solid"
          my="24px"
          p="14px"
          sx={{
            "::-webkit-scrollbar": {
              width: "6px",
            },
            "::-webkit-scrollbar-thumb": {
              background: "black",
              borderRadius: "10px",
              border: "2px solid white",
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
