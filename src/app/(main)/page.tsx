"use client";
import Link from "next/link";
import { motion, AnimatePresence, animate } from "framer-motion";
import { Testimonials } from "../components/Testimonials";

const fuelingGrowthCards = [
  {
    title: "volunteer",
    description:
      "Whether guiding women with your expertise or assisting at events, your volunteer efforts fuel our mission of empowerment.",
    button: "Become a volunteer",
    link: "",
    buttonColor: "bg-[#735954]",
    titleColor: "text-[#735954]",
  },
  {
    title: "mentorship",
    description:
      "Be the bridge to success-mentor women as they navigate the complexities of mid-to-senior-level careers.",
    button: "Be a mentor",
    link: "",
    buttonColor: "bg-violet-600",
    titleColor: "text-violet-600",
  },
  {
    title: "partnership",
    description:
      "Partner with us to tap into a community of impressive women in tech who are passionate about growth and impact.",
    button: "Partner with us",
    link: "",
    buttonColor: "bg-[#2B3645]",
    titleColor: "text-[#2B3645]",
  },
];

const promotingCards = [
  {
    title: "community",
    description:
      "A safe space to share, learn, and grow alongside women as ambitious as you are.",
  },
  {
    title: "growth",
    description:
      "Expand your career toolkit with insights from industry leaders, job opportunities, and tailored learning experiences.",
  },
  {
    title: "impact",
    description:
      "Be part of a movement transforming lives through mentorship and social impact.",
  },
];

const spotlightFeatures = [
  "Exclusive Resources",
  "Events & Webinars",
  "Mentorship Programs",
  "Career Opportunities",
];

const story = [
  {
    title: "Our Mission:",
    description:
      "To equip ambitious women with the tools, support, and community they need to advance confidentially in their careers.",
  },
  {
    title: "Our Vision:",
    description:
      "To see women in every industry attain the highest levels of leadership, strengthened by a community that fuels their success.",
  },
  {
    title: "Core Values:",
    description: "Connection, Empowerment, Authenticity, Equity, Growth",
  },
];

const brands = [
  { name: "lyft", link: "https://www.lyft.com/" },
  { name: "moniepoint", link: "https://moniepoint.com/" },
  { name: "paystack", link: "https://paystack.com/" },
  { name: "microsoft", link: "https://www.microsoft.com/" },
  { name: "ayden", link: "https://www.adyen.com/" },
  { name: "norebase", link: "https://norebase.com/" },
];

const testimonials = [
  {
    img: "Nenjom Asuk",
    name: "Nenjom Asuk",
    role: "Legal Practitioner, Tech Innovation, Fintech",
    title: "“Incredibly Helpful to my Growth!”",
    description:
      "“I’ve had the opportunity to meet people who have been incredibly helpful to my growth. The conversations have been so helpful and have pushed me to be bolder in my choices, e.g. the discussions on 10-year plans and salary negotiations. They’ve also provided valuable insights into certain back-end processes. I look forward to giving back to this community that has enriched my career.”",
  },
  {
    img: "Florence Dairo",
    name: "Florence Dairo",
    role: "Co-Founder, Chief Product Officer, Zonda",
    title: "“A Memorable and Impactful Platform!”",
    description:
      "“It has been both memorable and impactful for me. The bravery and openness of the women in the group have deeply inspired me, creating a space for reflection and growth. I’ve learned so much and am excited about opportunities to contribute more as we continue to build this amazing community together.”",
  },
  {
    img: "Izzie Ekong",
    name: "Izzie Ekong",
    role: "Digital Creator, Temsi Africa",
    title: "“A Safe Space for Every Woman in Tech!”",
    description:
      "“I love the honesty, vulnerability, and intelligence of the women in the community.”",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-[url(/png/hero-section.png)] bg-[auto_110%] lg:bg-cover bg-center w-full h-[95vh] px-24px">
        <div className="h-full w-full flex flex-col gap-32px lg:gap-64px items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: 0,
                ease: [0.12, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="text-32 lg:text-48 text-white font-bold max-w-748px w-full text-center"
          >
            Where Ambition Meets The Support It Deserves
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: 0,
                ease: [0.12, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="text-18 lg:text-28 text-white max-w-936px w-full text-center"
          >
            The premier community equipping women to navigate mid to senior
            level careers with confidence and connection
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: 0,
                ease: [0.12, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="flex items-center gap-24px"
          >
            <Link
              href="/membership"
              className="bg-violet-500 rounded-4xl text-white font-bold text-16 w-fit px-24px py-16px mt-24px"
            >
              Join Now
            </Link>
            <Link
              href="/partnerships"
              className="bg-white rounded-4xl text-violet-500 font-bold text-16 w-fit px-24px py-16px mt-24px"
            >
              Partner with Us
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-24px py-48px lg:p-80px bg-white">
        <h1 className="text-32 text-violet-500 font-bold text-center mb-24px lg:mb-48px">
          Our Members Represent Global Brands
        </h1>

        <div className="flex items-center justify-center gap-8px flex-wrap">
          {brands.map((brand) => (
            <a key={brand.name} href={brand.link} target="_blank">
              <img src={`/svg/${brand.name}.svg`} alt={brand.name} />
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white-500 px-24px py-48px lg:p-80px">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
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
        >
          <h1 className="text-24 lg:text-36 font-bold text-violet-500 text-center mb-24px lg:mb-44px">
            The HerSynergy Story: Our Mission & Values
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-24px lg:gap-44px">
            <div className="flex flex-col gap-24px order-2 nav:order-1">
              {story.map((s) => (
                <div key={s.title}>
                  <h2 className="text-18 lg:text-32 text-violet-500 font-bold">
                    {s.title}
                  </h2>
                  <p className="text-14 lg:text-18 text-violet-500 font-georgia max-w-460px">
                    {s.description}
                  </p>
                </div>
              ))}

              <Link
                href="/about-us"
                className="bg-violet-500 rounded-3xl text-white text-12 lg:text-16 font-semibold w-fit px-12px py-8px lg:px-24px lg:py-16px"
              >
                Learn More
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
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
              className="max-w-600px order-1 nav:order-2"
            >
              <img src="/png/our-story.png" alt="our story" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section>
        <div className="p-24px lg:py-80px flex flex-col gap-32px bg-black-50">
          <h1 className="text-24 lg:text-36 text-violet-700 font-bold text-center">
            Promoting the Next Level of Women in Tech
          </h1>

          <div className="flex gap-24px items-center justify-center flex-wrap">
            {promotingCards.map((card, i) => (
              <motion.div
                initial={{ opacity: 0, y: 12 * (i + 1) }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0,
                    ease: [0, 0, 0, 1],
                  },
                }}
                viewport={{
                  amount: "some",
                  once: true,
                }}
                key={card.title}
                className="p-24px bg-white-500 rounded-lg flex flex-col items-center justify-center gap-16px lg:max-w-360px w-full transition-all duration-500 ease-in-out hover:cursor-pointer hover:shadow-popUp"
              >
                <img src={`/png/${card.title}.png`} alt={card.title} />
                <h2 className="font-nunito text-violet-600 text-24 font-bold capitalize">
                  {card.title}
                </h2>
                <p className="text-16 font-georgia text-center lg:max-w-288px w-full">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-violet-600 p-24px lg:py-80px flex flex-col gap-32px">
        <h1 className="text-24 lg:text-36 text-white-50 font-bold text-center">
          Fueling Growth Through Collective Impact
        </h1>

        <div className="flex gap-24px items-center justify-center flex-wrap">
          {fuelingGrowthCards.map((card) => (
            <div
              key={card.title}
              className="lg:max-w-360px w-full flex flex-col gap-16px"
            >
              <img src={`/png/${card.title}.png`} alt={card.title} />
              <div className="p-16px rounded-lg bg-white flex flex-col gap-16px items-center justify-center">
                <h2
                  className={`text-24 uppercase font-semibold ${card.titleColor}`}
                >
                  {card.title}
                </h2>
                <p className="text-18 font-georgia text-left max-w-290px">
                  {card.description}
                </p>
                <button
                  className={`px-24px py-16px rounded-2xl text-white ${card.buttonColor}`}
                >
                  {card.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* membership spotlight */}
      <div className="bg-violet-50 px-24px py-48px lg:p-80px flex items-center justify-center flex-wrap gap-24px lg:gap-72px">
        <img src="/png/Membership Image.png" alt="member spotlight" />
        <div className="flex flex-col gap-24px max-w-460px w-full">
          <h1 className="text-24 lg:text-36 font-bold text-violet-500">
            Join the Hersynergy Tribe
          </h1>
          <p className="text-16 font-georgia">
            As a member, you’ll gain access to exclusive resources, mentorship
            opportunities, and a supportive network of like - minded
            professionals passionate about innovation.
          </p>

          <ol className="list-disc">
            {spotlightFeatures.map((feature) => (
              <li key={feature} className="text-16 font-georgia">
                {feature}
              </li>
            ))}
          </ol>

          <Link
            href="/membership"
            className="bg-violet-500 rounded-4xl text-white text-16 w-fit px-24px py-16px mt-24px"
          >
            Become a member
          </Link>
        </div>
      </div>
      {/* membership spotlight */}

      <section className="p-48px lg:p-80px bg-blue-50">
        <h1 className="text-24 lg:text-36 text-violet-500 font-bold text-center mb-48px">
          What Members Have To Say
        </h1>
        <div className="flex items-center justify-center flex-wrap gap-24px">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl bg-violet-50 p-24px flex flex-col gap-24px max-w-360px max-[770px]:max-w-320px w-full lg:min-h-452px"
            >
              <div className="flex items-center gap-24px">
                <img
                  src={`/png/${testimonial.img}.png`}
                  alt={testimonial.img}
                />
                <div>
                  <h4 className="text-16 font-semibold">{testimonial.name}</h4>
                  <p className="text-violet-500 italic text-14">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <h4 className="text-16 font-bold">{testimonial.title}</h4>
              <p className="italic text-16 font-georgia">
                {testimonial.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="newsletter"
        className="px-24px py-48px lg:p-80px bg-[url(/png/newsletterSection.png)] bg-cover"
      >
        <div className="bg-violet-50 rounded-lg p-24px lg:p-48px flex flex-col items-center justify-center gap-24px mx-auto max-w-794px w-full">
          <h1 className="text-24 lg:text-36 text-violet-500 font-bold text-center">
            Stay Connected With Our Newsletter
          </h1>
          <p className="font-georgia text-18 text-center max-w-556px">
            Join ambitious women upgrading their careers, one email at a time.
            Job alerts, career moves, and success stories—all in your inbox, no
            fluff.
          </p>

          <form className="flex flex-col max-w-606px w-full">
            <label
              htmlFor="email"
              className="text-16 text-violet-500 mb-8px font-georgia"
            >
              Email Address
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter email address"
              className="bg-black-50 border border-violet-100 rounded-lg focus:outline-0 text-violet-600 text-16 placeholder:text-black-200 font-georgia px-16px py-8px h-54px"
            />
            <button className="bg-violet-500 rounded-2xl text-white text-14 w-fit px-16px py-8px mt-24px">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
