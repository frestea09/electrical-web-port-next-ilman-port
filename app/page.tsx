import { HamburgerMenu } from "@/components/atoms/hamburger-menu/HamburgerMenu";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HamburgerMenu
        listMenu={[
          { label: "satu", link: "/" },
          { label: "dua", link: "/" },
        ]}
      />
    </>
  );
}
