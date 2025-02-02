// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import { SunMoon, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      <Button isIconOnly variant="ghost" color="default" aria-label="theme" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <SunMoon /> : <Moon />}
      </Button> 
    </div>
  )
};