import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Sistema Gestión Postgrado UNSA",
            description:
                "Sistema para la gestión académica y administrativa de la escuela de Postgrado, incluyendo módulos de usuarios, reportes y análisis de datos.",

            techs: [
                { name: "Java", icon: "/images/java.png" },
                { name: "MySQL", icon: "/images/mysql.png" },
                { name: "React", icon: "/images/react.png" },
            ],

            link: "https://github.com/tu-link",
        },

        {
            title: "Plataforma Social",
            description:
                "Aplicación web social enfocada en interacción entre usuarios y publicación de contenido.",

            techs: [
                { name: "React", icon: "/images/react.png" },
                { name: "Tailwind", icon: "/images/tailwind.png" },
                { name: "Firebase", icon: "/images/firebase.png" },
            ],

            link: "https://github.com/tu-link",
        },

        {
            title: "Plataformaa Social",
            description:
                "Aplicación web social enfocada en interacción entre usuarios y publicación de contenido.",

            techs: [
                { name: "React", icon: "/images/react.png" },
                { name: "Tailwind", icon: "/images/tailwind.png" },
                { name: "Firebase", icon: "/images/firebase.png" },
            ],

            link: "https://github.com/tu-link",
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
