import { SignUpForm } from '@/components/signup-form'
import { Mic2 } from 'lucide-react'

export default function SignUp() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <div className="flex items-center gap-2 self-center font-medium select-none">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-700 text-white">
                        <Mic2 className="size-4" />
                    </div>
                    poormic
                </div>
                <SignUpForm />
            </div>
        </div>
    )
}