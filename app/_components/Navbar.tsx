"use client";

import Image from "next/image";
import logo from "../assets/mcdan.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { label: "Tracking", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <nav className="h-[70px] border-b px-2 md:px-8 flex items-center justify-between">
      <Link href="/">
        <Image src={logo} alt="Brand Logo" width={60} height={60} />
      </Link>

      <ul className="flex items-center gap-x-4 md:gap-x-8">
        {links.map((link, index) => (
          <li
            key={index}
            className={cn(
              "",
              currentPath === link.href && "font-bold text-sky-600"
            )}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
