"use client"
import { useEffect, useState } from "react"
import { Home, User,Goal,FolderKanban, Mail } from "lucide-react"
const menuItems = [
  { id: "home", label: "Inicio", icon: Home },
  { id: "about", label: "Sobre mí", icon: User },
  {id: "habilities", label: "Conocimientos", icon: Goal },
  { id: "projects", label: "Proyectos", icon: FolderKanban },
  { id: "contact", label: "Contacto", icon: Mail },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-900
        ${scrolled ? "bg-black/90  " : ""}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">

        <span
          onClick={() => handleScroll("home")}
          className="text-2xl tracking-widest text-white cursor-pointer md:text-3xl"
        >
          𝗠
        </span>

        <ul className="hidden md:flex gap-16 text-gray-200">
          {menuItems.map(item => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              {item.label}
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
        >
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all
              ${open ? "rotate-45" : "-translate-y-2"}
            `}
          />
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all
              ${open ? "opacity-0" : ""}
            `}
          />
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all
              ${open ? "-rotate-45" : "translate-y-2"}
            `}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-900
          ${open ? "min-h-screen opacity-100" : "max-h-0 opacity-0 "}
        `}
      >
        <ul className="flex flex-col min-h-screen items-center gap-6 py-6 bg-black border-t border-white/20">
          {menuItems.map(item => {
            const Icon = item.icon
            return (
              <li
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="flex items-center gap-3 text-lg text-gray-200 hover:text-blue-500 cursor-pointer transition"
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
