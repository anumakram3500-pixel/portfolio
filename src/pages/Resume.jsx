import React, { useEffect, useState } from "react";
import Loader from "../components/Loader.jsx";

const Resume = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // const contact = {
  //   email: "anumakram3500@gmail.com",
  //   phone: "03008890346",
  //   linkedIn: "linkedin.com/in/AnumAkram",
  // };

  // const skills = [
  //   {
  //     id: 1,
  //     name: "Unity",
  //   },

  //   {
  //     id: 2,
  //     name: "C#",
  //   },

  //   {
  //     id: 3,
  //     name: "OOP",
  //   },
  //   {
  //     id: 4,
  //     name: "Data Structure",
  //   },

  //   {
  //     id: 4,
  //     name: "HTML5",
  //   },

  //   {
  //     id: 5,
  //     name: "CSS",
  //   },

  //   {
  //     id: 6,
  //     name: "React.js",
  //   },

  //   {
  //     id: 7,
  //     name: "Java Scrip",
  //   },

  //   {
  //     id: 8,
  //     name: "Tailwind",
  //   },

  //   {
  //     id: 9,
  //     name: "Next.js",
  //   },

  //   {
  //     id: 10,
  //     name: "Python",
  //   },
  // ];

  // const languages = [
  //   {
  //     id: 1,
  //     name: "English",
  //   },
  //   {
  //     id: 2,
  //     name: "Urdu",
  //   },
  // ];

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="  w-full h-auto bg-[#E5E5E5]  pt-10">
          <div className="w-full h-[106px] flex justify-center items-center ">
            <div className="text-2xl font-bold w-[250px] h-[65px] border-5 flex justify-center items-center tracking-[10px]">
              RESUME
            </div>
            {/* </div>
          <div className="w-full flex justify-center">
            <div class="shadow-md resume grid grid-cols-[280px_1fr] max-w-[900px] bg-white rounded-lg overflow-hidden">
              <div class="bg-[#0f4c81] text-white p-6">
                <h2 class="text-lg mb-2 border-b-2 border-white/20 pb-1">
                  Contact Us
                </h2>
                <p class="text-sm leading-relaxed">Email: {contact.email}</p>
                <p class="text-sm leading-relaxed">Phone: {contact.phone}</p>
                <p class="text-sm leading-relaxed">
                  LinkedIn: {contact.linkedIn}
                </p>
                <h2 class="text-lg mt-6 mb-2 border-b-2 border-white/20 pb-1">
                  Experience Skills
                </h2>
                {skills.map((data, id) => (
                  <ul
                    key={id}
                    class="list-none mt-2 text-sm leading-relaxed space-y-1"
                  >
                    <li>{data.name}</li>
                  </ul>
                ))}

                <h2 class="text-lg mt-6 mb-2 border-b-2 border-white/20 pb-1">
                  Languages
                </h2>
                {languages.map((data, id) => (
                  <ul
                    key={id}
                    class="list-none mt-2 text-sm leading-relaxed space-y-1"
                  >
                    <li>{data.name}</li>
                  </ul>
                ))}
              </div>

              <div class="p-8">
                <div class="mb-6">
                  <div class="text-2xl font-bold text-[#0f4c81]">
                    Anum Akram
                  </div>
                  <div class="text-sm text-[#555] mb-5">
                    Unity/ Web Developer
                  </div>
                  <p class="text-base text-[#222]">
                    I am a 7th-semester Information Technology student with
                    expertise in C++, Programming Fundamentals, Object-Oriented
                    Programming (OOP), Data Structures & Algorithms (DSA), and
                    SQL.
                  </p>
                </div>

                <div class="mb-6">
                  <h2 class="text-lg text-[#0f4c81] border-b-2 border-[#f4f6f8] pb-1 mb-3">
                    Work & Academic Experience
                  </h2>
                  <div class="mb-4">
                    <h3 class="text-base font-semibold">Academic Projects</h3>
                    <ul class="list-disc ml-5 mt-1 space-y-1 text-[#222]">
                      <li>
                        Developed a Data Structures project using efficient
                        algorithms.
                      </li>
                      <li>
                        Designed and managed SQL databases for database
                        management coursework.
                      </li>
                      <li>
                        Created a modular application in C++ applying OOP
                        principles.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-base font-semibold">Superior University</h3>
                    <div class="text-xs text-[#555] mb-2">
                      2020 – 2025 | Lahore
                    </div>
                  </div>
                </div>

                <div>
                  <h2 class="text-lg text-[#0f4c81] border-b-2 border-[#f4f6f8] pb-1 mb-3">
                    Education
                  </h2>
                  <p class="text-[#222]">
                    <strong>FSc Pre-Engineering</strong> — Apex College (2020 –
                    2025)
                  </p>
                  <p class="text-[#222]">Sharaqpur Sharif</p>
                </div>
              </div>
            </div> */}
          </div>

          <div className=" flex justify-center">
            {/* <button className="border-r-2 mt-8  border-l-2 px-12 mb-6">
            Download
          </button> */}
            <a
              href="/files/sample.pdf"
              download="Eman-Fatima-Resume.pdf"
              className="border-r-2 mt-8  border-l-2 px-6 mb-6"
            >
              Download PDF
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Resume;
