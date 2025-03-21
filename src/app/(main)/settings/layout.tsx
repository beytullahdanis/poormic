import { SettingsSidebar } from "@/components/settings-sidebar"
import { Separator } from "@/components/ui/separator"

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="space-y-6 p-6 pb-16">
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
            </div>
            <Separator className="my-6" />
            <div className="w-full flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <SettingsSidebar />
                <div className="flex-1 lg:max-w-2xl">
                    {children}
                </div>
            </div>
        </div>
    )
}

