import NavBar from "@/components/site/navigation";
import { FC, PropsWithChildren } from "react";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="h-full">
      <NavBar />
      {children}
    </main>
  );
};

export default RootLayout;
