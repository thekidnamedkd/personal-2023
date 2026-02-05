import { Button as BaseButton } from "@base-ui/react/button";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof BaseButton> & {
  variant?: "default" | "ghost";
};

const Button = ({ className, variant = "default", ...props }: Props) => {
  const variantClass =
    variant === "ghost" ? "border-0 bg-transparent p-0" : "retro-button";

  return (
    <BaseButton
      className={[variantClass, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
};

export default Button;
