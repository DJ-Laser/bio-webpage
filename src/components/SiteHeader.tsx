import { HMax, BlockCenter } from "./typography";
import headerBg from "@assets/header.jpg";

export function SiteHeader() {
  return (
    <div className="relative w-full h-40">
      <div className="absolute w-full h-full">
        <BlockCenter>
          <HMax>Nature Conservancy</HMax>
        </BlockCenter>
      </div>

      <img src={headerBg} className="w-full h-full object-cover" />
    </div>
  );
}
