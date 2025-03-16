import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { BadgeCheck, Bell, LogOut, Settings, Sparkles, User, UserRound } from 'lucide-react'

export default function AvatarDropdown() {
    return (
        <div className="flex items-center gap-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-9 w-9 rounded-full cursor-pointer">
                        <Avatar className="w-9 h-9">
                            <AvatarImage src="" />
                            <AvatarFallback>BD</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                    // side={isMobile ? "bottom" : "right"}
                    align="end"
                    sideOffset={4}
                >
                    <DropdownMenuLabel className="p-0 font-normal">
                        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src={""} alt={""} />
                                <AvatarFallback className="rounded-lg">BD</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">Beytullah Danış</span>
                                <span className="truncate text-xs">beyto@gmail.com</span>
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem className='cursor-pointer'>
                            <Sparkles />
                            Pro'ya Yükselt
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem className='cursor-pointer'>
                            <UserRound />
                            Hesabın
                        </DropdownMenuItem>
                        <DropdownMenuItem className='cursor-pointer'>
                            <Bell />
                            Bildirimler
                        </DropdownMenuItem>
                        <DropdownMenuItem className='cursor-pointer'>
                            <Settings />
                            Ayarlar
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant='destructive' className='cursor-pointer'>
                        <LogOut />
                        <span>Çıkış Yap</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
