import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function Navbar() {
    return (
        <NavigationMenuItem>
            <Link href="/about" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Me
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    )
}