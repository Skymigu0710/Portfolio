type SectionProps = {
  id: string
  title: string
  children: React.ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="min-h-[calc(100vh-80px)] px-1 ">

      {children}
    </section>
  )
}
