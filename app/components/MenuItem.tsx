import Link from "next/link";
import type { MenuType } from "./menu.data";


interface Props {
    menuItem: MenuType
    isActive: boolean
}

export function MenuItem({menuItem, isActive}: Props){
    return (
         <Link className={isActive ? "text-white" : ''} href={menuItem.href}>{menuItem.name}</Link>
    )
}