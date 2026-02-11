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
              <p className="  text-3xl text-left bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent md:text-6xl lg:text-7xl">
                <strong className="block">¡Hola!, soy</strong>
                <span className="block">Maricielo Alata Roman</span>
              </p>
              <p className="mt-4 text-base text-gray-200 md:text-xl">
                Desarrolladora FullStack | Analista de datos | Soporte TI
              </p>
              <p className="mt-6 text-base text-gray-200 tracking-wide md:text-xl">
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
            <div className="group w-64 h-64  md:w-80 md:h-80 [perspective:1000px]">
              <div className="relative w-full h-full  [transform-style:preserve-3d] auto-flip">
                <div className="absolute inset-0 
                    rounded-[50%_50%_20%_70%/60%_60%_20%_60%] 
                    overflow-hidden 
                    [backface-visibility:hidden]">
                  <img
                    src="/images/ME.jpeg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 
                    rounded-[50%_50%_20%_70%/60%_60%_20%_60%] 
                    overflow-hidden 
                    text-white
                    [transform:rotateY(180deg)] 
                    [backface-visibility:hidden]">
                  <img
                    src="/images/me3.jpeg"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </Section>
        <Section id="about" title="">
          <section className=" relative flex flex-col text-white  pt-20 w-full   items-center justify-center gap-7 text-center lg:pt-30">
            <p className="bg-gradient-to-r from-cyan-400 
              via-sky-500 to-blue-600 bg-clip-text text-transparent 
               text-4xl lg:text-6xl ">¿Quién soy?</p>
            <p className="text-gray-300 px-10 lg:text-2xl"> Hola, es un gusto tenerte aquí y que puedas conocerme </p>
            <div className="flex flex-col max-w-4xl text-lg p-7 gap-3 border rounded-xl mx-3 border-cyan-500/30 md:text-xl">
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
              <div className="relative flex flex-col lg:flex-row items-center">
                <div className="flex flex-col lg:flex-1 pt-10 gap-10 ">
                  <p className="bg-gradient-to-r from-cyan-400 
                  via-sky-500 to-blue-600 bg-clip-text text-transparent 
                  text-4xl lg:text-6xl lg:text-left">Me identifico por...</p>
                  <div className="relative flex flex-col text-gray-250 text-gray-300 text-left  text-sm  px-12 lg:text-lg">
                    <div className="absolute inset-0 opacity-5">
                      <img
                        src="images/animated/fly.gif"
                      />
                    </div>
                    <ul className="space-y-2 z-10">
                      <li className="bg-white/7 rounded-xl p-2 px-4 hover:scale-104 transition">Ser una persona Comprensiva</li>
                      <li className="bg-white/7 rounded-xl px-4 p-2 hover:scale-104 transition">Aprender muy rápido</li>
                      <li className="bg-white/7 rounded-xl px-4 p-2 hover:scale-104 transition">Valorar el trabajo colaborativo</li>
                      <li className="bg-white/7 rounded-xl px-4 p-2 hover:scale-104 transition">Estar peendiente al detalle</li>
                      <li className="bg-white/7 rounded-xl px-4 p-2 hover:scale-104 transition">Un gran interes en Inteligencia Artificial</li>
                      <li className="bg-white/7 rounded-xl px-4 p-2 hover:scale-104 transition">Ser empática </li>
                      <li className="bg-white/7 rounded-xl px-4 p-2 hover:scale-104 transition">mantener organizado mi tiempo</li>
                      <li className="bg-white/7 rounded-xl px-4 p-2 hover:scale-104 transition">Proponerme desafíos</li>
                      <li className="bg-white/7 rounded-xl px-4 p-2 hover:scale-104 transition">Mi capacidad análitica</li>
                      <li className="bg-white/7 rounded-xl px-4 p-2 hover:scale-104 transition">mantener una comunicación efectiva</li>
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
            <p className="flex   justify-center bg-gradient-to-r from-cyan-400 via-sky-500 
              to-blue-600 bg-clip-text text-transparent text-4xl lg:text-6xl pb-2">Conocimientos</p>
            <div className="grid gap-8 mx-3 md:grid-cols-3 lg:px-10 ">
              <div className=" bg-white/6 p-7 rounded-xl border-l-4 border-cyan-600 hover:scale-[1.02] transition">
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
              <div className=" bg-white/6 p-7 rounded-xl border-l-4 border-cyan-600 hover:scale-[1.02] transition">
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
              <div className=" bg-white/6 p-7 rounded-xl border-l-4 border-cyan-600 hover:scale-[1.02] transition">
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
            <p className=" bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent text-4xl  lg:text-6xl pb-2">Proyectos</p>
            <ProjectsSection />
          </section>
        </Section>
        <Section id="contact" title="">
          <section className=" pt-30 relative flex flex-col text-white  w-full  items-center justify-center gap-7">
            <p className=" text-4xl lg:text-6xl  bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent ">Contáctame</p>
            <div className="relative flex flex-col gap-10 w-75  lg:w-4xl p-10">
              <p className="text-center text-2xl">Dispuesta a colaborar y trabajar juntos <strong className="text-cyan-400">¡Contáctame!</strong> </p>
              <p className="text-center text-2xl">Puedes encontrarme en mis redes: </p>
              <div className="flex flex-col gap-6 items-center ">
                <div className="flex gap-7">
                  <a
                    href="https://www.linkedin.com/in/maricielo-alata-roman-76394a333/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative pointer-events-auto gap-2 bg-cyan-600  items-center w-10 h-10 rounded-lg border border-1 border-white">
                    <img src="/images/linkendIn.png"
                      className="inset-0 "></img>
                  </a>
                  <a
                    href="https://github.com/Skymigu0710"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative pointer-events-auto gap-2 bg-white  items-center w-10 h-10 rounded-lg border border-1 border-white">
                    <img src="/images/git.png" className="inset-0 " />
                  </a>
                </div>
                <div className="flex gap-4 p-4  mt-3 items-center bg-white/6 w-75 lg:w-4xl">
                  <img src="/images/gmail.png" className="w-7 h-5" />
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
