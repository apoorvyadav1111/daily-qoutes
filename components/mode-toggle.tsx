"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <a href="https://apoorvyadav.vercel.app" target="_blank" rel="noreferrer">
            <span className="flex flex-row gap-x-2"> Go to Dev <ArrowRightIcon className="translate-y-[-2] w-4 h-4"/></span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <a href="https://docs.quotable.io" target="_blank" rel="noreferrer">
          Thanks to Qoutable API 
          </a>      
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
