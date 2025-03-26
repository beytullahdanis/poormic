import { LoginForm } from "@/components/login-form";
import { Mic2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Login - poormic'
}

export default function Login() {
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <div className="flex items-center gap-2 self-center font-medium select-none">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-700 text-white">
                        <Mic2 className="size-4" />
                    </div>
                    poormic
                </div>
                <LoginForm />
            </div>
        </div>
    )
}