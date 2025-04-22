import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme/theme-switch";

export const Navbar = () => {
  return (
    <>
      <HeroUINavbar
        maxWidth="xl"
        position="sticky"
        className="bg-background shadow-md py-2 px-4 z-50"
      >
        <NavbarContent justify="start" className="flex items-center gap-4">
          <NavbarBrand>
            <p className="font-bold text-xl text-primary">MemeDex</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden lg:flex gap-10" justify="center">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "transition-colors hover:text-primary text-lg font-medium"
                )}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end" className="hidden sm:flex">
          <NavbarItem>
            <ThemeSwitch className="sm:hidden" />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="lg:hidden" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu className="bg-background px-4 py-6">
          <div className="flex flex-col gap-4">
            {siteConfig.navItems.map((item, index) => (
              <NavbarMenuItem key={`${item.href}-${index}`}>
                <Link
                  href={item.href}
                  className="text-lg text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </HeroUINavbar>
    </>
  );
};
