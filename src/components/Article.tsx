import { PropsWithChildren } from "react";
import { SiteHeader } from "../components/SiteHeader";

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
