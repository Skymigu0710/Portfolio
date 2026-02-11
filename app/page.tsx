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
      <main className="relative w-full bg-black md:pt-0">
        <Section id="home" title="">
          <section className="flex flex-col justify-center gap-5 items-center min-h-screen pt-1/2 md:px-10 lg:pt-0 lg:flex-row">
            <div className="absolute inset-0 -z-0 
            bg-[url('/images/fondo1.gif')] 
            bg-repeat 
            bg-auto 
            opacity-23">
            </div>
            <div className="relative z-20 flex flex-col px-5 text-center">
              <p className="  text-2xl text-left bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent md:text-6xl lg:text-7xl">
                <strong className="block">¡Hola!, soy</strong>
                <span className="block">Maricielo Alata Roman</span>
              </p>
              <p className="mt-4 text-sm text-gray-200 md:text-xl">
                Desarrolladora FullStack | Analista de datos | Soporte TI
              </p>
              <p className="mt-6 text-sm text-gray-200 tracking-wide md:text-xl">
                — Ingeniería de Sistemas e Informática —
              </p>
              <p className="mt-4 text-base text-gray-400 md:text-lg">
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
            <div className="w-64 h-64 bg-pink-200 rounded-[50%_50%_20%_70%/60%_60%_20%_60%] overflow-hidden z-10 md:w-80 md:h-80">
              <img
                src="/images/ME.jpeg"
                className="w-full h-full object-cover"
              />
            </div>
          </section>
        </Section>  
        <Section id="about" title="">
          <section className=" relative flex flex-col text-white  pt-20 w-full   items-center justify-center gap-7 text-center lg:pt-30">
            <p className="font-bold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent animate-pulse text-5xl lg:text-7xl ">Sobre Mí</p>
            <p className="text-gray-300 lg:text-2xl"> Hola, es grato tenerte aquí y que puedas conocerme. </p>
            <div className="flex flex-col max-w-4xl text-lg md:text-xl gap-3 border rounded-xl border-cyan-500/30 p-11">
              <p className="text-gray-300 leading-relaxed text-justify">
                Soy estudiante del décimo ciclo de <strong className="text-cyan-600">Ingeniería de Sistemas e Informática</strong>,
                enfocada en desarrollar soluciones tecnológicas eficientes orientadas a resolver problemas empresariales y mejorar la experiencia de los usuarios.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                Durante mi formación académica participé en proyectos innovadores y desafiantes, incluyendo la <strong className="text-cyan-600">Hackathon</strong> 2024 de mi universidad,
                donde asumí el rol de líder de equipo y desarrolladora Frontend. Además, participo constantemente en conferencias tecnológicas para mantenerme actualizada.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                En mi experiencia profesional, estuve a cargo del <strong className="text-cyan-600">Área de TI del Instituto Thomas Jefferson</strong>, brindando soporte técnico integral,
                administrando la infraestructura tecnológica con Google Workspace y gestionando la página institucional, fortaleciendo habilidades de comunicación y trabajo en equipo.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                También realicé una pasantía como <strong className="text-cyan-600">Analista de Datos</strong> en el desarrollo de un sistema de gestión para la Escuela de Postgrado de
                la UNSA, donde recopilé, analicé y documenté requerimientos junto a stakeholders y equipo de desarrollo.
              </p>
            </div>
            <div className="flex justify-center w-full   md:px-10 ">
              <div className="relative flex flex-col lg:flex-row gap-20 items-center">
                <div className="flex flex-col lg:flex-1 pt-10 gap-10 ">
                  <p className=" font-bold text-4xl text-cyan-600 text-center lg:text-left">MIS CUALIDADES</p>
                  <div className="flex text-gray-250 text-gray-300 gap-20 text-left  text-sm  px-12 lg:text-lg">
                    <ul className="space-y-2 list-disc ">
                      <li>Comprensiva</li>
                      <li>Aprendizaje rápido</li>
                      <li>Trabajo colaborativo</li>
                      <li>Pendiente al detalle</li>
                      <li>Interés en Inteligencia Artificial</li>
                    </ul>
                    <ul className="space-y-3 list-disc ">
                      <li>Empatía</li>
                      <li>Organización y criterio</li>
                      <li>Me propongo desafíos</li>
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
        <Section id="habilities" title="Habilidades">
          <section className="relative flex flex-col text-white  pt-20 w-full  gap-7 lg:pt-30 lg:px-40">
            <p className="flex font-bold  justify-center bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent animate-pulse text-5xl lg:text-7xl pb-2">Conocimientos</p>
            <div className="grid md:grid-cols-3 lg:px-10 gap-8 ">
              <div className=" bg-zinc-800/80 p-7 rounded-xl border-l-4 border-cyan-600 hover:scale-[1.02] transition">
                <p className="text-2xl pb-5">Stack Tecnológico</p>
                <ul className="text-gray-300 px-4 space-y-2 list-disc marker:text-cyan-600">
                  <li>Java</li>
                  <li>Python</li>
                  <li>MySQL</li>
                  <li>SpringBoot</li>
                  <li>SQL</li>
                  <li>React</li>
                  <li>Next Js</li>
                  <li>Tailwind</li>
                  <li>TypeSript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Power BI</li>
                  <li>Excel (Básico)</li>
                  <li>Git & GitHub</li>
                  <li>ETL</li>
                  <li>TensorFlow (Básico)</li>
                  <li>Figma</li>
                  <li>Data Warehouse</li>
                </ul>
              </div>
              <div className=" bg-zinc-800/80 p-7 rounded-xl border-l-4 border-cyan-600 hover:scale-[1.02] transition">
                <p className="text-2xl pb-5">Competencias Técnicas</p>
                <ul className="text-gray-300 px-4 space-y-2 list-disc marker:text-cyan-600">
                  <li>Levantamiento de requerimientos</li>
                  <li>Desarrollo de interfaces responsive</li>
                  <li>Arquitectura de Microservicios</li>
                  <li>Documentación técnica</li>
                  <li>Consumo de APIs</li>
                  <li>Authenticación con Tokens (JWT)</li>
                  <li>Soporte de TI integral</li>
                  <li>Optimización de procesos</li>
                  <li>Scrum & Tablero Kanban</li>
                  <li>Entrenamiento básico de modelos ML</li>
                </ul>
              </div>
              <div className=" bg-zinc-800/80 p-7 rounded-xl border-l-4 border-cyan-600 hover:scale-[1.02] transition">
                <p className="text-2xl pb-5">Habilidades Profesionales</p>
                <ul className="text-gray-300 px-4 space-y-2 list-disc marker:text-cyan-600">
                  <li>Trabajo en equipo</li>
                  <li>Pensamiento analítico</li>
                  <li>Aprendizaje continuo</li>
                  <li>Proactividad</li>
                  <li>Comunicación efectiva</li>
                  <li>Adaptabilidad al cambio</li>
                  <li>Pensamiento innovador y creativo</li>
                  <li>Orientación a la mejora continua</li>
                </ul>
              </div>
            </div>
          </section>
        </Section>
        <Section id="projects" title="Proyectos">
          <section className="relative flex flex-col text-white  pt-20 w-full   items-center justify-center gap-7 lg:pt-30 ">
            <p className="font-bold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent animate-pulse text-5xl lg:text-7xl pb-2">Proyectos</p>
            <ProjectsSection />
          </section>
        </Section>
        <Section id="contact" title="">
          <section className=" pt-30 relative flex flex-col text-white  w-full  items-center justify-center gap-7">
            <p className=" text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent animate-pulse">Contáctame</p>
            <div className="relative flex flex-col gap-10 w-75  lg:w-4xl p-10">
              <p className="text-center text-2xl">Dispuesta a colaborar y trabajar juntos <strong className="text-cyan-400">¡Contáctame!</strong> </p>
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
        </Section>
        <footer className=" bg-black py-6 px-6 text-center text-gray-400">
          <h2>© 2026 Maricielo Alata Roman. Todos los derechos reservados</h2>
          <h2 className="text-pink-300/30">Designed & developed with ❤️</h2>
        </footer>
      </main>
      <WhatsAppButton />
    </>
  )
}
