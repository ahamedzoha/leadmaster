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
    </div>
  );
};

export default NavBar;
