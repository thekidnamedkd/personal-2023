import { Button, HStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HStack
      mt={["24px", null, null, null]}
      alignItems="end"
      justifyContent="right"
      w={["100%", null, null, "min-content"]}
    >
      <Button
        onClick={() => navigate("/")}
        border={
          location.pathname === "/" ? "2px solid black" : "1px solid black"
        }
      >
        Work
      </Button>
      <Button
        onClick={() => navigate("/snapshot")}
        border={
          location.pathname === "/snapshot"
            ? "2px solid black"
            : "1px solid black"
        }
      >
        Snapshot
      </Button>
    </HStack>
  );
};

export default Navigation;
