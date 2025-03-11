"use client";
import { PageHeader } from "../../components/PageHeader";
import { motion } from "framer-motion";

const howToJoin = [
  {
    img: "3-years-experience",
    title: "3+ years of professional experience",
    description:
      "Your insights and expertise enrich our community. By sharing your journey, we all grow stronger together.",
  },
  {
    img: "professional-growth",
    title: "Professional Growth & Community Development",
    description:
      "We welcome women committed to learning and giving back. Together, we create opportunities for collective success.",
  },
  {
    img: "similar-values",
    title: "Similar Values & Insights",
    description:
      "Empowerment, collaboration, and authenticity drive us. We seek members who believe in uplifting and inspiring others.",
  },
];

const benefits = [
  {
    img: "exclusive-access",
    title: "Exclusive access",
    description:
      "Elevate your journey with early access to impactful webinars, events, and workshops delivered by tech pioneers.",
  },
  {
    img: "networking",
    title: "networking",
    description:
      "Connect with driven mid to senior women in tech. Together, our members have created businesses, launched projects, and more.",
  },
  {
    img: "career-growth",
    title: "Career growth",
    description:
      "Access exclusive opportunities, free premium resources, and expert advice tailored to your career goals.",
  },
];
const MembershipPage = () => {
  return (
    <>
      <PageHeader title="membership" bgImage="membership"></PageHeader>

      <section className="bg-[url(/png/Membership.png)] bg-cover bg-center p-24px lg:p-80px">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
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
          className="text-24 lg:text-48 lg:leading-[150%] text-center font-bold text-violet-500 max-w-[1132px] mx-auto mb-24px"
        >
          Become part of a thriving community of women who are redefining the
          tech industry.
        </motion.h1>

        <motion.p
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
          className="text-18 lg:text-28 font-georgia text-center max-w-928px mx-auto"
        >
          At HerSynergy Tribe, our membership is more than just access, it’s
          about connection, growth, and empowerment.
        </motion.p>
      </section>

      <section className="bg-violet-50 p-24px lg:p-80px flex flex-col gap-24px justify-center items-center">
        <div className="flex flex-wrap justify-center gap-24px lg:gap-32px">
          {benefits.map((benefit, i) => (
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
              key={benefit.img}
              className={`rounded-xl max-w-382px max-[770px]:max-w-320px w-full odd:bg-[url(/png/card-bg-2.png)] even:bg-[url(/png/card-bg-1.png)] bg-bottom bg-cover rounded-b-2xl transition-all duration-500 ease-in-out hover:cursor-pointer hover:shadow-popUp`}
            >
              <img src={`/png/${benefit.img}.png`} alt={`${benefit.img}-img`} />
              <div className="p-24px">
                <h3 className="text-18 lg:text-24 font-bold text-violet-500 mb-24px capitalize">
                  {benefit.title}
                </h3>
                <p className="text-14 lg:text-16 font-georgia">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <a
          href="https://forms.gle/XK5KF2oCxsSUc2oE6"
          target="_blank"
          className="bg-violet-500 rounded-3xl text-white text-12 lg:text-18 lg:font-bold w-fit px-24px py-8px lg:px-48px lg:py-16px"
        >
          Join Our Tribe
        </a>
      </section>

      <section className="bg-blue-50 p-24px lg:p-80px">
        <div className="max-w-[1122px] mx-auto flex flex-col gap-24px lg:gap-32px">
          <h1 className="text-center text-24 lg:text-32 font-bold text-violet-500">
            How To Join
          </h1>
          <p className="text-center font-georgia text-16 lg:text-20">
            To ensure our community remains vibrant and supportive, we look for
            members with:
          </p>

          <div className="flex gap-24px max-md:flex-wrap">
            {howToJoin.map((item, i) => (
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
                key={item.img}
                className="p-24px flex flex-col gap-16px bg-blue-100 rounded-xl transition-all duration-500 ease-in-out hover:cursor-pointer hover:shadow-popUp"
              >
                <img
                  src={`/png/${item.img}.png`}
                  alt={`${item.title} icon`}
                  className="h-64px w-fit"
                />
                <h3 className="text-16 lg:text-20 font-bold text-violet-500">
                  {item.title}
                </h3>

                <p className="text-16 font-georgia">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MembershipPage;
