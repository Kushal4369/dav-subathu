import Management from "./components/Management";


const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="text-lg md:text-xl">
            Learn about our journey, vision, and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide a nurturing and stimulating environment where students
                can achieve their fullest potential, academically and personally.
              </p>
            </div>
            {/* Vision */}
            <div className="text-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h2 className="text-3xl font-bold text-purple-600 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To empower young minds to lead, innovate, and contribute
                positively to the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Moto */}
      <section className="py-8 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Moto</h2>
          <p className="text-2xl text-gray-600 mb-6">
            "Satyamev Jayate"
          </p>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-2 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Integrity
              </h3>
              <p className="text-gray-600">
                We uphold honesty and strong moral principles in everything we
                do.
              </p>
            </div>
            {/* Value 2 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in academics, extracurriculars, and
                personal growth.
              </p>
            </div>
            {/* Value 3 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Inclusivity
              </h3>
              <p className="text-gray-600">
                We celebrate diversity and ensure a supportive environment for
                everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action
      <section className="py-16 bg-gradient-to-r from-green-500 to-teal-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Journey</h2>
          <p className="text-lg mb-6">
            Join a community that values education, integrity, and innovation.
          </p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
            Learn More
          </button>
        </div>
      </section> */}

      <section className="py-16 bg-gray-50 ">
        <Management />

      </section>
    </div>
  );
};

export default About;
