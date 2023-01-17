import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "lib/layout";
import Routings from "lib/router/Routings";
import { theme } from "lib/styles/theme";
import Fonts from "lib/styles/theme/Fonts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchInterval: 10_000,
    },
  },
});

const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Fonts />
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </QueryClientProvider>
  </ChakraProvider>
);

export default App;
