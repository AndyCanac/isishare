import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export function V0components() {
  return (
    <div className="grid md:grid-cols-[260px_1fr] min-h-screen w-full">
      <div className="flex-col hidden gap-2 text-foreground bg-background md:flex">
        <div className="sticky top-0 p-2">
          <Button variant="ghost" className="justify-start w-full gap-2 px-2 text-left">
            Nouveau chat
            <PenIcon/>
          </Button>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="grid gap-1 p-2 text-foreground">
            <div className="px-2 text-xs font-medium text-muted-foreground">Conversations</div>
            <Link
              href="#"
              className="flex-1 block p-2 overflow-hidden text-sm truncate transition-colors rounded-md whitespace-nowrap hover:bg-muted/50"
              prefetch={false}
            >
              Brainstorming ideas
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="sticky top-0 p-2">
        </div>
        <div className="flex flex-col items-start flex-1 max-w-2xl gap-8 px-4 mx-auto">
          <div className="flex items-start gap-4">
            <Avatar className="w-6 h-6 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-bold">You</div>
              <div className="prose text-muted-foreground">
                <p>Bonjour, pouvez-vous m'expliquer comment fonctionne l'aérodynamique des avions ?</p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Avatar className="w-6 h-6 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>OA</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-bold">ChatGPT</div>
              <div className="prose text-muted-foreground">
                <p>Bien sûr ! L'aérodynamique des avions fonctionne de la manière suivante :</p>
                <p>
                  Lorsque l'avion avance, l'air passe plus rapidement au-dessus des ailes qu'en dessous. Cela crée une
                  différence de pression : l'air au-dessus de l'aile a une pression plus faible que l'air en dessous.
                  Cette différence de pression génère une force vers le haut, appelée portance, qui permet à l'avion de
                  voler.
                </p>
                <p>
                  La forme des ailes, leur inclinaison et la vitesse de l'avion influencent la quantité de portance
                  générée. Les ingénieurs conçoivent soigneusement ces éléments pour optimiser les performances de vol.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-2xl w-full sticky bottom-0 mx-auto py-2 flex flex-col gap-1.5 px-4 bg-background">
          <div className="relative">
            <Textarea
              placeholder="Envoyer un message ..."
              name="message"
              id="message"
              rows={1}
              className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
            />
            <Button type="submit" size="icon" className="absolute w-8 h-8 top-3 right-3" disabled>
              <ArrowUpIcon/>
              <span className="sr-only">Envoyer</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ArrowUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}

function PenIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  )
}