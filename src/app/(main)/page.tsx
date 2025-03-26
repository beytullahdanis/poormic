import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus, PlusCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home - poormic'
}

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <PlusCircle className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Create a channel to get started</h1>
        <p className="max-w-md text-muted-foreground">
          You can easily communicate with your friends and team members by creating a channel.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" size="lg" className="mt-2" >
              Create New Channel
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Channel</DialogTitle>
              <DialogDescription>
                Find a name for the channel you want to create.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-2">
              <div className="grid items-center gap-4">
                <Input id="name" type="text" placeholder="Channel Name" />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary" disabled={false}>Create Channel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog >
      </div>
    </div>
  );
}
