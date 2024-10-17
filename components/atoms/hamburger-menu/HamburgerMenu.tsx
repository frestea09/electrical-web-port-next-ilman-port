import { MenubarTrigger } from "@radix-ui/react-menubar";
import {
  Menubar,
  MenubarItem,
  MenubarMenu,
  MenubarContent,
} from "../../ui/menubar";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { buttonStyles, iconStyles } from "./Hamburger.styles";
import { HamburgerMenuInterface } from "./HamburgerMenu.interface";
export const HamburgerMenu = ({
  variant = "default",
  listMenu,
  ...rest
}: HamburgerMenuInterface) => {
  return (
    <Menubar className={buttonStyles({ variant })}>
      <MenubarMenu>
        <MenubarTrigger data-testid="custom-element" {...rest}>
          <IoMdMenu size={iconStyles()} className={iconStyles({ variant })} />
        </MenubarTrigger>
        <MenubarContent className="mx-5 my-3">
          {listMenu?.map((item: any) => (
            <MenubarItem key={item.label}>
              <Link href={item.link}>{item.label}</Link>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
