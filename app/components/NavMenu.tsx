"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import React from "react";

const destinations = [
  {
    name: "nepal",
    activity: ["trekking", "tours", "safari", "rafting", "package"],
  },
  { name: "india", activity: ["package"] },
  { name: "tibet", activity: ["trekking", "package"] },
];

function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {destinations.map((country, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger>
              <Link href={`/${country.name}`}>
                <span className="text-sm">{country.name.toUpperCase()}</span>
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-2 md:grid-cols-1">
                {country.activity.map((activity, index) => (
                  <Link
                    href={`/${country.name}/${activity}`}
                    className="capitalize w-full h-full"
                    key={index}
                  >
                    <ListItem title={activity} />{" "}
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
