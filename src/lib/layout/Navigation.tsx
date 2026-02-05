import { useLocation, useNavigate } from "react-router-dom";

import Button from "../components/ui/Button";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="mt-6 flex w-full items-end justify-end gap-2 lg:w-min">
      <Button
        onClick={() => navigate("/")}
        className={
          location.pathname === "/"
            ? "border-2 border-black"
            : "border border-black"
        }
      >
        Work
      </Button>
      <Button
        onClick={() => navigate("/snapshot")}
        className={
          location.pathname === "/snapshot"
            ? "border-2 border-black"
            : "border border-black"
        }
      >
        Snapshot
      </Button>
    </div>
  );
};

export default Navigation;
