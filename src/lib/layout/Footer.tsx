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
      <div className="ml-auto flex items-center">
        <p className="text-sm lg:text-base">
          VERCEL/DNS:{" "}
          <a className="text-sm lg:text-base" href="https://kevin-davis.com">
            kevin-davis.com
          </a>
        </p>
      </div>
      <div className="ml-auto flex items-center">
        <p className="text-sm lg:text-base">
          IPFS/ENS:{" "}
          <a className="text-sm lg:text-base" href="https://heykd.eth">
            heykd.eth
          </a>
        </p>
      </div>
      <div className="ml-auto mt-3 flex items-center justify-between gap-4">
        <a
          className="text-black no-underline hover:text-black"
          href="https://github.com/thekidnamedkd"
          target="_blank"
          rel="noreferrer"
        >
          <RiGithubFill className="h-auto w-7 min-w-[28px]" />
        </a>
        <a
          className="text-black no-underline hover:text-black"
          href="https://www.twitter.com/thekidnamedkd"
          target="_blank"
          rel="noreferrer"
        >
          <RiTwitterFill className="h-auto w-7 min-w-[28px]" />
        </a>
        <a
          className="text-black no-underline hover:text-black"
          href="https://open.spotify.com/user/kidnamedkd"
          target="_blank"
          rel="noreferrer"
        >
          <RiSpotifyFill className="h-auto w-7 min-w-[28px]" />
        </a>
        <a
          className="text-black no-underline hover:text-black"
          href="https://www.are.na/kevin-davis"
          target="_blank"
          rel="noreferrer"
        >
          <ArenaIcon className="h-auto w-7 min-w-[28px]" />
        </a>
        <a
          className="text-black no-underline hover:text-black"
          href="mailto:whomst@kevind.xyz"
          target="_blank"
          rel="noreferrer"
        >
          <RiMailLine className="h-auto w-7 min-w-[28px]" />
        </a>
      </div>
    </>
  );
};

export default Footer;
