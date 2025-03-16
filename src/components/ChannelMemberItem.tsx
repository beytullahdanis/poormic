import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Ban, Mic, MicOff, MoreHorizontal, Settings2 } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Slider } from '@/components/ui/slider'
import Image from 'next/image'

type User = {
    user: {
        id: number;
        name: string;
        email: string;
        avatar: string;
        talking: boolean;
        isMuted: boolean;
    }
}

const ChannelMemberItem = ({ user }: User) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='outline-none'>
                <div
                    key={user.id}
                    className="flex flex-col h-40 justify-center items-center rounded-2xl gap-2 transition-all dark:bg-neutral-900 border-2 border-dashed
                     dark:border-neutral-800 dark:hover:border-neutral-700 hover:cursor-pointer transform"
                >
                    <div className="relative">
                        <Avatar className={`h-16 w-16 ${user.talking && "outline-4 outline-green-500"}`}>
                            <Image src={user.avatar} width={64} height={64} alt={user.name} quality={100} />
                        </Avatar>
                        {user.isMuted ?
                            <div className="absolute -bottom-1 -right-1 rounded-full bg-destructive-foreground p-1">
                                <MicOff className="size-4" />
                            </div>
                            :
                            <div className={`absolute -bottom-1 -right-1 rounded-full p-1 ${user.talking ? "bg-green-500" : "bg-neutral-700"}`}>
                                <Mic className="size-4" />
                            </div>
                        }
                    </div>
                    <div>
                        <span className="text-center font-medium text-sm">{user.name}</span>
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                sideOffset={-25}
                className="w-48 rounded-lg"
            // side={isMobile ? "bottom" : "right"}
            // align={isMobile ? "end" : "start"}
            >
                <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-8 w-8 rounded-lg">
                            <AvatarImage src={""} alt={""} />
                            <AvatarFallback className="rounded-lg">JD</AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-medium">josh3239</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="flex flex-col items-start gap-2.5 pb-2">
                    <span>Ses Seviyesi</span>
                    <Slider defaultValue={[95]} max={100} step={1} />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                    <MicOff />
                    <span>Sustur</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant='destructive' className="cursor-pointer">
                    <Ban />
                    <span>Kanaldan At</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ChannelMemberItem;