// "use client"; // Keep only if you're using the App Router (not needed for Pages Router)

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
  {
    title: "Principal",
    department: "Administration",
    location: "Main Building",
    type: "Full-Time",
    qualifications: "Master degree in any stream from a recognized university with at least 50% marks. B.Ed. or any equivalent degree from a recognized University.",
    vacancies: 1,
    ageLimit: "35 – 50 Years",
    minExperience: "A minimum of 5-7 years of experience as Principal / Vice Principal AND A minimum of 10 - 12 years of experience as Teaching.Out of this 5-7 years as PGT",
    description:
      "The Principal will be responsible for: Providing effective leadership in the administration of the school, ensuring its continued growth and development. Implementing and monitoring educational programs, curriculum, and school policies. Managing the school's daily operations, staff, and resources. Building and maintaining positive relationships with students, parents, and the community. Promoting a safe, inclusive, and engaging learning environment for all. Knowledge of CBSE rules, NEP 2020, assessment & evaluation"
  },
  {
    title: "Vice Principal",
    department: "Administration",
    location: "Main Building",
    type: "Full-Time",
    qualifications: "Master degree in any stream from a recognized university with at least 50% marks. B.Ed. or any equivalent degree from a recognized University.",
    vacancies: 1,
    ageLimit: "35 – 50 Years",
    minExperience: "A minimum of 8-10 Years of teaching experience .Out of this 3-5 years as PGT/Head of Department/Academic Coordinator.",
    description:
      "Providing effective leadership in the administration of the school, ensuring its continued growth and development. Implementing and monitoring educational programs, curriculum, and school policies. Managing the school's daily operations, staff, and resources. Building and maintaining positive relationships with students, parents, and the community. Promoting a safe, inclusive, and engaging learning environment for all. Knowledge of CBSE rules, NEP 2020, assessment & evaluation"
  },
  {
    title: "TGT Science",
    department: "Academics",
    location: "High School Wing",
    type: "Full-Time",
    qualifications: "Bachelor’s Degree from a recognized university with at least 50% marks in aggregate as well in the concerned subjects. B.Ed. or any equivalent degree from a recognized University. Should pass TET/CTET. In Hindi and English Medium Proficiency in teaching.",
    vacancies: 1,
    description:
      "We are seeking a qualified Science Teacher with experience in CBSE curriculum. Strong communication and classroom management skills are essential.",
  },
    {
    title: "TGT Social Science",
    department: "Academics",
    location: "High School Wing",
    type: "Full-Time",
    qualifications: "Bachelor’s Degree from a recognized university with at least 50% marks in aggregate as well in the concerned subjects. B.Ed. or any equivalent degree from a recognized University. Should pass TET/CTET. In Hindi and English Medium Proficiency in teaching.",
    vacancies: 1,
    description:
      "We are seeking a qualified Science Teacher with experience in CBSE curriculum. Strong communication and classroom management skills are essential.",
  },
  
  {
    title: "TGT Hindi (L.T)",
    department: "Academics",
    location: "High School Wing",
    type: "Full-Time",
    qualifications: "Bachelor’s Degree from a recognized university with at least 50% marks in aggregate as well in the concerned subjects. B.Ed. or any equivalent degree from a recognized University. Should pass TET/CTET. In Hindi and English Medium Proficiency in teaching.",
    vacancies: 1,
    description:
      "We are seeking a qualified Hindi Teacher with experience in CBSE curriculum. Strong communication and classroom management skills are essential.",
  },
  {
    title: "TGT English (L.T)",
    department: "Academics",
    location: "High School Wing",
    type: "Full-Time",
    qualifications: "Bachelor’s Degree from a recognized university with at least 50% marks in aggregate as well in the concerned subjects. B.Ed. or any equivalent degree from a recognized University. Should pass TET/CTET. In Hindi and English Medium Proficiency in teaching.",
    vacancies: 1,
    description:
      "We are seeking a qualified English Teacher with experience in CBSE curriculum. Strong communication and classroom management skills are essential.",
  },
  {
    title: "IT Teacher",
    department: "Academics",
    location: "High School Wing",
    type: "Full-Time",
    qualifications: `At least 50% marks in aggregate in any of the following: BCA/MCA /B.Tech.(CSE/IT), B.Sc (Computer Science).`,
    vacancies: 1,
    description:
      "We are seeking a qualified IT Teacher with experience in CBSE curriculum. Strong communication and classroom management skills are essential.",
  },
    {
    title: "PRT",
    department: "Academics",
    location: "Primary Wing",
    type: "Full-Time",
    qualifications: "The candidate must have JBT with 50% marks/Diploma in Elementary Education (D.El.Ed.).OR Bachelor’s degree from a reconized university with at least 50% marks, B.Ed ( with a 6 month bridge course). Should  pass TET / CTET",
    vacancies: 1,
    description:
      "We are seeking a qualified IT Teacher with experience in CBSE curriculum. Strong communication and classroom management skills are essential.",
  },
     {
    title: "PTI",
    department: "Academics",
    location: "High School Wing",
    type: "Full-Time",
    qualifications: "Bachelor’s degree in Physical Education (B.P.Ed) OR Graduate (any subject) with a diploma/certificate in Physical Education (e.g., D.P.Ed / C.P.Ed). OR Post-graduate in Physical Education (M.P.Ed) ",
    vacancies: 1,
    description:
      "We are seeking a qualified IT Teacher with experience in CBSE curriculum. Strong communication and classroom management skills are essential.",
  },




];

export default function VacanciesPage() {
  const [filter, setFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);

  const departments = ["All", ...new Set(jobs.map((job) => job.department))];

  const filteredJobs =
    filter === "All" ? jobs : jobs.filter((job) => job.department === filter);

  const openModal = (job) => setSelectedJob(job);
  const closeModal = () => setSelectedJob(null);

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-20 relative">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-4">
        Current Vacancies
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Explore the latest openings and become a part of our school family.
      </p>

      {/* Filter Dropdown */}
      <div className="flex justify-center mb-8">
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="border border-blue-300 rounded px-4 py-2 text-blue-800 focus:outline-none focus:ring focus:ring-blue-200"
        >
          {departments.map((dept) => (
            <option key={dept}>{dept}</option>
          ))}
        </select>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job, index) => (
          <motion.div
            key={index}
            onClick={() => openModal(job)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="cursor-pointer border border-blue-200 rounded-lg p-6 shadow hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] bg-white"
          >
            <h2 className="text-xl font-semibold text-blue-700">{job.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{job.department}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium mt-2 px-3 py-1 rounded">
              {job.type}
            </span>
            <div className="mt-4">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded transition-colors duration-200">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No vacancies available in this department currently.
        </p>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg max-w-md w-full p-6 shadow-lg relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-blue-800 mb-2">
                {selectedJob.title}
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Department:</strong> {selectedJob.department}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Location:</strong> {selectedJob.location}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Type:</strong> {selectedJob.type}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Qualifications:</strong> {selectedJob.qualifications}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Number of Vacancies:</strong> {selectedJob.vacancies}
              </p>
              {selectedJob.ageLimit && (
                <p className="text-gray-600 mb-2">
                  <strong>Age Limit:</strong> {selectedJob.ageLimit}
                </p>
              )}
              {selectedJob.minExperience && (
                <p className="text-gray-600 mb-2">
                  <strong>Minimum Experience:</strong> {selectedJob.minExperience}
                </p>
              )}
              <p className="text-gray-600 mb-4">
                <strong>Description:</strong>
                <ul className="list-disc list-inside mt-2">
                  {(() => {
                    let points = selectedJob.description.split(': ');
                    if (points.length > 1) {
                      points = points[1].split('. ').filter(p => p.trim());
                    } else {
                      points = selectedJob.description.split('. ').filter(p => p.trim());
                    }
                    return points.map((point, index) => (
                      <li key={index} className="mb-1">{point.trim()}{point.trim() && '.'}</li>
                    ));
                  })()}
                </ul>
              </p>
              {/* <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded">
                Apply Now
              </button> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-16 space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-blue-800 mb-6">
            Selection Process
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Applicants are requested to fill in the <strong>Interview Application Form</strong> duly completing in all respects. The completed application form has to be submitted at the venue of the interview for verification along with <strong>original documents</strong>, one set of self-attested copies of requisite documents and <strong>two recent passport size photographs</strong>. Interview will be conducted and based on the credentials & performance in the personal interview the applicants will be shortlisted.
          </p>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-semibold text-blue-800 mb-6">
            How to Apply
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Applicants should send their resume on given email address <strong>davsubathu@gmail.com</strong> /What’s App & Speed Post <strong>before 15th January 2026</strong>. The date of interview will be given through email/what’s app and telephone information. Applicants are directed to download the <strong>Interview Application Form</strong> which is available on the website of the D.A.V. Subathu (<strong>https://www.davsubathu.com</strong>). Candidates are advised to bring filled <strong>Interview Application Form</strong> & <strong>Original Certificates</strong> for verification at the time of Interview.
          </p>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-semibold text-blue-800 mb-6">
            School Address Detail
          </h1>
          <div className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            <p className="mb-2"><strong>D.A.V. Subathu</strong></p>
            <p className="mb-2">Vill. Kalyan (Near Kainchi Mod) P.O. Subathu</p>
            <p className="mb-2">Teh. Kasauli Distt. Solan HP-173206</p>
            <p className="mb-2"><strong>Contact No. 01792-292310 , 93174-27672, 80910-05962</strong></p>
            <p className="mb-2"><strong>Email: davsubathu@gmail.com</strong></p>
            <p><strong>Website: www.davsubathu.com</strong> Find us on Google Map.</p>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-semibold text-blue-800 mb-6">
            Documents Required
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="text-left">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">For Principal & Vice Principal</h2>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>2 passport size photograph.</li>
                <li>2 photocopies of Aadhaar Card.</li>
                <li>2 photocopies of all educational certificate/degree/Experience certificate required.</li>
              </ul>
            </div>
            <div className="text-left">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">For Teaching Posts</h2>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>2 passport size photograph.</li>
                <li>2 photocopies of Aadhaar Card.</li>
                <li>2 photocopies of 10th, 12th, Graduation/Other Master Degree, B.Ed. , JBT/ D.EI.Ed, TET/CTET and Other Degree/Diploma.</li>
                <li>Experience certificate (if any).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
