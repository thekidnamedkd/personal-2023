import { Popover } from "@base-ui/react/popover";
import { useEffect, useRef, useState } from "react";
import {
  RiGithubFill,
  RiMailLine,
  RiSpotifyFill,
  RiTwitterFill,
} from "react-icons/ri";

import { ArenaIcon } from "../components/IconPack";

const Footer = () => {
  const [showEmailPopover, setShowEmailPopover] = useState(false);
  const hideTimerRef = useRef<number | null>(null);

  const handleEmailClick = () => {
    const user = "whomst";
    const domain = "kevind.xyz";
    const email = `${user}@${domain}`;

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(email).catch(() => undefined);
    }

    setShowEmailPopover(true);
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }
    hideTimerRef.current = window.setTimeout(() => {
      setShowEmailPopover(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

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
          className="text-black no-underline hover:text-[#9ee97a]"
          href="https://github.com/thekidnamedkd"
          target="_blank"
          rel="noreferrer"
        >
          <RiGithubFill className="h-auto w-7 min-w-[28px]" />
        </a>
        <a
          className="text-black no-underline hover:text-[#9ee97a]"
          href="https://www.twitter.com/thekidnamedkd"
          target="_blank"
          rel="noreferrer"
        >
          <RiTwitterFill className="h-auto w-7 min-w-[28px]" />
        </a>
        <a
          className="text-black no-underline hover:text-[#9ee97a]"
          href="https://open.spotify.com/user/kidnamedkd"
          target="_blank"
          rel="noreferrer"
        >
          <RiSpotifyFill className="h-auto w-7 min-w-[28px]" />
        </a>
        <a
          className="text-black no-underline hover:text-[#9ee97a]"
          href="https://www.are.na/kevin-davis"
          target="_blank"
          rel="noreferrer"
        >
          <ArenaIcon className="h-auto w-7 min-w-[28px]" />
        </a>
        <Popover.Root
          open={showEmailPopover}
          onOpenChange={setShowEmailPopover}
        >
          <Popover.Trigger
            className="inline-flex items-center text-black no-underline hover:text-[#9ee97a]"
            type="button"
            onClick={handleEmailClick}
            title="Copy email"
            aria-label="Copy email address"
          >
            <RiMailLine className="h-auto w-7 min-w-[28px]" />
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Positioner side="top" align="end" sideOffset={8}>
              <Popover.Popup className="rounded-[3px] border border-black bg-white px-2 py-1 text-xs shadow-[2px_2px_0_black]">
                Copied whomst@kevind.xyz
                <Popover.Arrow className="flex h-2 w-3 items-end justify-center">
                  <span className="h-2 w-2 rotate-45 border-b border-r border-black bg-white" />
                </Popover.Arrow>
              </Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </>
  );
};

export default Footer;
