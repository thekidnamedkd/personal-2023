import { Button, HStack } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

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
        boxShadow={location.pathname === "/" ? "inset 0 0 2px #333333" : "none"}
        border={
          location.pathname === "/" ? "2px solid black" : "1px solid black"
        }
      >
        Work
      </Button>
      <Button
        onClick={() => navigate("/reading")}
        boxShadow={
          location.pathname === "/reading" ? "inset 0 0 2px #333333" : "none"
        }
        border={
          location.pathname === "/reading"
            ? "2px solid black"
            : "1px solid black"
        }
      >
        Reading
      </Button>
    </HStack>
  );
};

export default Navigation;
