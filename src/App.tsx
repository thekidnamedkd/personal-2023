import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "lib/layout";
import Routings from "lib/router/Routings";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchInterval: 10_000,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Layout>
        <Routings />
      </Layout>
    </Router>
  </QueryClientProvider>
);

export default App;
