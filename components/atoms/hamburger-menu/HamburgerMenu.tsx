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
export const HamburgerMenu = ({
  variant,
  listMenu,
  ...rest
}: {
  variant?: any;
  listMenu?: any;
}) => {
  return (
    <Menubar className={buttonStyles({ variant })}>
      <MenubarMenu>
        <MenubarTrigger data-testid="custom-element" {...rest}>
          <IoMdMenu size={iconStyles()} className={iconStyles({ variant })} />
        </MenubarTrigger>
        <MenubarContent>
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
