import { PropsWithChildren } from "react";
import { HMax, BlockCenter } from "./typography";
import headerBg from "@assets/header.jpg";

export function SiteHeader() {
  return (
    <>
      <div className="relative w-full h-40">
        <div className="absolute w-full h-full z-20">
          <BlockCenter>
            <HMax style="text-lime-400 dark:text-lime-400">
              Nature Conservancy
            </HMax>
          </BlockCenter>
        </div>

        <img
          src={headerBg}
          className="w-full h-full object-cover brightness-[.6]"
        />
      </div>
    </>
  );
}

export function Body({ children }: PropsWithChildren) {
  return (
    <>
      <SiteHeader />
      <div
        style={{
          padding: "1rem",
        }}
      >
        {children}
      </div>
    </>
  );
}
