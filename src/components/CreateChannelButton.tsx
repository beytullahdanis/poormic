import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import React from 'react'
import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function CreateChannelButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full flex justify-start py-4 dark:bg-neutral-900 dark:hover:bg-neutral-800 cursor-pointer">
                    <Plus />
                    <span>Yeni kanal oluştur</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Kanal Oluştur</DialogTitle>
                    <DialogDescription>
                        Oluşturmak istediğiniz kanala bir isim bulun.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-2">
                    <div className="grid items-center gap-4">
                        <Input id="name" type="text" placeholder="Kanal Adı" />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary" className="cursor-pointer" disabled={false}>Oluştur</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}