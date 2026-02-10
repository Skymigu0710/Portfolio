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
      <main className="relative w-full bg-zinc-900 md:pt-0">
        <Section id="home" title="">
          <section className="relative min-h-screen overflow-hidden ">
            <div className="absolute inset-0 -z-0">
              <Carousel />
            </div>
            <div className="absolute inset-0 bg-black/80 -z-0"></div>
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-5 text-center">
              <p className=" text-6xl  font-bold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent animate-pulse lg:text-7xl">
                <strong className="block text-2xl lg:text-3xl">¡Hola!, soy</strong>
                <span className="block">Maricielo Alata Roman</span>
              </p>
              <p className="mt-4 text-lg text-gray-200">
                Desarrolladora FullStack | Analista de datos | Soporte TI
              </p>

              <p className="mt-6 text-lg text-gray-200 tracking-wide">
                — Ingeniería de Sistemas e Informática —
              </p>
              <p className="mt-4 text-lg text-gray-400 ">
                La innovación y creatividad son aspectos clave de mi desarrollo profesional.
              </p>
              <a
                href="/file/CV-MaricieloAlataRoman.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 mb-6 self-center flex items-center gap-2 px-6 py-2 rounded-2xl text-white bg-gradient-to-r from-cyan-600 via-blue-400 to-indigo-500 hover:scale-105 transition"
              >
                <Download size={25} />
                Ver CV
              </a>
            </div>

          </section>
        </Section>

        <Section id="about" title="">
          <section className=" relative flex flex-col text-white  pt-20 w-full   items-center justify-center gap-7 text-center lg:pt-30">
            <p className="font-bold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent animate-pulse text-5xl lg:text-7xl ">Sobre Mí</p>
            <p className="text-gray-300 lg:text-2xl"> Hola, es grato tenerte aquí y que puedas conocerme. </p>
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
                  <div className="flex gap-20 text-left  text-sm  px-12 lg:text-lg">
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
          <section className=" relative flex flex-col text-white  pt-20 w-full   items-center justify-center gap-7 lg:pt-30 ">
            <p className="font-bold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent animate-pulse text-5xl lg:text-7xl ">Proyectos</p>
            <ProjectsSection />
          </section>
        </Section>
        <Section id="contact" title="">
          <section className=" pt-30 relative flex flex-col text-white  w-full  items-center justify-center gap-7">
            <p className=" text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent animate-pulse">Contáctame</p>
            <div className="relative flex flex-col gap-10 w-75  lg:w-4xl p-10">
              <p className="text-center text-2xl">Estaría encantada de poder <strong className="text-cyan-400">trabajar juntos</strong> </p>
              <p className="text-center text-2xl">Puedes encontrarme en mis redes: </p>
              <div className="flex flex-col gap-6 items-center ">
                <a
                  href="https://www.linkedin.com/in/maricielo-alata-roman-76394a333/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-50 pointer-events-auto flex px-2 gap-2 bg-cyan-600 h-10 items-center rounded-xl hover:bg-cyan-700 transition">
                  <img src="/images/linkendIn.png"
                    className="w-9 h-9"></img>
                  <p className="pr-2">Maricielo Alata</p>
                </a>
                <a
                  href="https://github.com/Skymigu0710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-50 pointer-events-auto flex px-2 gap-2 bg-pink-400 h-10 items-center rounded-xl hover:bg-pink-500 transition">
                  <img src="/images/git.png" className="w-9 h-9" />
                  <p className="pr-2 text-white">Maricielo (Skymigu)</p>
                </a>
                <div className="flex gap-4 p-4  mt-3 items-center bg-cyan-500/30 w-75 lg:w-4xl">
                  <img src="/images/gmail.png" className="w-9 h-7" />
                  <p>Correo electrónico: <strong >romcielo133@gmail.com </strong></p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-md" />
              <img
                src="/images/animated/pacman.gif"
                alt="orbit-square"
                className="absolute w-9 h-9 animate-square-orbit "
              />
              <img
                src="/images/animated/ghost.gif"
                alt="orbit-square"
                className="absolute w-9 h-9 animate-square-orbit-ghost"
              />
            </div>
          </section>
          <div className="h-30 w-full"/>
        </Section>
      </main>
      <WhatsAppButton />
    </>
  )
}
