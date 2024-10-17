"use client";
import { CostumeLogo } from "@/components/atoms/costume-logo/CostumeLogo";
import { HamburgerMenu } from "@/components/atoms/hamburger-menu/HamburgerMenu";
import { cva } from "class-variance-authority";
import React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ListMenu } from "@/components/atoms/list-menu/ListMenu";
export const HeaderSection = () => {
  const listMenu = [
    { label: "Home", link: "/home" },
    { label: "About", link: "/about" },
    { label: "Service", link: "/service" },
    { label: "Blog", link: "/blog" },
    { label: "Contact Us", link: "/contact-us" },
  ];
  const HeaderSectionStyle = cva(
    "flex justify-between px-3 py-2 align-middle items-center"
  );

  return (
    <div className={HeaderSectionStyle()}>
      <CostumeLogo variant="primary" logoName="Electrical" />
      <HamburgerMenu variant="primary" listMenu={listMenu} />
      <ListMenu listMenu={listMenu} />
    </div>
  );
};
