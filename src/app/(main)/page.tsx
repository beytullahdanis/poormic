import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus, PlusCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <PlusCircle className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Hemen yeni bir kanal oluştur</h1>
        <p className="max-w-md text-muted-foreground">
          Kanallar sayesinde arkadaşlarınla ve takım üyeleriyle kolayca iletişim kurabilirsin.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" size="lg" className="mt-2 cursor-pointer" >
              Yeni Kanal Oluştur
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
      </div>
    </div>
  );
}
