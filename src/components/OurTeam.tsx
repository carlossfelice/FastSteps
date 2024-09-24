import yeseniaImage from "../assets/fotoPerfilYesenia.jpeg"; // Importa la imagen directamente
import carlosImage from "../assets/fotoPerfilCarlos.jpeg"; // Importa la imagen directamente
import CoverParticules from "../utils/cover-particles";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Yesenia Gonzalez",
      role: "Desarrolladora",
      description:
        "👀 Soy una desarrolladora apasionada que disfruta innumerables horas codificando y aprendiendo cada día. 🌱 Tengo espíritu de emprendedora y me fascina aprender nuevas tecnologías como JavaScript, TypeScript, React, Vite, Next.js, Tailwind CSS, Bootstrap y Material UI.",
      image: yeseniaImage,
      socialLinks: {
        twitter: "https://twitter.com/yesiviola",
        linkedin:
          "https://www.linkedin.com/in/keilaygonzalez?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/yesiviola",
      },
    },
    {
      name: "Carlos Felice",
      role: "Full Stack Developer",
      description:
        "👨‍💻 Soy un entusiasta Full Stack Developer de Argentina, dedicado a la creación de aplicaciones web innovadoras. 🚀 Me apasiona el aprendizaje continuo y disfruto explorando nuevas tecnologías, como JavaScript, TypeScript, React, Node.js, NestJS y Tailwind CSS. 🌟 Siempre busco mejorar mis habilidades y contribuir a proyectos desafiantes.",
      image: carlosImage,
      socialLinks: {
        twitter: "https://x.com/carlosf13621786",
        linkedin: "https://www.linkedin.com/in/carlos-felice-b3521b156/",
        github: "https://github.com/carlossfelice",
      },
    },
  ];

  return (
    <section className="mt-6 p-8 bg-white rounded-lg shadow-lg">
      <div className="fixed">
        <CoverParticules />
      </div>
      <h2 className="text-4xl font-bold text-center text-blue-800">Our Team</h2>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Conoce a las personas que hacen posible nuestra misión. Cada uno aporta
        su talento y pasión.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full mx-auto"
            />
            <h3 className="mt-4 text-2xl font-semibold text-blue-700 text-center">
              {member.name}
            </h3>
            <p className="text-lg font-medium text-gray-500 text-center">
              {member.role}
            </p>
            <p className="mt-2 text-gray-600 text-center">
              {member.description}
            </p>

            <div className="mt-4 flex justify-center space-x-4">
              <div className="flex items-center space-x-4">
                <a
                  href={member.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition"
                >
                  <i className="fab fa-twitter text-lg"></i>
                </a>
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
                >
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
                <a
                  href={member.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
