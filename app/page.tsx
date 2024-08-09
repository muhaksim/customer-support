/**
 * v0 by Vercel.
 * @see https://v0.dev/t/i4oWjNCLz5N
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="ChatGPT" />
          <AvatarFallback>GPT</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold">ChatGPT</h2>
          <p className="text-sm text-primary-foreground/80">AI Assistant</p>
        </div>
      </header>
      <div className="flex-1 overflow-auto p-6 space-y-4">
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-4 max-w-[80%]">
            <p>Hi ChatGPT, can you explain how airplane turbulence works?</p>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-end">
          <div className="bg-primary rounded-lg p-4 max-w-[80%] text-primary-foreground">
            <p>
              Of course! Airplane turbulence happens when the plane encounters pockets of air that are moving
              differently. It's like sailing a boat on choppy water. These air pockets can make the plane feel like it's
              bouncing or shaking a bit. It's completely normal and usually not dangerous at all.
            </p>
          </div>∫
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="ChatGPT" />
            <AvatarFallback>GPT</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-4 max-w-[80%]">
            <p>That makes sense, thank you!</p>
          </div>
        </div>
      </div>
      <div className="bg-background border-t px-6 py-4">
        <div className="relative">
          <Textarea
            placeholder="Message ChatGPT..."
            name="message"
            id="message"
            rows={1}
            className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
          />
          <Button type="submit" size="icon" className="absolute w-8 h-8 top-3 right-3" disabled>
            <ArrowUpIcon className="w-4 h-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
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