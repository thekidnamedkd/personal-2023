import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ListHeading = ({ children }: Props) => {
  return <h2 className="mb-3 text-lg lg:text-2xl">{children}</h2>;
};

export default ListHeading;
