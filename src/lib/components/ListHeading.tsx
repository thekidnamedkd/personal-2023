import { Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ListHeading = ({ children }: Props) => {
  return (
    <Heading fontSize={["xl", null, null, "3xl"]} mb="12px">
      {children}
    </Heading>
  );
};

export default ListHeading;
