'use client';

import { VariantProps, cva } from "class-variance-authority";
import React, { FC } from "react";
import { cn } from "@/utils/cn";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LinkProps } from 'next/link';

const navItemVariants = cva(
  `text-center block border py-10 px-4`,
  {
      variants: {
          variant: {
              primary: "text-blue-500 border-white bg-white hover:border-gray-100 hover:bg-gray-100",
              active: "text-white border-blue-500 bg-blue-500 hover:bg-blue-700",
              disabled: "bg-yellow-500",
          },
      },
      defaultVariants: {
          variant: "primary",
      },
  }
);

export interface NavItems {
  name: string;
  href: string;
}

interface NavItemProps extends LinkProps, VariantProps<typeof navItemVariants> {
  children?: React.ReactNode;
  className?: string;
}

const NavBar = ({ navItems }: { navItems: NavItems[]}): JSX.Element => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col w-full md:w-64 justify-center">
      <ul className="flex flex-col w-full h-fit">
        {navItems.map((navItem) => {
                return (
                  <NavItem key={navItem.name}
                  href={navItem.href}
                  variant={pathname === navItem.href ? "active" : "primary"}>{navItem.name}</NavItem>
                );
              })}
      </ul>
    </nav>
  )
}

const NavItem: FC<NavItemProps> = ({ children, variant, className, href }) => {
  return (
    <li>
      <Link
      className={cn(navItemVariants({ variant }), className)}
      href={href}
      >{children}</Link>
    </li>
  )
}

export default NavBar
