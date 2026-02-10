import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  return (
    
    <a
      href="https://wa.me/51934683056"
      target="_blank"
      className="fixed bottom-7 right-7 bg-green-500 text-white p-4 rounded-full shadow-lg  hover:bg-green-600 z-[9999]"
    >
      <span className="absolute bottom-0 right-0 p-4 w-14 h-14 rounded-full bg-green-500 opacity-30 animate-ping" />
      <FaWhatsapp size={24} />
    </a>
  )
}
