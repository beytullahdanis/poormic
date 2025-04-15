"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, MailPlus, Search, Settings2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command'
import { set } from 'react-hook-form'
import NotificationDot from './NotificationDot'

const items =
    [
        {
            id: 1,
            name: "ahmet",
            username: "ahmetyilmaz",
            avatar: "/placeholder.svg",
            message: "Proje için toplantı saati ne zaman?",
            time: "Bugün 10:30",
            unread: false,
            online: true,
        },
        {
            id: 2,
            name: "Mehmet",
            username: "mehmetdemir",
            avatar: "/placeholder.svg",
            message: "Dosyaları gönderdim, kontrol eder misin?",
            time: "Dün",
            unread: false,
            online: false,
        },
        {
            id: 3,
            name: "6snorlax",
            username: "snorlax9",
            avatar: "/placeholder.svg",
            message: "Teşekkürler, yarın görüşürüz!",
            time: "Dün",
            unread: false,
            online: true,
        },
        {
            id: 4,
            name: "Algoritma Proje Grubu",
            username: "algoritma-proje",
            avatar: "/placeholder.svg",
            message: "Ali: Ödev teslim tarihi uzatıldı mı? Bu konuda bir bilgin var mı?",
            time: "Pazartesi",
            unread: true,
            online: false,
            isGroup: true,
        },
        {
            id: 5,
            name: "Zeynep Şahin",
            username: "zeynepsahin",
            avatar: "/placeholder.svg",
            message: "Sunumu hazırladım, inceleyebilir misin?",
            time: "Pazartesi",
            unread: true,
            online: false,
        },
        {
            id: 6,
            name: "Burak Özdemir",
            username: "burakozdemir",
            avatar: "/placeholder.svg",
            message: "Valorant oynayalım mı bu akşam?",
            time: "Geçen hafta",
            unread: true,
            online: true,
        },
        {
            id: 7,
            name: "Matematik Proje",
            username: "matematik-proje",
            avatar: "/placeholder.svg",
            message: "Selin: Herkes ödevini tamamladı mı?",
            time: "08/2024",
            unread: true,
            online: false,
            isGroup: true,
        },
    ]
const users = [
    {
        name: "Olivia Martin",
        email: "m@example.com",
        avatar: "/avatars/01.png",
    },
    {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        avatar: "/avatars/03.png",
    },
    {
        name: "Emma Wilson",
        email: "emma@example.com",
        avatar: "/avatars/05.png",
    },
    {
        name: "Jackson Lee",
        email: "lee@example.com",
        avatar: "/avatars/02.png",
    },
    {
        name: "William Kim",
        email: "will@email.com",
        avatar: "/avatars/04.png",
    },
] as const

type User = (typeof users)[number]

export default function MessageList({ onSelect }: { onSelect: (username: string) => void }) {
    const [open, setOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState<User>()

    return (
        <>
            <div className="flex items-center justify-between border-b border-dashed px-4 py-3">
                <h2 className="text-xl font-semibold tracking-tight">Messages</h2>
                <div className='flex gap-1'>
                    <TooltipProvider delayDuration={0}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="ml-auto rounded-full"
                                >
                                    <Settings2 className="size-5" />
                                    <span className="sr-only">Settings</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent sideOffset={1}>Settings</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider delayDuration={0}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="ml-auto rounded-full"
                                    onClick={() => setOpen(true)}
                                >
                                    <MailPlus className="size-5" />
                                    <span className="sr-only">New message</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent sideOffset={1}>New message</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
            <div className="px-4 py-3">
                <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <Input placeholder="Search" className="pl-8" />
                </div>
            </div>
            <ScrollArea className="flex-1 overflow-auto">
                <div className="flex flex-col gap-2 p-4 pt-0">
                    {items.map((item, index) => (
                        <button
                            key={item.id}
                            className={cn(
                                "flex flex-col items-start gap-2 rounded-lg border border-dashed p-3 text-left text-sm transition-all hover:bg-accent cursor-pointer",
                                // mail.selected === item.id && "bg-muted"
                            )}
                            onClick={() =>
                                onSelect(item.username)
                            }
                        >
                            <div className='flex gap-2.5 items-center'>
                                <div>
                                    <Image src={`https://github.com/${index + 17}.png`} alt="Avatar" width={68} height={68} className="rounded-full" />
                                </div>
                                <div className="flex w-full flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <div className="flex justify-start items-center gap-1">
                                            <div className="text-sm font-bold line-clamp-1 break-all">{item.name}</div>
                                            <div className="text-sm font-light line-clamp-1 opacity-70 break-all">@{item.username}</div>
                                        </div>
                                        <div>
                                            {!item.unread && (
                                                <NotificationDot />
                                            )}
                                        </div>
                                        {/* <div
                                            className={cn(
                                                "ml-auto text-xs",
                                                 mail.selected === item.id
                                                     ? "text-foreground"
                                                     : "text-muted-foreground"
                                            )}
                                        >
                                             {formatDistanceToNow(new Date(item.date), {
                                                    addSuffix: true,
                                                })}
                                        </div> */}
                                    </div>
                                    <div className="text-sm text-muted-foreground line-clamp-1 flex-auto">
                                        <p>{item.message}</p>
                                    </div>
                                    <div className="text-xs text-muted-foreground font-normal">{item.time}</div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </ScrollArea>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="gap-0 p-0 outline-none">
                    <DialogHeader className="px-4 pb-4 pt-5">
                        <DialogTitle>New message</DialogTitle>
                        <DialogDescription>
                            Select a user to start a conversation.
                        </DialogDescription>
                    </DialogHeader>
                    <Command className="overflow-hidden rounded-t-none border-t bg-transparent">
                        <CommandInput placeholder="Search user..." />
                        <CommandList>
                            <CommandEmpty>No users found.</CommandEmpty>
                            <CommandGroup className="p-2">
                                {users.map((user) => (
                                    <CommandItem
                                        key={user.email}
                                        className="flex items-center px-2"
                                        onSelect={() => {
                                            return selectedUser == user ? setSelectedUser(undefined) : setSelectedUser(user)
                                        }
                                        }

                                    >
                                        <Avatar>
                                            <AvatarImage src={user.avatar} alt="Image" />
                                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="ml-2">
                                            <p className="text-sm font-medium leading-none">
                                                {user.name}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {user.email}
                                            </p>
                                        </div>
                                        {selectedUser == user ? (
                                            <Check className="ml-auto flex h-5 w-5 text-primary" />
                                        ) : null}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                    <DialogFooter className="flex items-center border-t p-4 sm:justify-between">
                        {selectedUser ? (
                            <div className="flex -space-x-2 overflow-hidden">
                                <Avatar
                                    key={selectedUser.email}
                                    className="inline-block border-2 border-background"
                                >
                                    <AvatarImage src={selectedUser.avatar} />
                                    <AvatarFallback>{selectedUser.name[0]}</AvatarFallback>
                                </Avatar>
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">
                                Select a user to add to this thread.
                            </p>
                        )}
                        <Button
                            disabled={selectedUser == null}
                            onClick={() => {
                                setOpen(false)
                            }
                            }
                        >
                            Continue
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
