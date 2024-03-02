"use client";
import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const RootProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    // <ClerkProvider appearance={{ baseTheme: dark }}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
    // </ClerkProvider>
  );
};

export default RootProviders;
