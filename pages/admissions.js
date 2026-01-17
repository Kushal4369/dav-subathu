const Admissions = () => {
    return (
      <div>
        {/* Header Section */}
        <section className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Admissions Open for 2026
            </h1>
            <p className="text-lg md:text-xl">
              Join our vibrant community of learners. Applications are now open!
            </p>
          </div>
        </section>
  
        {/* Admission Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Admission Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="p-6 bg-white border rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Step 1: Application
                </h3>
                <p className="text-gray-600">
                  Fill out our online application form to begin the admissions
                  process. Ensure all required documents are attached.
                </p>
              </div>
              {/* Step 2 */}
              <div className="p-6 bg-white border rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Step 2: Assessment
                </h3>
                <p className="text-gray-600">
                  Attend a short assessment session to help us understand your
                  strengths and identify the best opportunities for you.
                </p>
              </div>
              {/* Step 3 */}
              <div className="p-6 bg-white border rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Step 3: Enrollment
                </h3>
                <p className="text-gray-600">
                  Complete the enrollment process by submitting the required
                  fees and documentation.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Why Choose Our School?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
        <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our School?
            </h2>
            <p className="text-lg mb-6">
              Don’t miss this opportunity to be part of a community that nurtures
              learning and growth.
            </p>
            <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
            Apply Now
            </a>
          </div>
        </section>
      </div>
    );
  };
  
  export default Admissions;
  