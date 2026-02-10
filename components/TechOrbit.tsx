export default function TechOrbit() {
  const techs = [
    { name: "Java", img: "/images/java.png" },
    { name: "React", img: "/images/react.png" },
    { name: "MySQL", img: "/images/mysql.png" },
    { name: "Python", img: "/images/python.png" },
    { name: "Tailwind", img: "/images/tailwind.png" },
    { name: "Git", img: "/images/git.png" },
  ];

  return (
    <div
      className="relative flex  items-center  justify-center  overflow-hidden w-[340px] max-w-[600px] aspect-square lg:w-[500px]"  >
      <div className="absolute w-2/3 h-2/3 rounded-full overflow-hidden">
        <img
          src="/images/me2.jpeg"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="absolute inset-0 animate-spin-slow">
        {techs.map((tech, index) => {
          const angle = (index / techs.length) * 360;

          return (
            <div
              key={tech.name}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `
                  translate(-50%, -50%)
                  rotate(${angle}deg)
                  translate(350%)
                  rotate(-${angle}deg)
                `,
              }}
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
