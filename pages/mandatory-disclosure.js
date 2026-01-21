const MandatoryDisclosure = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mandatory Disclosure</h1>
          <p className="text-lg md:text-xl">
            As per CBSE norms, we provide all necessary disclosures regarding our school.
          </p>
        </div>
      </section>

      {/* Document Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          {/* Document 1 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <a
                href="/pdfs/Mandatory Disclosure Details.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Mandatory Disclosure Document by SARAS
              </a>
            </div>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Important Documents
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-center">
            Below are the official documents and reports as required by CBSE guidelines.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Document 1 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600"> Society Registration Certificate</h3>
              <a
                href="/pdfs/society registration certificate and memoredum of association.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>
            {/* Document 2 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">No Objection Certificate (NOC)</h3>
              <a
                href="/pdfs/Non objection certificate.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>
            {/* Document 3 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Recognition Certificate</h3>
              <a
                href="/pdfs/Recognition  certificate.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>

            {/* Document 5 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600"> Affidavit of Non-Proprietary Character</h3>
              <a
                href="/pdfs/Affidavit of non proprietary character.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>
            {/* Document 6 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">School Management Committee</h3>
              <a
                href="/pdfs/School managing committee.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>
            {/* Document 7 */}
            {/* <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Academic Calendar</h3>
              <a
                href="/pdfs/ACADEMIC CALENDER 2026.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div> */}

            {/* Document 9 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Enrollment of Students</h3>
              <a
                href="/pdfs/Enrollment of students.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>
            {/* Document 10 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Staff Statement</h3>
              <a
                href="/pdfs/staff statement.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>
            {/* Document 11 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Safe Drinking Water and Sanitation Certificate</h3>
              <a
                href="/pdfs/water and sanitation certificate.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>
            {/* Document 12 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Fire Safety Certificate</h3>
              <a
                href="/pdfs/Fire safety certificate.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>
            {/* Document 13 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Certificate of Land</h3>
              <a
                href="/pdfs/Certificate of land.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>
            {/* Document 14 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">List of PTA Members</h3>
              <a
                href="/pdfs/List of PTA members.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>
            {/* Document 15 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Infrastructure Details</h3>
              <a
                href="/pdfs/Infrastructure Details.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>

            {/* Document 16 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Building Certificate</h3>
              <a
                href="/pdfs/Building safety certificate.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>

            {/* Document 17 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Fee Structure</h3>
              <a
                href="/pdfs/fee structure.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>

            {/* Document 18 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">DEO Certificate</h3>
              <a
                href="/pdfs/DEO Certificate.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>
            {/* Document 19 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Water Sample Test Report</h3>
              <a
                href="/pdfs/water sample test report 001.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>
            {/* Document 20 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Self Certificate</h3>
              <a
                href="/pdfs/Self Certification.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>
            {/* Document 21 */}
            <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Non-Proprietary Character</h3>
              <a
                href="/pdfs/Non proprietary Character 001.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>
            {/* Document 22 */}
             <div className="p-6 bg-white border rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Certificate of Renewal of School</h3>
              <a
                href="/pdfs/Renewal2025.pdf"
                target="_blank"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                View PDF
              </a>
            </div>
          </div>


        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-700 to-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-lg mb-6">
            If you need any additional documents or have any queries, feel free to contact us.
          </p>
          <a
            href="/contact"
            className="bg-white text-gray-700 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default MandatoryDisclosure;
