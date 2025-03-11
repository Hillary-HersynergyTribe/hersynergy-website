"use client";
import { useState } from "react";
import { PageHeader } from "../../components/PageHeader";
import { Testimonials } from "@/app/components/Testimonials";
import { motion } from "framer-motion";

const mentees = [
  { img: "Tosin Adewunmi", name: "Melody Anaele", role: "Product Management" },
  {
    img: "Melody Anaele",
    name: "Tosin Adewunmi ",
    role: "CX Product Research",
  },
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
  { img: "Oyinye Uchenna", name: "Onyinye Uchenna", role: "Operations" },
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
    name: "Boluwatife Oloruntola",
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
    name: "Jennifer Echenim",
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

const menteeTestimonies = [
  {
    img: "Nafisat Aliyu",
    name: "Nafisat Aliyu",
    role: "Data Analysis",
    title: "“I Had An Exceptional Mentor!” ",
    description:
      "“I had an exceptional mentor who guided me on my data engineering journey. She simplified complex concepts, inspired confidence, and consistently pushed me to excel. I’m incredibly grateful for the knowledge she has imparted, which will stay with me throughout my career. Thank you, HerSynergy Tribe, for organizing this wonderful program.”",
  },
  {
    img: "Jessica Correa Ochoa",
    name: "Jessica Correa Ochoa",
    role: "Data Analysis",
    title: "“I Really Enjoyed My Mentorship!”",
    description:
      "“I really enjoyed the mentorship and feel like I've significantly improved my skills in data analytics. My mentor, Fola, is amazing; she helped me explore various career paths in data analytics and guided me on how to pursue them. I am deeply grateful to her and for this incredible mentoring opportunity.”",
  },
  {
    img: "Moyinoluwa Anifowose",
    name: "Moyinoluwa Anifowose",
    role: "Product Manager",
    title: "“A Safe Space for Every Woman in Tech!” ",
    description:
      "“The mentorship program was a smooth journey. My mentor’s guidance throughout this experience is something I do not take for granted. I am grateful to her for being so generous with her knowledge. She’s a mirror of possibilities! I look forward to an amazing relationship even after the program wraps up. I am such a fan!”",
  },
  {
    img: "Favour Ebube Obi",
    name: "Favour Ebube Obi",
    role: "UX Writing",
    title: "“It Was Impactful!”",
    description:
      "“I truly appreciate being part of this mentorship program and all the effort HerSynergy Tribe put into making it impactful. The patience, encouragement, and genuine care from my mentor made me feel seen and supported every step of the way.”",
  },
  {
    img: "Mirabella-Paulicia",
    name: "Mirabella-Paulicia",
    role: "UX Writing",
    title: "“It Was A Refreshing Experience!”",
    description:
      "“The program was a refreshing experience. My mentor tailored our sessions perfectly to align with my career path, sharing insights I didn’t even realize I needed until they proved incredibly helpful.”",
  },
];

const mentorTestimonies = [
  {
    img: "Busolami Kehinde",
    name: "Busolami Kehinde",
    role: "Product Manager",
    title: "“It Was A Refreshing Experience!” ",
    description:
      "“The most rewarding part of the mentorship program for me has been witnessing my mentee’s growth and seeing how far they’ve come in such a short time.”",
  },
  {
    img: "Sade Onabowale",
    name: "Sade Onabowale",
    role: "Product Operations",
    title: "“It’s Been Eye-Opening & Fulfilling!”",
    description:
      "“It’s been eye-opening to understand the areas where people need support, especially since many local schools don’t provide adequate guidance during or after graduation. It’s been fulfilling to shepherd one of my mentees as she prepares for a new role and works on upskilling herself.”",
  },
  {
    img: "Chiamaka Eneje",
    name: "Chiamaka Eneje",
    role: "UX Writing",
    title: "“Being A Mentor Has Refined My Skillsl!”",
    description:
      "“Being a mentor in HerSynergy’s mentorship program has helped me refine my own understanding of the hard skills required in my industry.”",
  },
  {
    img: "Jeniffer Echenim",
    name: "Jennifer Echenim",
    role: "Software Engineer",
    title: "“Such A Meaningful Experience!”",
    description:
      "“Offering solutions to challenges my mentees encounter during their assignments and guiding them on how to collaborate effectively with teams has been such a meaningful experience” ",
  },
];

const MentorshipPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMoreMentor, setShowMoreMentor] = useState(false);

  const displayedMentees = showMore ? mentees : mentees.slice(0, 8);

  const displayedMentors = showMoreMentor ? mentors : mentors.slice(0, 8);

  return (
    <>
      <PageHeader title="mentorship" bgImage="mentorship"></PageHeader>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0,
            ease: [0.44, 0, 0, 1],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="px-24px py-48px lg:p-80px bg-violet-50"
      >
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
      </motion.section>

      <section className="bg-[url(/png/impact-bg.png)] bg-cover px-24px py-48px lg:p-80px">
        <div className="max-w-[1122px] mx-auto flex flex-col items-center gap-24px">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="text-24 lg:text-32 font-bold text-violet-500 capitalize"
          >
            Meet our mentees
          </motion.h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24px">
            {displayedMentees.map((mentee, i) => (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.2,
                    delay: i * 0.1,
                    ease: [0.44, 0, 0, 1],
                  },
                }}
                viewport={{
                  amount: "some",
                  once: true,
                }}
                key={mentee.img}
                className="rounded-xl border border-violet-500 relative"
              >
                <img
                  src={`/png/mentees/${mentee.img}.png`}
                  alt={mentee.name}
                  className="rounded-[10px]"
                />

                <div className="absolute bottom-20px left-1/2 -translate-x-1/2 rounded-xl py-4px px-24px w-[calc(100%-40px)] bg-violet-500 border border-violet-50 text-violet-50 text-center">
                  <p className="text-14 lg:text-16 font-semibold whitespace-nowrap">
                    {mentee.name}
                  </p>
                  <p className="text-12 lg:text-14 whitespace-nowrap">
                    {mentee.role}
                  </p>
                </div>
              </motion.div>
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

      <section className="bg-blue-50 py-48px lg:py-80px">
        <Testimonials
          title="Here’s What Some Mentees Have
          Said About The Program:"
          type="mentees"
          testimonials={menteeTestimonies}
        ></Testimonials>
      </section>

      <section className="bg-[url(/png/impact-bg.png)] bg-cover px-24px py-48px lg:p-80px">
        <div className="max-w-[1122px] mx-auto flex flex-col items-center gap-24px">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="text-24 lg:text-32 font-bold text-violet-500"
          >
            Get To Know Our Mentors
          </motion.h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24px">
            {displayedMentors.map((mentor, i) => (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.2,
                    delay: i * 0.1,
                    ease: [0.44, 0, 0, 1],
                  },
                }}
                viewport={{
                  amount: "some",
                  once: true,
                }}
                key={mentor.img}
                className="rounded-xl border border-violet-500 relative"
              >
                <img
                  src={`/png/mentors/${mentor.img}.png`}
                  alt={mentor.name}
                  className="rounded-[10px]"
                />

                <div className="absolute bottom-20px left-1/2 -translate-x-1/2 rounded-xl w-[calc(100%-40px)] py-4px px-24px bg-violet-500 border border-violet-50 text-violet-50 text-center">
                  <p className="text-14 lg:text-16 font-semibold whitespace-nowrap">
                    {mentor.name}
                  </p>
                  <p className="text-12 lg:text-14 whitespace-nowrap">
                    {mentor.role}
                  </p>
                </div>
              </motion.div>
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

      <section className="bg-blue-100 py-48px lg:py-80px">
        <Testimonials
          title="Here’s What Some Mentors & Members Have Said About The Program:"
          type="mentors"
          testimonials={mentorTestimonies}
        ></Testimonials>
      </section>
    </>
  );
};

export default MentorshipPage;
