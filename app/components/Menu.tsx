"use client";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";
import { MenuItem } from "./MenuItem";
import { MENU } from "./menu.data";

export function Menu() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 text-white/80">
        {MENU.map(menuItem=> 
        <MenuItem 
            key={menuItem.name}
            menuItem={menuItem} 
            isActive={!!match(menuItem.href)(pathname)}/>)}
    </nav>
  );
}
