"use client"

import { useState, FormEvent } from "react"
import { Send, Bot, Paperclip, Mic, CornerDownLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    ChatBubble,
    ChatBubbleAvatar,
    ChatBubbleMessage,
} from "@/components/ui/chat-bubble"
import { ChatInput } from "@/components/ui/chat-input"
import {
    ExpandableChat,
    ExpandableChatHeader,
    ExpandableChatBody,
    ExpandableChatFooter,
} from "@/components/ui/expandable-chat"
import { ChatMessageList } from "@/components/ui/chat-message-list"

const dentalResponses = [
    "I'd be happy to help you with that! Our dental team specializes in comprehensive care.",
    "That's a great question! We offer a wide range of dental services to meet your needs.",
    "Our experienced dentists can definitely assist you with that. Would you like to schedule an appointment?",
    "We understand your concern. Our clinic uses the latest technology to ensure comfortable treatment.",
    "Thank you for reaching out! Our team is here to help you achieve your best smile.",
]

export function DentalChatWidget() {
    const [messages, setMessages] = useState([
        {
            id: 1,
            content: "Hello! Welcome to DentalCare. How can I help you today? 😊",
            sender: "ai",
        },
        {
            id: 2,
            content: "Feel free to ask about our services, appointment scheduling, or any dental concerns you may have!",
            sender: "ai",
        },
    ])

    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!input.trim()) return

        setMessages((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                content: input,
                sender: "user",
            },
        ])
        setInput("")
        setIsLoading(true)

        setTimeout(() => {
            const randomResponse = dentalResponses[Math.floor(Math.random() * dentalResponses.length)]
            setMessages((prev) => [
                ...prev,
                {
                    id: prev.length + 1,
                    content: randomResponse,
                    sender: "ai",
                },
            ])
            setIsLoading(false)
        }, 1000)
    }

    const handleAttachFile = () => {
        console.log("Attach file clicked")
    }

    const handleMicrophoneClick = () => {
        console.log("Microphone clicked")
    }

    return (
        <ExpandableChat
            size="lg"
            position="bottom-right"
            icon={<Bot className="h-6 w-6" />}
        >
            <ExpandableChatHeader className="flex-col text-center justify-center bg-gradient-to-r from-primary/10 to-accent/10">
                <h1 className="text-xl font-semibold">Chat with DentalCare AI 🦷</h1>
                <p className="text-sm text-muted-foreground">
                    Ask me anything about our dental services
                </p>
            </ExpandableChatHeader>

            <ExpandableChatBody>
                <ChatMessageList>
                    {messages.map((message) => (
                        <ChatBubble
                            key={message.id}
                            variant={message.sender === "user" ? "sent" : "received"}
                        >
                            <ChatBubbleAvatar
                                className="h-8 w-8 shrink-0"
                                src={
                                    message.sender === "user"
                                        ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop"
                                        : undefined
                                }
                                fallback={message.sender === "user" ? "U" : "🦷"}
                            />
                            <ChatBubbleMessage
                                variant={message.sender === "user" ? "sent" : "received"}
                            >
                                {message.content}
                            </ChatBubbleMessage>
                        </ChatBubble>
                    ))}

                    {isLoading && (
                        <ChatBubble variant="received">
                            <ChatBubbleAvatar
                                className="h-8 w-8 shrink-0"
                                fallback="🦷"
                            />
                            <ChatBubbleMessage isLoading />
                        </ChatBubble>
                    )}
                </ChatMessageList>
            </ExpandableChatBody>

            <ExpandableChatFooter>
                <form
                    onSubmit={handleSubmit}
                    className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
                >
                    <ChatInput
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about our services..."
                        className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
                    />
                    <div className="flex items-center p-3 pt-0 justify-between">
                        <div className="flex">
                            <Button
                                variant="ghost"
                                size="icon"
                                type="button"
                                onClick={handleAttachFile}
                            >
                                <Paperclip className="size-4" />
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                type="button"
                                onClick={handleMicrophoneClick}
                            >
                                <Mic className="size-4" />
                            </Button>
                        </div>
                        <Button type="submit" size="sm" className="ml-auto gap-1.5">
                            Send
                            <CornerDownLeft className="size-3.5" />
                        </Button>
                    </div>
                </form>
            </ExpandableChatFooter>
        </ExpandableChat>
    )
}
