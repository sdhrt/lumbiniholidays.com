"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import React from "react";

const destinations = [
  {
    name: "nepal",
    activity: ["trekking", "tours", "safari", "rafting"],
  },
  { name: "international", activity: ["india", "bhutan"] },
  { name: "company", activity: ["about us", "our team", "why with us?"] },
];

function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {destinations.map((country, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger>
              <Link href={`/${country.name}`}>
                <span className="capitalize">{country.name}</span>
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[350px] gap-1 p-2">
                {country.activity.map((activity, index) => (
                  <Link
                    href={`/${country.name}/${activity.replace(/\s+/g, "_")}`}
                    className="capitalize w-full h-full"
                    key={index}
                  >
                    <ListItem title={`${activity}`} />{" "}
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenuViewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <span
          ref={ref}
          className={cn(
            "flex justify-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-nowrap text-sm leading-snug text-muted-foreground hover:text-black align-middle">
            {children}
          </p>
        </span>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavMenu;
