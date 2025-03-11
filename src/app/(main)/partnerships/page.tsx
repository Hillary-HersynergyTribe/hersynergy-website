"use client";
import { PageHeader } from "../../components/PageHeader";
import { motion } from "framer-motion";

const missions = [
  { icon: "support-1", text: "Provide free tutorials and tech education" },
  { icon: "support-2", text: "Create networking opportunities" },
  { icon: "support-3", text: "Mentor emerging female tech leaders" },
  { icon: "support-4", text: "Host industry events and workshops" },
];

const partnershipOpportunities = [
  {
    title: "Corporate Partnership Opportunities",
    bg: "bg-violet-50",
    opportunities: [
      {
        img: "corporate-partnership-opportunities-1",
        class: "bg-violet-100 border border-violet-500",
        title: "resource partner",
        description:
          "Provide valuable resources, tools, or exclusive job opportunities to our diverse and ambitious members.",
      },
      {
        img: "corporate-partnership-opportunities-2",
        class: "bg-blue-100 border border-violet-500",
        title: "program sponsor",
        description:
          "Support initiatives that align with your organization’s DEI goals, such as sponsoring events that educate and empower women, particularly Black Women.",
      },
    ],
  },
  {
    title: "Volunteer Opportunities",
    bg: "bg-white",
    opportunities: [
      {
        img: "volunteer-opportunities-1",
        class: "bg-red-100 border border-violet-500",
        title: "Leadership & Coaching",
        description:
          "If you have 10+ years of experience, we’d love for you to share your knowledge and guidance with our members as a mentor and coach, helping them navigate their careers.",
      },
      {
        img: "volunteer-opportunities-2",
        class: "bg-white-600 border border-violet-500",
        title: "mentor",
        description:
          "With 3+ years of professional experience, you can make a difference by mentoring early-career women and the communities we collaborate with. HerSynergy membership required.",
      },
    ],
  },
  {
    title: "Support Our Impact",
    bg: "bg-violet-50",
    opportunities: [
      {
        img: "support-our-impact-1",
        class: "bg-blue-100 border border-violet-500",
        title: "Contribute to Social Impact",
        description:
          "Help us create lasting change, by donating to the causes that empower women and support the growth of our community.",
      },
      {
        img: "support-our-impact-2",
        class: "bg-violet-50 border border-violet-500",
        title: "Show Appreciation to Our Founders",
        description:
          "Celebrate the work and dedication of our Founders by contributing to a thoughtful gift that acknowledge their ongoing commitment to our mission.",
      },
    ],
  },
];

const impressions = [
  { title: "20,000+", description: "Social Media Impressions" },
  { title: "1,800+", description: "Women Reached" },
  { title: "1,100+", description: "Social Impact Beneficiaries" },
];
const PartnershipsPage = () => {
  return (
    <>
      <PageHeader title="partnerships" bgImage="partnerships"></PageHeader>

      <section className="bg-[url(/png/partnership-bg-1.png)] bg-cover bg-center p-140px max-lg:px-24px max-lg:py-24px">
        <div className="flex flex-col gap-16px lg:gap-32px">
          <h1 className="text-violet-500 text-24 lg:text-36 font-bold">
            Support Our Mission
          </h1>
          <p className="text-18">
            Your donation empowers the next generation of women in tech. Every
            contribution helps us create more resources, host skill-building
            workshops, and connect talented women with industry mentors. Whether
            it's a one-time gift or monthly support, you're directly investing
            in closing the gender gap in technology.
          </p>

          <p className="text-18">By donating today, you help us:</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24px">
            {missions.map((mission, i) => (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
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
                key={mission.icon}
                className="bg-violet-200 rounded-xl px-24px py-8px flex items-center gap-24px"
              >
                <img src={`/svg/${mission.icon}.svg`} alt={mission.text} />

                <span className="text-18">{mission.text}</span>
              </motion.div>
            ))}
          </div>
          <a
            href="https://forms.gle/yu4JvcKMSfWWBPUm8"
            target="_blank"
            className="bg-violet-500 rounded-3xl text-white font-bold text-16 w-fit px-24px py-16px mt-24px"
          >
            Donate Now
          </a>
        </div>
      </section>

      <section className="p-24px lg:p-80px">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.05,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="mx-auto max-w-[1126px] bg-[url(/png/social-bg.png)] bg-center bg-cover rounded-xl"
        >
          <div className="bg-[rgba(182,154,175,0.9)] flex items-center max-sm:flex-wrap gap-24px lg:gap-56px rounded-xl py-24px lg:py-80px px-24px @max-lg:px-48px nav:px-120px">
            <div className="rounded-xl border border-violet-500 bg-violet-50 w-full flex flex-col gap-24px p-16px lg:p-24px min-w-260px nav:min-w-356px ">
              {impressions.map((impression) => (
                <div
                  className="flex flex-col gap-8px text-violet-500 text-center"
                  key={impression.description}
                >
                  <h3 className="text-24 lg:text-36 font-bold">
                    {impression.title}
                  </h3>
                  <p className="text-16 lg:text-20 font-georgia">
                    {impression.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-24px max-w-574px text-violet-900">
              <h2 className="text-24 lg:text-36 font-bold">
                Partner In Empowering Change
              </h2>
              <p className="text-16 lg:text-18">
                Join forces with HerSynergy Tribe to create meaningful impact
                and advance women’s careers across tech and business landscapes.{" "}
              </p>

              <a
                href="https://forms.gle/yu4JvcKMSfWWBPUm8"
                target="_blank"
                className="bg-violet-50 border border-violet-500 rounded-4xl text-violet-500 font-bold text-16 w-fit px-24px py-16px mt-24px"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {partnershipOpportunities.map((oppurtunity) => (
        <section
          key={oppurtunity.title}
          className={`px-24px py-48px lg:p-80px ${oppurtunity.bg}`}
        >
          <div className="max-w-[1128px] mx-auto">
            <div className="border border-violet-500 rounded-xl p-8px mb-24px">
              <h2 className="font-bold text-20 lg:text-24 text-violet-500">
                {oppurtunity.title}
              </h2>
            </div>

            <div className="flex  max-sm:flex-wrap gap-24px">
              {oppurtunity.opportunities.map((o, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: i * 0.05,
                      ease: [0.44, 0, 0, 1],
                    },
                  }}
                  viewport={{
                    amount: "some",
                    once: true,
                  }}
                  key={o.img}
                  className={`rounded-xl flex flex-col gap-24px p-24px w-full ${o.class}`}
                >
                  <img
                    src={`/png/${o.img}.png`}
                    alt={o.img}
                    className="h-100px w-fit"
                  />

                  <h2 className="text-18 lg:text-24 font-bold capitalize">
                    {o.title}
                  </h2>
                  <p className="text-14 lg:text-18">{o.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[url(/png/partnership-bg-2.png)] bg-cover bg-center max-sm:bg-top p-24px lg:py-80px flex flex-col items-center gap-16px lg:gap-32px">
        <h2 className=" text-24 lg:text-32 font-bold text-white text-center">
          Ready to Create Impact?
        </h2>
        <p className="text-14 lg:text-18 text-white font-georgia text-center max-w-400px lg:max-w-744px">
          Whether through partnership or volunteering, involvement creates
          opportunities for women to thrive in tech and business.
        </p>
        <div className="flex items-center gap-24px">
          <a
            href="https://forms.gle/yu4JvcKMSfWWBPUm8"
            target="_blank"
            className="bg-violet-500 rounded-4xl text-white font-semibold lg:font-bold text-16 w-fit px-24px py-8px lg:py-16px"
          >
            Partner With Us
          </a>
          {/* <button className="bg-white rounded-4xl text-violet-500 font-semibold lg:font-bold text-16 w-fit px-24px py-8px lg:py-16px">
            Volunteer Now
          </button> */}
        </div>
      </section>
    </>
  );
};

export default PartnershipsPage;
