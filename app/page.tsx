import Navbar from "@/components/Navbar"
import Section from "@/components/Section"
import WhatsAppButton from "@/components/WhatsAppButton"
import Carousel from "@/components/Swiper"
import { Download } from "lucide-react";
import TechOrbit from "@/components/TechOrbit";
import ProjectsSection from "@/components/ProyectsSection";
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative w-full bg-zinc-900 pt-30 md:pt-0">
        <svg
          className="absolute top-0 left-0 h-full w-40 pointer-events-none opacity-40"
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
        >
          <path
            d="M10 0 Q 120 100 27 590 T 210 1000"
            stroke="#22d3ee"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* LINEA DERECHA */}
        <svg
          className="absolute top-0 right-0 h-full w-40 pointer-events-none opacity-40"
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
        >
          <path
            d="M10 0 Q -30 300 70 600  T 20 1000"
            stroke="#60a5fa"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <Section id="home" title="">
          <section className=" w-full flex flex-col md:flex-row  min-h-screen">
            <div className="flex-1 items-center justify-center flex flex-col  px-10  pt-20 md:pl-30">
              <p className="lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
                ¡Hola! , soy Maricielo Alata Roman
              </p>

              <p className="mt-4 text-base text-gray-400">
                Desarrolladora FullStack | Analista de datos | Soporte TI
              </p>

              <p className="mt-6 text-lg text-gray-300 tracking-wide">
                — Ingeniería de Sistemas e Informática —
              </p>

              <p className="mt-4 text-lg text-gray-500 ">
                La innovación y creatividad son aspectos clave de mi desarrollo profesional.
              </p>

              <button className="mt-6 mb-6 self-center md:self-start flex items-center gap-2 px-6 py-2 rounded-2xl text-white bg-gradient-to-r from-cyan-500 via-blue-400 to-indigo-500 hover:scale-105 transition">
                <Download size={18} />
                Descargar CV
              </button>
            </div>

            <div className=" flex-1 flex  items-center justify-center">
              <Carousel />
            </div>

          </section>
        </Section>

        <Section id="about" title="">
          <section className=" relative flex flex-col text-white  pt-20 w-full   items-center justify-center gap-7 ">

            <p className="lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent animate-pulse">Sobre Mí</p>
            <p className="text-2xl text-gray-300 max-w-2xl  "> Hola, es grato tenerte aquí y que pueda presentarme contigo. </p>
            <div className="flex flex-col max-w-4xl text-lg md:text-xl gap-3 border rounded-xl border-cyan-500/30 p-11">
              <p className="text-gray-300 leading-relaxed text-justify">
                Soy estudiante del décimo ciclo de <strong className="text-cyan-400">Ingeniería de Sistemas e Informática</strong>,
                enfocada en desarrollar soluciones tecnológicas eficientes orientadas a resolver problemas empresariales y mejorar la experiencia de los usuarios.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                Durante mi formación académica participé en proyectos innovadores y desafiantes, incluyendo la <strong className="text-cyan-400">Hackathon</strong> 2024 de mi universidad, donde asumí el rol de líder de equipo y desarrolladora Frontend. Además, participo constantemente en conferencias tecnológicas para mantenerme actualizada.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                En mi experiencia profesional, estuve a cargo del <strong className="text-cyan-400">Área de TI del Instituto Thomas Jefferson</strong>, brindando soporte técnico integral, administrando la infraestructura tecnológica con Google Workspace y gestionando la página institucional, fortaleciendo habilidades de comunicación y trabajo en equipo.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                También realicé una pasantía como <strong className="text-cyan-400">Analista de Datos</strong> en el desarrollo de un sistema de gestión para la Escuela de Postgrado de la UNSA, donde recopilé, analicé y documenté requerimientos junto a stakeholders y equipo de desarrollo.
              </p>
            </div>
            <div className="flex justify-center w-full bg-zinc-800/80 py-10 ">
              <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="flex flex-col lg:flex-1 pt-10 gap-10  ">
                  <p className=" font-bold text-4xl text-cyan-400 text-center lg:text-left">MIS CUALIDADES</p>
                  <div className="flex gap-20 lg:text-lg text-sm  px-12">
                    <ul className="space-y-2 list-disc ">
                      <li>Proactividad</li>
                      <li>Aprendizaje rápido</li>
                      <li>Trabajo colaborativo</li>
                      <li>Pendiente al detalle</li>
                      <li>Adaptable</li>
                    </ul>
                    <ul className="space-y-3 list-disc ">
                      <li>Empatía</li>
                      <li>Organización y criterio</li>
                      <li>Innovación y pensamiento desafiante</li>
                      <li>Analítica</li>
                      <li>Comunicación efectiva</li>
                    </ul>
                  </div>
                </div>
                <div className=" flex items-center ">
                  <TechOrbit />
                </div>
              </div>
            </div>
          </section>
        </Section>

        <Section id="projects" title="Proyectos">
          <section className=" relative flex flex-col text-white  pt-20 w-full   items-center justify-center gap-7 ">

            <p className="lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent animate-pulse">Proyectos</p>
            <ProjectsSection/>
          
          </section>


        </Section>

        <Section id="contact" title="Contacto">
          <p>¿Trabajamos juntos?</p>
        </Section>
      </main>

      <WhatsAppButton />
    </>
  )
}
