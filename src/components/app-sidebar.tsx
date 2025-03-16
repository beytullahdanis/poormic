"use client"

import * as React from "react"
import {
  AudioWaveform,
  Bell,
  Command,
  GalleryVerticalEnd,
  Home,
  Inbox,
  Mic,
  MicVocal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import CreateChannelButton from "./CreateChannelButton"
import Link from "next/link"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "poormic",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "poormic|",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Anasayfa",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Mesajlar",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Bildirimler",
      url: "#",
      icon: Bell,
    },
  ],
  projects: [
    {
      name: "Algoritma Proje ödevi grubu",
      url: "#",
      icon: Mic,
    },
    {
      name: "beytullah",
      url: "#",
      icon: Mic,
    },
    {
      name: "Proje IT",
      url: "#",
      icon: Mic,
    },
    {
      name: "valorant",
      url: "#",
      icon: Mic,
    },
    {
      name: "Matematik proje",
      url: "#",
      icon: Mic,
    },
    {
      name: "mezuniyet 2023-2024",
      url: "#",
      icon: Mic,
    },
    {
      name: "programlama",
      url: "#",
      icon: Mic,
    },
    {
      name: "kick",
      url: "#",
      icon: Mic,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full px-1 py-5" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                  <MicVocal className="size-4.5" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold text-[17.5px]">poormic</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <CreateChannelButton />
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  )
}
