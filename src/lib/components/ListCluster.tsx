import { VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";

import ListHeading from "./ListHeading";

type Props = {
  children: ReactNode;
  title: string;
};

const ListCluster = ({ children, title }: Props) => {
  return (
    <VStack alignItems="start" spacing="0">
      <ListHeading>{title}</ListHeading>
      {children}
    </VStack>
  );
};

export default ListCluster;
