import CoverParticules from "../utils/cover-particles";

function About() {
  return (
    
    <div className="max-w-4xl mx-auto p-10 bg-gray-200 rounded-lg shadow-xl mt-12 ">
                  <div className="fixed">
        <CoverParticules />
      </div>
      <h1 className="text-5xl font-bold text-center text-blue-800 hover:text-blue-900 transition-colors duration-200 ease-in-out">
        About Us
      </h1>
      <p className="mt-6 text-lg text-gray-700 text-center leading-relaxed">
        Established in 2024, we are committed to delivering sustainable and high-quality products 
        that not only elevate everyday life but also contribute to a healthier planet.
      </p>

      <div className="mt-12">
        <h2 className="text-4xl font-semibold text-blue-800 text-center hover:text-blue-900 transition-colors duration-200 ease-in-out">
          Our Vision
        </h2>
        <p className="mt-4 text-lg text-gray-700 text-center leading-relaxed">
          We envision a future where innovation and responsibility go hand in hand. Our aim is to inspire 
          positive change by creating sustainable products that empower people and improve the world.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-4xl font-semibold text-blue-800 text-center hover:text-blue-900 transition-colors duration-200 ease-in-out">
          Our Mission
        </h2>
        <p className="mt-4 text-lg text-gray-700 text-center leading-relaxed">
          Our mission is to offer eco-friendly, functional solutions that enhance lives while prioritizing 
          sustainability. We integrate ethical practices and sustainable materials at every step.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-4xl font-semibold text-blue-800 text-center hover:text-blue-900 transition-colors duration-200 ease-in-out">
          Our Commitment
        </h2>
        <p className="mt-4 text-lg text-gray-700 text-center leading-relaxed">
          With a focus on minimizing waste, we promote a circular economy. Our products are designed 
          to make a lasting impact, helping to protect our environment for future generations.
        </p>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-4xl font-semibold text-blue-800 hover:text-blue-900 transition-colors duration-200 ease-in-out">
          Join Our Movement
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Together, we can create a better future. Explore our innovative products and become part of a community 
          dedicated to sustainability and positive change.
        </p>
      </div>
    </div>
  );
}

export default About;
