"use client"

const menuItems = [
  { id: "home", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
]

export default function Navbar() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-900 shadow z-50 text-gray-200 h-20 z-[999]">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <span className="font-bold text-lg">Cielo</span>

        <ul className="hidden md:flex gap-16  ">
          {menuItems.map(item => (
            <li
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer hover:text-blue-600 "
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
