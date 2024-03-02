import { ModeToggle } from "@/components/global/mode-toggle.component";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface INavBarProps {
  user?: IUser;
}
const NavBar: FC<INavBarProps> = ({ user }) => {
  return (
    <div className="p-4 flex items-center justify-between relative">
      <aside className="flex items-center gap-2">
        <Image
          src="/assets/plura-logo.svg"
          alt="Convex logo"
          width={40}
          height={40}
        />
        <span className="text-xl font-bold">Convex.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[50%] -translate-y-[50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href="/dashboard">Pricing</Link>
          <Link href="/dashboard">About</Link>
          <Link href="/dashboard">Documentation</Link>
          <Link href="/dashboard">Features</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition-all"
          href="/agency"
        >
          Log In
        </Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  );
};

export default NavBar;
