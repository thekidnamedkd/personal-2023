import { HStack, Icon, Link, Text } from "@chakra-ui/react";
import {
  RiGithubFill,
  RiMailLine,
  RiSpotifyFill,
  RiTwitterFill,
} from "react-icons/ri";

import { ArenaIcon } from "../components/IconPack";

const Footer = () => {
  return (
    <>
      <HStack marginLeft="auto" align="center" justify="space-between">
        <Text fontSize={["sm", null, null, "md"]}>
          HTTP:{" "}
          <Link
            fontSize={["sm", null, null, "md"]}
            href="https://kevin-davis.com"
          >
            kevin-davis.com
          </Link>
        </Text>
      </HStack>
      <HStack marginLeft="auto" align="center" justify="space-between">
        <Text fontSize={["sm", null, null, "md"]}>
          IPFS/ENS:{" "}
          <Link fontSize={["sm", null, null, "md"]} href="https://heykd.eth">
            heykd.eth
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
            as={RiGithubFill}
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
          <Icon as={RiTwitterFill} minW="28px" w="1vw" h="auto" />
        </Link>
        <Link
          href="https://open.spotify.com/user/kidnamedkd"
          target="_blank"
          color="black"
          lineHeight="0"
        >
          <Icon as={RiSpotifyFill} minW="28px" w="1vw" h="auto" />
        </Link>
        <Link
          href="https://www.are.na/kevin-davis"
          target="_blank"
          color="black"
          lineHeight="0"
        >
          <Icon as={ArenaIcon} minW="28px" w="1vw" h="auto" />
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
