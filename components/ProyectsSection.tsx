import ProjectCard from "@/components/ProjectCard";


export default function ProjectsSection() {
    const projects = [
        {
            title: "UTPConnect",
            description:
                "Plataforma de red social desarrollada con el fin de fomentar un espacio de interacción académica entre los estudiantes"
                + " de la Universidad tecnológica del Perú. Este sistema esta basado en una Arquitectura de microservicios.",

            techs: [
                { name: "Java", icon: "/images/java.png" },
                { name: "MySQL", icon: "/images/mysql.png" },
                { name: "React", icon: "/images/react.png" },
                { name: "SpringBoot", icon: "/images/springboot.png" },
            ],

            link: "https://github.com/Skymigu0710/UTPConnect",
        
        },

        {
            title: "ParkingProject",
            description:
                "Sistema de gestión de una empresa de parqueo de vehículos con el fin de "
                + "optimizar sus procesos operativos y administrativos. Este sistema esta basado en una Arquitectura en capas.",

            techs: [
                { name: "React", icon: "/images/react.png" },
                { name: "Tailwind", icon: "/images/tailwind.png" },
                { name: "SpringBoot", icon: "/images/springboot.png" },
                { name: "Vue.js", icon: "/images/vue.png" },
            ],

            link: "https://github.com/tu-link",
           
        },

        {
            title: "SOS System",
            description:
                "MVP de una aplicación mobile desarrollada durante un concurso de la HACKATON. Su propósito era crear un software que "
                + " sirva como material de emergencia inmediata para un ciudadano que se encuentre en riesgo.",

            techs: [
                { name: "React Native", icon: "/images/react.png" },
                { name: "MySQl", icon: "/images/MYSQL.png" },
                { name: "SpringBoot", icon: "/images/springboot.png" },
            ],

            link: "https://github.com/tu-link",
         
        },
        {
            title: " IA Repository",
            description: "Respositorio donde alojo todos mis mini proyectos e iniciativas sobre Inteligencia Artifial, con el fin de extender mis conocimientos en este campo tecnológico.",

            techs: [
                { name: "TensorFlow", icon: "/images/tensorflow.png" },
                { name: "Python", icon: "/images/python.png" },
                { name: "Pandas", icon: "/images/pandas.png" },
                { name: "Numpy", icon: "/images/numpy.png" }
            ],

            link: "https://github.com/Skymigu0710/IAProyects/tree/main",
            
        },
        {
            title: "Aplicación de la IA en  trastornos emocionales ",
            description: "Investigación sobre la intervención de la IA en la detección temprana de trastornos emocionales"
                + " . Priorizar técnicas de aprendizaje que presenten una mayor exactitud en su pronóstico ante trastornos como depresión, ansiedad y estrés",

            techs: [
                { name: "TensorFlow", icon: "/images/tensorflow.png" },
                { name: "Python", icon: "/images/python.png" },
                { name: "Pandas", icon: "/images/pandas.png" },
                { name: "Numpy", icon: "/images/numpy.png" }
            ],

            link: "https://github.com/Skymigu0710/IAProyects/tree/main",
           
        },
        {
            title: " BI : Analisis de datos del procesos de admisión UNI ",
            description: "Este proyecto consiste en el análisis de datos de los procesos de admisión del periodo 2021-2023. El objetivo principál de este análisis es optimizar "+
            "la toma de desiciones estratégicas en la Universidad Nacional de Ingeniería (UNI)",

            techs: [
                { name: "Power BI", icon: "/images/powerbi.png" },
                { name: "SQL server data tools", icon: "/images/datatools.png" },
                { name: "Excel", icon: "/images/excel.png" },
                { name: "ETL", icon: "/images/etl.png" },
                { name: "Microsoft SQL server managment", icon: "/images/mssms.png" }
            ],

            link: "https://github.com/Skymigu0710/IAProyects/tree/main",
            
        },
    ];
    return (
        <div className="grid md:grid-cols-2 lg:px-10 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>
    );
}
