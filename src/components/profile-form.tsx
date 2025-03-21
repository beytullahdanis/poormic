"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const profileFormSchema = z.object({
    username: z
        .string()
        .min(4, {
            message: "Username must be at least 4 characters.",
        })
        .max(30, {
            message: "Username must not be longer than 30 characters.",
        }),
    email: z.string().optional(),
    bio: z.string().max(160).optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function ProfileForm() {
    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        defaultValues: {
            username: "beytullah",
            email: "",
            bio: "I own a computer.",
        },
        mode: "onChange",
    })

    function onSubmit(data: ProfileFormValues) {
        console.log(data)
    }

    return (
        <div className="space-y-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="beytullah" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name. It can be your real name or a pseudonym. You can only change this
                                    once every 30 days.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="beytullahdanis@outlook.com" {...field} disabled={true} />
                                </FormControl>
                                <FormDescription>You can manage verified email addresses in your email settings.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bio</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Tell us a little bit about yourself" className="resize-none" {...field} />
                                </FormControl>
                                <FormDescription>You can @mention other users and organizations to link to them.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Update profile</Button>
                </form>
            </Form>
        </div>
    )
}

