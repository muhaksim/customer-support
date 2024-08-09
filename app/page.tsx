"use client"
import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { getChatbotResponse } from "@/lib/gemini"

export default function Component() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;
    const newMessages = [...messages, { role: "user", text: inputMessage }]
    setMessages(newMessages)
    setInputMessage("")
    console.log("I am in handleSendMessage")
    const botResponse = await getChatbotResponse(inputMessage)
    console.log(`input message is: ${inputMessage}. bot response is: ${botResponse}`)
    setMessages([...newMessages, { role: "model", text: botResponse }])
  }


  return (
    <div className="flex flex-col h-screen text-black">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="ChatGPT" />
          <AvatarFallback>GPT</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold">Customer Support Bot</h2>
          <p className="text-sm text-primary-foreground/80">AI Assistant</p>
        </div>
      </header>
      <div className="flex-1 overflow-auto p-6 space-y-4">
        { messages.map((message, index) => (
          <div key={index} className={`flex items-start gap-4 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt={message.role} />
            <AvatarFallback>{message.role === "user" ? "U" : "B"}</AvatarFallback>
          </Avatar>
          <div className={`bg-muted rounded-lg p-4 max-w-[80%] ${message.role === "user" ? "bg-blue-100" : "bg-gray-100"}`}>
            <p>{message.text}</p>
          </div>
        </div>
        
        ))}
          
      </div>
      <div className="bg-background border-t px-6 py-4">
        <div className="relative">
          <Textarea
            placeholder="Message Customer Support..."
            name="message"
            id="message"
            rows={1}
            className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button type="button" size="icon" className="absolute w-8 h-8 top-3 right-3" onClick={handleSendMessage} disabled={inputMessage.trim() === ""}>
            <ArrowUpIcon className="w-4 h-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

function ArrowUpIcon(props: React.SVGProps<SVGSVGElement>) {
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