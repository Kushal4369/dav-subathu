// "use client"; // Keep only if you're using the App Router (not needed for Pages Router)

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
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
*/

const jobs = []; // Data kept commented above; page should show no vacancies.

export default function VacanciesPage() {
  // Vacancy data and interactive elements are disabled while the site is showing a no-vacancies message.
  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-20 relative">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-4">
        Current Vacancies
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Explore the latest openings and become a part of our school family.
      </p>

      {/* Vacancy list is hidden while no positions are available */}
      <div className="text-center mt-12">
        <p className="text-gray-500 text-xl">
          No vacancies are available currently.
        </p>
      </div>

      {/* Modal and job details are disabled while no vacancies are shown. */}

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
            Applicants should send their resume on given email address <strong>davsubathu@gmail.com</strong> /What’s App & Speed Post <strong>before 25th January 2026</strong>. The date of interview will be given through email/what’s app and telephone information. Applicants are directed to download the <strong>Interview Application Form</strong> which is available on the website of the D.A.V. Subathu (<strong>https://www.davsubathu.com</strong>). Candidates are advised to bring filled <strong>Interview Application Form</strong> & <strong>Original Certificates</strong> for verification at the time of Interview.
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
