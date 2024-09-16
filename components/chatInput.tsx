"use client"

import { Textarea, Button} from "@nextui-org/react"
import { Send } from "lucide-react"
import {type useChat} from "ai/react"

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"]
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"]
type SetInput = ReturnType<typeof useChat>["setInput"]

interface ChatInputProps {
    input: string
    handleInputChange: HandleInputChange
    handleSubmit: HandleSubmit
    setInput: SetInput

}

export const ChatInput= ({handleInputChange, handleSubmit, input, setInput}: ChatInputProps) => {
    return <div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full flex justify-center">
        <div className="mx-2 flex flex-row gap-3 md:mx4 md:last:mb-6 lg:max-w-2xl xl:max-w-3xl w-1/2">
            <div className="relative flex h-full flex-1 items-stretch md:flex-col">
                <div className="relative flex flex-col w-full flex-grow m-6 rounded-lgv">
                    <form onSubmit={handleSubmit} className="relative bg-black">
                        <Textarea  minRows={4} autoFocus onChange= {handleInputChange} value={input} onKeyDown={(e) => {if(e.key == "Enter" && !e.shiftKey){
                            e.preventDefault()
                            handleSubmit()
                            setInput("")
                        }}} placeholder="Enter your Question..." className="resize-none b-zinc-800 hover:bg-zinc-900 rounder-xl-text-base"/>
                        <Button size="sm" type="submit" className="mb-[30px] mr-[15px] absolute z-10 bg-white right-2 bottom-2">
                            <Send className="w-6 h-6"/>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
}