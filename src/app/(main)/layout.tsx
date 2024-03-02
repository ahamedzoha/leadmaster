import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>{children}</ClerkProvider>
  );
};

export default Layout;
