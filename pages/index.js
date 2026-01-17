import Announcements from "./components/Announcements";
import SchoolAnnouncements from "./components/SchoolAnnouncements";
import SmoothScroll from "./components/SmoothScroll";
import WelcomeAnimation from "./components/WelcomeAnimation";

export default function Home() {
  return (
    <>
      
      <div>
        <WelcomeAnimation />
        <SmoothScroll />
        <h1 className="text-2xl font-bold">Welcome to D. A. V. (Devbhoomi Adarsh Vidyalya) Subathu</h1>
        <div >
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
            <div className="container mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-pulse">
                DAV SUBATHU 
              </h1>
                            <h2 className="text-2xl md:text-4xl font-semibold">
                Affiliated to CBSE New Delhi
              </h2>
              <p className="text-lg md:text-2xl mb-6 animate-bounce">
                Affiliation NO. 630374
              </p>
              
            </div>
          </section>

          {/* Admissions Banner */}
          <section className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-6 text-center animate-pulse">
            <div className="container mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">
                Admissions Open for Session 2026
              </h2>
              <p className="text-lg md:text-xl">
                Classes Nursery to 10 - Enroll Now!
              </p>
            </div>
          </section>

          {/* School Photo Section */}
          <section className="py-10 bg-gray-100">
            <div className="container mx-auto">
              <div
                class="relative max-w-full overflow-hidden bg-cover bg-no-repeat"
                data-twe-ripple-init
                data-twe-ripple-color="light">
                <img
                  src="/DAV_School.jpg"
                  class="max-w-full"
                  alt="Louvre" />
                <a href="www.davsubathu.com">
                  <div
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>

            </div>
          </section>

          {/* Announcements Section */}
          <section className="py-10 bg-gray-100">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Announcements
              </h2>
              <SchoolAnnouncements />
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-gray-800" id="explore">
                Why Choose Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
                  <img
                    src="/Academic_Excellence.jpg"
                    alt="Academic Excellence"
                    className="w-full h-60 object-cover mx-auto mb-2 rounded"
                  />
                  <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                  <p className="text-gray-600">
                    Our curriculum is designed to inspire creativity and critical
                    thinking.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
                  <img
                    src="/ExtraCurricular.png"
                    alt="Extracurricular Activities"
                    className="w-full h-60 object-cover mx-auto mb-2 rounded"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    Extracurricular Activities
                  </h3>
                  <p className="text-gray-600">
                    From sports to arts, we provide a holistic learning experience.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
                  <img
                    src="/Expert_teachers.jpeg"
                    alt="Expert Teachers"
                    className="w-full h-60 object-cover mx-auto mb-2 rounded"
                  />
                  <h3 className="text-xl font-semibold mb-2">Expert Teachers</h3>
                  <p className="text-gray-600">
                    Our dedicated and experienced staff ensure quality education.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-10 bg-gradient-to-r from-green-500 to-teal-600 text-white">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Join Our Community?
              </h2>
              <p className="text-lg mb-6">
                Enroll now and be part of our thriving educational family!
              </p>
              <a href="/contact" className="bg-white text-green-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                Apply Now
              </a>
            </div>
          </section>
        </div>

        <Announcements />



      </div>
    </>
  );
}
