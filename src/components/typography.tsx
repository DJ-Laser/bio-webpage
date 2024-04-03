import { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";
import { largeText, smallText } from "./theme/colors";
import { cn } from "@/lib/utils";

interface TypographyProps {
  style?: string;
}

export function Link({
  children,
  to,
}: PropsWithChildren<{ to: string } & TypographyProps>) {
  return (
    <span className="text-blue-600 hover:underline visited:text-purple-600">
      <RouterLink to={to}>{children}</RouterLink>
    </span>
  );
}

export function UrlLink({ to }: { to: string } & TypographyProps) {
  return (
    <span className="text-blue-600 hover:underline visited:text-purple-600">
      <RouterLink to={to}>{to}</RouterLink>
    </span>
  );
}

export function Center({ children }: PropsWithChildren) {
  return (
    <div className={cn("w-full flex flex-row justify-center items-center")}>
      {children}
    </div>
  );
}

export function BlockCenter({ children }: PropsWithChildren) {
  return (
    <div
      className={cn("w-full h-full flex flex-row justify-center items-center")}
    >
      {children}
    </div>
  );
}

export function Separation({ height = 10 }: { height?: number }) {
  return (
    <div
      className={cn("w-full")}
      style={{ height: 0.25 * height + "rem" }}
    ></div>
  );
}

export function HMax({ children, style }: PropsWithChildren<TypographyProps>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl",
        largeText,
        style
      )}
    >
      {children}
    </h1>
  );
}

export function H1({ children, style }: PropsWithChildren<TypographyProps>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        largeText,
        style
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, style }: PropsWithChildren<TypographyProps>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
        largeText,
        style
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, style }: PropsWithChildren<TypographyProps>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        largeText,
        style
      )}
    >
      {children}
    </h3>
  );
}

export function H4({ children, style }: PropsWithChildren<TypographyProps>) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        largeText,
        style
      )}
    >
      {children}
    </h4>
  );
}

export function P({ children, style }: PropsWithChildren<TypographyProps>) {
  return (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-3, [&:not(:last-child)]:mb-3",
        smallText,
        style
      )}
    >
      {children}
    </p>
  );
}

export function Blockquote({
  children,
  style,
}: PropsWithChildren<TypographyProps>) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", smallText, style)}>
      {children}
    </blockquote>
  );
}

export function Li({ children }: PropsWithChildren) {
  return <li>{children}</li>;
}

export function List({
  children,
  ordered,
}: PropsWithChildren<{ ordered: boolean }>) {
  return ordered ? (
    <ol className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ol>
  ) : (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
  );
}

export function InlineCode({
  children,
  style,
}: PropsWithChildren<TypographyProps>) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        smallText,
        style
      )}
    >
      {children}
    </code>
  );
}

export function Lead({ children, style }: PropsWithChildren<TypographyProps>) {
  return (
    <p className={cn("text-xl text-muted-foreground", smallText, style)}>
      {children}
    </p>
  );
}

export function Small({ children, style }: PropsWithChildren<TypographyProps>) {
  return (
    <small className={cn("text-sm font-medium leading-none", smallText, style)}>
      {children}
    </small>
  );
}

export function Muted({ children, style }: PropsWithChildren<TypographyProps>) {
  return (
    <p className={cn("text-sm text-muted-foreground", smallText, style)}>
      {children}
    </p>
  );
}
