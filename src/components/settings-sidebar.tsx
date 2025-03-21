"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string
        title: string
    }[]
}

const items = [
    {
        title: "Profile",
        href: "/settings/profile",
    },
    {
        title: "Account",
        href: "/settings/account",
    },
    {
        title: "Appearance",
        href: "/settings/appearance",
    },
    {
        title: "Notifications",
        href: "/settings/notifications",
    },
]

export function SettingsSidebar({ className }: React.ComponentProps<"nav">) {
    const pathname = usePathname()

    return (
        <nav className={cn("flex max-sm:flex-col lg:w-60 space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)}>
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        pathname === item.href ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline",
                        "justify-start",
                    )}
                >
                    {item.title}
                </Link>
            ))}
        </nav>
    )
}

