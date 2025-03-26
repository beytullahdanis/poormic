import ChannelControlItem from "@/components/ChannelControlItem";
import ChannelMemberItem from "@/components/ChannelMemberItem";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Channel - poormic'
}

export default async function Page({ params }: {
    params: Promise<{ id: number }>
}) {
    const { id } = await params

    return (
        <div className="flex h-full flex-col justify-between overflow-hidden">
            <div className="overflow-auto p-4">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {data.users.map((user, index) => (
                        <ChannelMemberItem key={index} user={user} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center align-middle p-4 border-t border-dashed">
                <ChannelControlItem />
            </div>
        </div>
    );
}

const data = {
    users: [
        {
            id: 1,
            name: "You",
            email: "m@example.com",
            avatar: "https://github.com/13.png",
            talking: true,
            isMuted: false,
        },
        {
            id: 2,
            name: "josh3239",
            email: "m@example.com",
            avatar: "https://github.com/101.png",
            talking: false,
            isMuted: false,
        },
        {
            id: 3,
            name: "dhooker",
            email: "m@example.com",
            avatar: "https://github.com/8.png",
            talking: false,
            isMuted: false,
        },
        {
            id: 4,
            name: "dnpoirer",
            email: "m@example.com",
            avatar: "https://github.com/shadcn.png",
            talking: true,
            isMuted: false,
        },
        {
            id: 5,
            name: "halisahaadam",
            email: "m@example.com",
            avatar: "https://github.com/1.png",
            talking: false,
            isMuted: true,
        },
        {
            id: 6,
            name: "6snorlax9",
            email: "m@example.com",
            avatar: "https://github.com/5.png",
            talking: false,
            isMuted: false,
        },
        {
            id: 7,
            name: "imanishi",
            email: "m@example.com",
            avatar: "https://github.com/3.png",
            talking: false,
            isMuted: false,
        },
        {
            id: 8,
            name: "dhooker",
            email: "m@example.com",
            avatar: "https://github.com/8.png",
            talking: false,
            isMuted: true,
        },
        {
            id: 9,
            name: "imanishi",
            email: "m@example.com",
            avatar: "https://github.com/3.png",
            talking: false,
            isMuted: false,
        },
        {
            id: 10,
            name: "dhooker",
            email: "m@example.com",
            avatar: "https://github.com/8.png",
            talking: false,
            isMuted: false,
        },

    ],
}