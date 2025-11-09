import type { PropsWithChildren } from "react";
import { Header } from "../components/Header";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex justify-center w-full max-w-xl px-4 py-8">{children}</div>
    </div>
  );
}
