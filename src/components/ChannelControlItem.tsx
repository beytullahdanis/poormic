"use client"
import React from 'react'
import { Button } from './ui/button'
import { Mic, MicOff, PhoneMissed, Settings, Settings2 } from 'lucide-react'

const ChannelControlItem = () => {
    const [micState, setMicState] = React.useState(true)

    return (
        <div className='flex items-center gap-5'>
            <Button variant={micState ? "secondary" : "destructive"} size="icon" className="h-[4.2rem] w-[4.2rem] rounded-full cursor-pointer transition-all transform" onClick={() => setMicState(!micState)}>
                {micState ? <Mic className="size-5" /> : <MicOff className="size-5" />}
            </Button>
            <Button variant="destructive" size="icon" className="h-[4.2rem] w-[4.2rem] rounded-full cursor-pointer">
                <PhoneMissed className="size-5" />
            </Button>
            <Button variant="secondary" size="icon" className="h-[4.2rem] w-[4.2rem] rounded-full cursor-pointer">
                <Settings className="size-5" />
            </Button>
        </div>
    )
}

export default ChannelControlItem