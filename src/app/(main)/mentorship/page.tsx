"use client";
import { useEffect, useState } from "react";
import { PageHeader } from "../../components/PageHeader";

const mentees = [
  { img: "Tosin Adewunmi", name: "Tosin Adewunmi", role: "Product Management" },
  { img: "Melody Anaele", name: "Melody Anaele", role: "CX Product Research" },
  { img: "Sarah Paul", name: "Sarah Paul", role: "Product Marketing" },
  {
    img: "Rukayat Ayinla",
    name: "Rukayat Ayinla",
    role: "Software Engineering",
  },
  {
    img: "Fatima S. Muhammad",
    name: "Fatima S. Muhammad",
    role: "Product Design",
  },
  { img: "Pamimo Johnson", name: "Pamimo Johnson", role: "Marketing & Comms." },
  { img: "Nafisat Aliyu", name: "Nafisat Aliyu", role: "Data Analysis" },
  { img: "Oyinye Uchenna", name: "Oyinye Uchenna", role: "Marketing" },
  { img: "Lucy Obahor", name: "Lucy Obahor", role: "Software Engineering" },
  { img: "Bilkisu Garba", name: "Bilkisu Garba", role: "Product Design" },
  {
    img: "Lukna’ankas Dayol",
    name: "Lukna’ankas Dayol",
    role: "Product Management",
  },
  {
    img: "Precious Ukwade",
    name: "Precious Ukwade",
    role: "Marketing & Comms",
  },
  {
    img: "Moyinoluwa Anifowose",
    name: "Moyinoluwa Anifowose",
    role: "Marketing & Comms",
  },
  { img: "Mirabella-Paulicia", name: "Mirabella-Paulicia", role: "UX Writing" },
  { img: "Joy Nwachuku", name: "Joy Nwachuku", role: "Product Marketing" },
  { img: "Soni Mwangi", name: "Soni Mwangi", role: "Software Engineering" },
  {
    img: "Jessica Correa Ochoa",
    name: "Jessica Correa Ochoa",
    role: "Data Analysis",
  },
  {
    img: "Kayinsola Ibikunle",
    name: "Kayinsola Ibikunle",
    role: "Growth Product Mgt.",
  },
  {
    img: "Barakat Ajoke Ogusola",
    name: "Barakat Ajoke Ogusola",
    role: "Operations",
  },
  {
    img: "Adeayo Adekunle",
    name: "Adeayo Adekunle",
    role: "Product Marketing",
  },
  {
    img: "Halima Kundiri",
    name: "Halima Kundiri",
    role: "Software Engineering",
  },
  { img: "Iniobong Akpan", name: "Iniobong Akpan", role: "Product Marketing" },
  { img: "Ifunanya Okafor", name: "Ifunanya Okafor", role: "Product Design" },
  { img: "Favour Ebube Obi", name: "Favour Ebube Obi", role: "UX Writing" },
  {
    img: "Chinwendu Onuchukwu",
    name: "Chinwendu Onuchukwu",
    role: "Product Management",
  },
  {
    img: "Boluwatife Olorun",
    name: "Boluwatife Olorun",
    role: "Growth Product Mgt.",
  },
];

const mentors = [
  { img: "Fola Animashaun", name: "Fola Animashaun", role: "Data Engineer" },
  {
    img: "Iwalola Sobowale",
    name: "Iwalola Sobowale",
    role: "CX & Product Researcher",
  },
  { img: "Sade Onabowale", name: "Sade Onabowale", role: "Product Operations" },
  {
    img: "Motunrayo Koyejo",
    name: "Motunrayo Koyejo",
    role: "Software Engineer",
  },
  {
    img: "Pelumi Muyiwa-Oni",
    name: "Pelumi Muyiwa-Oni",
    role: "Frontend Engineer",
  },
  { img: "Joy David", name: "Joy David", role: "Product Manager" },
  { img: "Tolu Ajibola", name: "Tolu Ajibola", role: "Operations Lead" },
  {
    img: "Jeniffer Echenim",
    name: "Jeniffer Echenim",
    role: "Software Engineer",
  },
  {
    img: "Busolami Kehinde",
    name: "Busolami Kehinde",
    role: "Product Manager",
  },
  {
    img: "Chidubem Emelumadu",
    name: "Chidubem Emelumadu",
    role: "Senior Operations Manager",
  },
  { img: "Chiamaka Eneje", name: "Chiamaka Eneje", role: "UX writer" },
  { img: "Winifred Ekunife", name: "Winifred Ekunife", role: "Product Design" },
  { img: "Ore Badmus", name: "Ore Badmus", role: "Product Marketing Lead" },
  { img: "Hazel Agoni", name: "Hazel Agoni", role: "Product Growth Manager" },
  { img: "Faith Ida", name: "Faith Ida", role: "Software Engineer" },
  { img: "Okonkwo Nmesoma", name: "Okonkwo Nmesoma", role: "Product Design" },
  { img: "Ruth Odu", name: "Ruth Odu", role: "Product Designer" },
];

const MentorshipPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMoreMentor, setShowMoreMentor] = useState(false);

  const displayedMentees = showMore ? mentees : mentees.slice(0, 8);

  const displayedMentors = showMoreMentor ? mentors : mentors.slice(0, 8);

  return (
    <>
      <PageHeader title="mentorship" bgImage="mentorship"></PageHeader>

      <section className="px-24px py-48px lg:p-80px bg-violet-50">
        <div className="mx-auto max-w-[1112px] bg-[url(/png/mentorship-bg.png)] bg-center bg-cover py-48px lg:py-120px rounded-xl flex flex-col items-center gap-24px">
          <h1 className="text-24 lg:text-32 text-center text-white max-w-712px">
            Position the Next Generation of Tech Leaders for Success
          </h1>
          <p className="text-16 lg:text-20 text-center text-white">
            Apply to be a HerSynergy Tribe mentor in a few clicks!
          </p>
          <a
            href="https://forms.gle/yu4JvcKMSfWWBPUm8"
            target="_blank"
            className="bg-white rounded-3xl text-violet-500 text-14 lg:text-18 font-bold w-fit px-24px py-12px lg:px-48px lg:py-16px flex items-center gap-8px"
          >
            Become a mentor
          </a>
        </div>
      </section>

      <section className="bg-[url(/png/impact-bg.png)] bg-cover px-24px py-48px lg:p-80px">
        <div className="max-w-[1122px] mx-auto flex flex-col items-center gap-24px">
          <h2 className="text-24 lg:text-32 font-bold text-violet-500 capitalize">
            Meet our mentees
          </h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24px">
            {displayedMentees.map((mentee) => (
              <div
                key={mentee.img}
                className="rounded-xl border border-violet-500 relative"
              >
                <img
                  src={`/png/mentees/${mentee.img}.png`}
                  alt={mentee.name}
                  className="rounded-[10px]"
                />

                <div className="absolute bottom-20px left-1/2 -translate-x-1/2 rounded-xl py-4px px-24px bg-violet-500 border border-violet-50 text-violet-50 text-center">
                  <p className="text-14 lg:text-16 font-semibold whitespace-nowrap">
                    {mentee.name}
                  </p>
                  <p className="text-12 lg:text-14 whitespace-nowrap">
                    {mentee.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="bg-violet-500 rounded-3xl text-white text-14 lg:text-18 font-bold w-fit px-24px py-12px lg:px-48px lg:py-16px flex items-center gap-8px"
            onClick={() => setShowMore(!showMore)}
          >
            See {showMore ? "Less" : "More"}
            <img
              src="/svg/arrow-long-down.svg"
              alt="arrow down"
              className={`transition-all duration-500 ease-in-out ${
                showMore ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </section>

      <section className="bg-[url(/png/impact-bg.png)] bg-cover px-24px py-48px lg:p-80px">
        <div className="max-w-[1122px] mx-auto flex flex-col items-center gap-24px">
          <h2 className="text-24 lg:text-32 font-bold text-violet-500">
            Get To Know Our Mentors
          </h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24px">
            {displayedMentors.map((mentor) => (
              <div
                key={mentor.img}
                className="rounded-xl border border-violet-500 relative"
              >
                <img
                  src={`/png/mentors/${mentor.img}.png`}
                  alt={mentor.name}
                  className="rounded-[10px]"
                />

                <div className="absolute bottom-20px left-1/2 -translate-x-1/2 rounded-xl py-4px px-24px bg-violet-500 border border-violet-50 text-violet-50 text-center">
                  <p className="text-14 lg:text-16 font-semibold whitespace-nowrap">
                    {mentor.name}
                  </p>
                  <p className="text-12 lg:text-14 whitespace-nowrap">
                    {mentor.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="bg-violet-500 rounded-3xl text-white text-14 lg:text-18 font-bold w-fit px-24px py-12px lg:px-48px lg:py-16px flex items-center gap-8px"
            onClick={() => setShowMoreMentor(!showMoreMentor)}
          >
            See {showMoreMentor ? "Less" : "More"}
            <img
              src="/svg/arrow-long-down.svg"
              alt="arrow down"
              className={`transition-all duration-500 ease-in-out ${
                showMoreMentor ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </section>

      <section className="bg-blue-100"></section>
    </>
  );
};

export default MentorshipPage;
