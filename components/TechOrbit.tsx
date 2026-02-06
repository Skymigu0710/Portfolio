export default function TechOrbit() {
  const techs = [
    { name: "Java", img: "/images/java.png" },
    { name: "React", img: "/images/react.png" },
    { name: "MySQL", img: "/images/mysql.png" },
    { name: "Python", img: "/images/python.png" },
    { name: "Tailwind", img: "/images/tailwind.png" },
    { name: "Git", img: "/images/git.png" },
  ];

  const size = 420; 
  const radius = size / 2 - 40; 

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{ width: size, height: size }}
    >

  
      <div className="absolute w-75 h-75 rounded-full overflow-hidden">
        <img
          src="/images/me2.jpeg"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="absolute w-full h-full animate-spin-slow">
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
                  translate(${radius}px)
                  rotate(-${angle}deg)
                `,
              }}
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="w-12 h-12"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
