"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

import { siteConfig } from "@/config/site";
import BrandLogo from "@/public/brand-logo.png";
import { ButtonWhatsapp } from "@/components/button-whatsapp";
import { ButtonInstagram } from "@/components/button-instagram";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <NextUINavbar
      isBlurred
      className="border-b border-white/10 bg-blue-dark/95 text-white shadow-[0_12px_40px_rgba(2,21,51,.22)]"
      classNames={{
        wrapper: "h-[88px] px-6 sm:px-8",
      }}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit">
          <NextLink
            aria-label="Página inicial — Dr. César Benetton"
            className="flex items-center justify-start py-2"
            href="/"
          >
            <Image
              priority
              unoptimized
              alt="César Benetton — ortopedista pé e tornozelo"
              className="h-auto w-[168px] select-none object-contain sm:w-[188px]"
              height={74}
              src={BrandLogo}
              width={188}
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden basis-1/5 sm:flex sm:basis-full"
        justify="end"
      >
        <ul className="ml-2 hidden items-center justify-start gap-1 lg:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "relative px-3 py-5 text-[13px] font-semibold capitalize tracking-wide text-white/72 transition after:absolute after:inset-x-3 after:bottom-3 after:h-px after:origin-left after:scale-x-0 after:bg-blue-light after:transition-transform hover:text-white hover:after:scale-x-100",
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
        <NavbarItem className="hidden gap-2 lg:flex">
          <ButtonWhatsapp />
          <ButtonInstagram iconOnly />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 lg:hidden" justify="end">
        <NavbarMenuToggle className="text-white" />
      </NavbarContent>

      <NavbarMenu className="bg-blue-dark/[.99] px-6 pt-8">
        <div className="mt-2 flex flex-col gap-3">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="rounded-xl border border-white/5 px-4 py-3 font-bold capitalize text-white transition hover:border-white/10 hover:bg-white/5"
                href={item.href}
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
