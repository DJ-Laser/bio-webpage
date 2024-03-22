import { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";

export function Link({ children, to }: PropsWithChildren<{ to: string }>) {
  return (
    <span className="text-blue-600 hover:underline visited:text-purple-600">
      <RouterLink to={to}>{children}</RouterLink>
    </span>
  );
}
