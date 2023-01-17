import { HStack, Icon, Link, Text } from "@chakra-ui/react";
import { RiGithubLine, RiMailLine, RiTwitterLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <HStack marginLeft="auto" align="center" justify="space-between">
        <Text fontSize={["md", null, null, "lg"]}>
          {new Date().getFullYear()} -{" "}
          <Link
            fontSize={["md", null, null, "lg"]}
            href="https://kevin-davis.com"
            isExternal
          >
            kevin-davis.com
          </Link>
        </Text>
      </HStack>
      <HStack marginLeft="auto" align="center" justify="space-between">
        <Link
          href="https://github.com/thekidnamedkd"
          target="_blank"
          color="black"
          lineHeight="0"
        >
          <Icon
            cursor="pointer"
            as={RiGithubLine}
            minW="28px"
            w="1vw"
            h="auto"
          />
        </Link>
        <Link
          href="https://www.twitter.com/thekidnamedkd"
          target="_blank"
          color="black"
          lineHeight="0"
        >
          <Icon as={RiTwitterLine} minW="28px" w="1vw" h="auto" />
        </Link>
        <Link
          href="mailto:whomst@kevind.xyz"
          target="_blank"
          color="black"
          lineHeight="0"
        >
          <Icon as={RiMailLine} minW="28px" w="1vw" h="auto" />
        </Link>
      </HStack>
    </>
  );
};

export default Footer;
