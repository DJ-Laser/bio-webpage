import { PropsWithChildren } from "react";

export function Center({ children }: PropsWithChildren) {
  return (
    <div className="w-full flex flex-row justify-center items-center">
      {children}
    </div>
  );
}

export function BlockCenter({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      {children}
    </div>
  );
}

export function HMax({ children }: PropsWithChildren) {
  return (
    <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl">
      {children}
    </h1>
  );
}

export function H1({ children }: PropsWithChildren) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}

export function H2({ children }: PropsWithChildren) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export function H3({ children }: PropsWithChildren) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function H4({ children }: PropsWithChildren) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export function P({ children }: PropsWithChildren) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

export function Blockquote({ children }: PropsWithChildren) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
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

export function InlineCode({ children }: PropsWithChildren) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}

export function Lead({ children }: PropsWithChildren) {
  return <p className="text-xl text-muted-foreground">{children}</p>;
}

export function Small({ children }: PropsWithChildren) {
  return <small className="text-sm font-medium leading-none">{children}</small>;
}

export function Muted({ children }: PropsWithChildren) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}
