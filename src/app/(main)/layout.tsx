"use client";

import { usePathname } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar"
import AvatarDropdown from "@/components/AvatarDropdown"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    const isChannelPage = pathname.startsWith("/channel/") || pathname.startsWith("/message");

    return (
        <SidebarProvider className={isChannelPage ? "max-h-screen" : "max-h-full"}>
            <AppSidebar />
            <SidebarInset>
                <header className="flex sticky top-0 z-50 bg-neutral-950 rounded-t-lg overflow-hidden h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-dashed">
                    <div className="w-full flex items-center justify-between gap-2 px-4">
                        <div className="flex items-center gap-2">
                            <SidebarTrigger className="-ml-1 cursor-pointer" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="#">
                                            Channel
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>beytullahdanis</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                        <AvatarDropdown />
                    </div>
                </header>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}