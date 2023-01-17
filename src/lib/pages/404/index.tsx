import { Button, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate("/");

  return (
    <VStack>
      <Heading>lost af</Heading>

      <Button variant="outline" w="fit-content" onClick={handleBackToHome}>
        return to center
      </Button>
    </VStack>
  );
};

export default Page404;
