import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ListMenuType } from "./ListMenu.type";
import { navigationStyle } from "./ListMenu.style";
export const ListMenu = ({ listMenu }: ListMenuType) => {
  const displayMenu = listMenu.map((item) => (
    <NavigationMenuItem key={item.link}>
      <Link href={item.link} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {item.label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  ));
  return (
    <NavigationMenu className={navigationStyle()}>
      <NavigationMenuList>{displayMenu}</NavigationMenuList>
    </NavigationMenu>
  );
};
