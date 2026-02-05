import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useGasQuery from "../../utils/useGasQuery";

import Button from "../components/ui/Button";
import Navigation from "./Navigation";

const Header = () => {
  const [lastGas, setLastGas] = useState<number | null>(null);
  const [ripple, setRipple] = useState(false);
  const navigate = useNavigate();
  const { data: gasPrice } = useGasQuery();
  const gasValue = _.get(gasPrice, "result.ProposeGasPrice");
  const gasNumber = Number(gasValue);
  const currentGas = Number.isFinite(gasNumber) ? gasNumber : null;
  const formattedGas =
    currentGas === null ? "—" : currentGas.toFixed(2).replace(/\.?0+$/, "");

  useEffect(() => {
    setLastGas(currentGas);
  }, [currentGas]);

  const triggerRipple = useCallback(() => {
    setRipple(true);
    setTimeout(() => {
      setRipple(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (currentGas !== null && lastGas !== null && currentGas !== lastGas) {
      triggerRipple();
    }
  }, [currentGas, lastGas, triggerRipple]);

  return (
    <header className="flex w-full flex-wrap">
      <div className="flex items-start">
        <Button
          variant="ghost"
          className="h-fit w-fit"
          onClick={() => navigate("/")}
        >
          <img
            className="h-auto w-[150px]"
            src="/assets/kd_logo.png"
            alt="kd logo"
          />
        </Button>
        <div className="flex flex-col items-start pl-3 lg:pl-6">
          <h2 className="text-2xl lg:text-4xl">Kevin Davis</h2>

          <a
            className="leading-none"
            href="https://twitter.com/thekidnamedkd"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="text-sm lg:text-base">@thekidnamedkd</h2>
          </a>
          <div className="w-full border-b border-black" />
          <div className="flex items-center">
            <p className="text-sm lg:text-base">
              fullstack dev, turning{" "}
              <span className={ripple ? "gas-ripple" : undefined}>
                {formattedGas}
              </span>{" "}
              gwei into atoms & pixels
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1" />
      <Navigation />
    </header>
  );
};

export default Header;
