import Button from "lib/components/ui/Button";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate("/");

  return (
    <div className="flex flex-col items-start gap-4">
      <h2 className="text-xl lg:text-3xl">lost af</h2>

      <Button onClick={handleBackToHome} className="w-fit">
        return to center
      </Button>
    </div>
  );
};

export default Page404;
