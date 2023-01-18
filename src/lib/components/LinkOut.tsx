import { Box, Link, Text } from "@chakra-ui/react";

type Props = {
  href: string;
  title: string;
  description?: string;
  tools?: string;
};

const LinkOut = ({ href, title, description, tools }: Props) => {
  return (
    <Box pb="8px">
      <Link fontSize={["lg", null, null, "xl"]} href={href} isExternal>
        {title} ⧉
      </Link>
      {description && (
        <Text fontSize={["md", null, null, "lg"]} pl="12px">
          ↳ {description}
        </Text>
      )}
      {tools && (
        <Text fontSize={["sm", null, null, "md"]} pl="30px">
          ↳ {tools}
        </Text>
      )}
    </Box>
  );
};

export default LinkOut;
