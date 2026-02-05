import type { ReactNode } from "react";

import ListHeading from "./ListHeading";

type Props = {
  children: ReactNode;
  title: string;
};

const ListCluster = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col items-start gap-0">
      <ListHeading>{title}</ListHeading>
      {children}
    </div>
  );
};

export default ListCluster;
