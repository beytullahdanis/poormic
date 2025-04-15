"use client"

import { MessageBox } from '@/components/message-box'
import MessageList from '@/components/message-list'
import { useEffect, useState } from 'react'


export default function MessagesPage() {
    const [selectedConversation, setSelectedConversation] = useState<string | null>(null)
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const px = 1024

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < px);
            console.log("rendered")
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [])

    return (
        <div className='flex w-full h-screen p-4 gap-3 overflow-hidden'>
            <div className={`h-full flex flex-auto flex-col border border-dashed rounded-lg w-1/3 ${selectedConversation && isSmallScreen ? "hidden" : ""}`}>
                <MessageList onSelect={setSelectedConversation} />
            </div>
            <div className={`flex flex-col justify-around w-2/3 flex-auto ${!selectedConversation && isSmallScreen ? "hidden" : ""}`}>
                <MessageBox username={selectedConversation} onBack={() => setSelectedConversation(null)} />
            </div>
        </div>
    )
}
