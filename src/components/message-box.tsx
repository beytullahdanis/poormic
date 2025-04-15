"use client"
import { ArrowLeftIcon, Info, Send } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    Avatar
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useRef, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

export function MessageBox({ username, onBack }: { username: string | null, onBack: () => void }) {
    const [messages, setMessages] = useState([
        {
            role: "agent",
            content: "Hi, how can I help you today?",
        },
        {
            role: "user",
            content: "Hey, I'm having trouble with my account.",
        },
        {
            role: "agent",
            content: "What seems to be the problem?",
        },
        {
            role: "user",
            content: "I can't log in.",
        },
    ])
    const [input, setInput] = useState("")
    const inputLength = input.trim().length
    const bottomRef = useRef<HTMLDivElement | null>(null);


    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault()
            if (inputLength === 0) return
            setMessages([
                ...messages,
                {
                    role: "user",
                    content: input,
                },
            ])
            setInput("")
        }
    }

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <Card className="h-full border-dashed gap-0">
            <CardHeader className="flex flex-row items-center border-b border-dashed gap-3">
                <Button
                    variant="outline"
                    size="icon"
                    className="hidden max-lg:flex"
                    onClick={onBack}>
                    <ArrowLeftIcon className="size-5" />
                </Button>
                <div className="flex items-center space-x-3">
                    <Avatar className="size-12 max-sm:hidden">
                        <Image src="https://github.com/9.png" width={100} height={100} alt="Image" />
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium leading-none break-all line-clamp-1">{username ? username : "Damon Albarn"}</p>
                        <p className="text-sm text-muted-foreground break-all line-clamp-1">m@example.com</p>
                    </div>
                </div>
                <TooltipProvider delayDuration={0}>
                    <Dialog>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <DialogTrigger asChild>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        className="ml-auto rounded-full"
                                    // onClick={() => setOpen(true)}
                                    >
                                        <Info />
                                        <span className="sr-only">Details</span>
                                    </Button>
                                </DialogTrigger>
                            </TooltipTrigger>
                            <TooltipContent sideOffset={1}>Details</TooltipContent>
                        </Tooltip>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Conversation info</DialogTitle>
                                <DialogDescription className="mb-2">
                                    What do you want do with this conversation?
                                </DialogDescription>
                            </DialogHeader>
                            <div className="w-full space-y-3">
                                <Button className="w-full" variant="secondary" >
                                    Block @sofia.davis
                                </Button>
                                <Button className="w-full" variant="secondary">
                                    Block DMs
                                </Button>
                                <Button className="w-full" variant="destructive">
                                    Delete Conversation
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </TooltipProvider>
            </CardHeader>
            <CardContent className="h-full overflow-auto py-6">
                <div className="space-y-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex w-fit max-w-[65%] flex-col gap-2 rounded-xl px-3 py-2.5 text-sm break-normal",
                                message.role === "user"
                                    ? "ml-auto bg-primary text-primary-foreground"
                                    : "bg-muted"
                            )}
                        >
                            {message.content}
                        </div>
                    ))}
                </div>
                <div ref={bottomRef} />
            </CardContent>
            <CardFooter className="sticky bottom-0 border-t border-dashed z-50 dark:bg-neutral-950">
                <form
                    onSubmit={(event) => {
                        event.preventDefault()
                        if (inputLength === 0) return
                        setMessages([
                            ...messages,
                            {
                                role: "user",
                                content: input,
                            },
                        ])
                        setInput("")
                    }}
                    className="flex w-full items-center space-x-1.5"
                >
                    <Textarea
                        id="message"
                        placeholder="Type your message..."
                        className="resize-none min-h-14 max-h-20"
                        autoComplete="off"
                        maxLength={2000}
                        value={input}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button type="submit" variant="outline" size="lg" disabled={inputLength === 0} className="w-14 h-14">
                        <Send />
                        <span className="sr-only">Send</span>
                    </Button>
                </form>
            </CardFooter>
        </Card>
    )
}