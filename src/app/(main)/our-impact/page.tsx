import Link from "next/link";
import { PageHeader } from "../../components/PageHeader";

const summaryImpacts = [
  {
    img: "opportunities",
    title: "100+ Shared Oppourtunities",
    description:
      "Including jobs and internships leveraging our member network.",
  },
  {
    img: "recognitions",
    title: "60+ Women Recognized",
    description:
      "For their accomplishments through our monthly recognition program.",
  },
  {
    img: "raised",
    title: "Over ₦2 Million Raised",
    description:
      "To support impoverished young ladies & public school children in rural Nigeria.",
  },
];

const impacts = [
  {
    impact: "Advancing careers",
    achievements: [
      {
        img: "advancing-careers-1",
        title: "HerSynergy Tribe & TechHer Mentorship Program",
        description:
          "We collaborated with TechHer to launch our first mentorship program, pairing 17 mentors from our community with over 30 ambitious early - career women across Africa & Europe.",
      },
      {
        img: "advancing-careers-2",
        title: "Exclusive Opportunities",
        description:
          "We’ve shared over 200 exclusive job, fellowship, and scholarship opportunities sourced through our vibrant network.",
      },
    ],
  },
  {
    impact: "driving social impact",
    achievements: [
      {
        img: "driving-social-impact-1",
        title: "End Period Poverty Campaign",
        description:
          "We partnered with Sanitary Aid Nigeria to support underserved communities and provide hygiene kits to 100 girls.",
      },
      {
        img: "driving-social-impact-2",
        title: "Lagos Progressive School Donation Drive",
        description:
          "HerSynergy members donation over $1,000 which was used to provide school supplies to 700+ students at Lagos Progressive School.",
      },
    ],
  },
  {
    impact: "sparking knowledge sharing",
    achievements: [
      {
        img: "sparking-knowledge-sharing-1",
        title: "Monthly Guest Speaker Series",
        description:
          "Our guest speaker series has featured inspiring industry leaders, including: Seun Runsewe, Cybersecurity & Product Leader, Ibiyinka Ibru, Personal Finance Coach, Chidi Uguru, Head of Sales",
      },
      {
        img: "sparking-knowledge-sharing-2",
        title: "In-Person Connections",
        description:
          "We’ve organized 7+ member meetups across Nigeria and London, strengthening bonds beyond the virtual space.",
      },
    ],
  },
];
const OurImpact = () => {
  return (
    <>
      <PageHeader title="our impact" bgImage="our-impact"></PageHeader>

      <div className="p-24px lg:py-140px flex flex-col items-center gap-32px bg-violet-50">
        <h1 className="text-24 lg:text-36 text-violet-700 font-bold text-center">
          Our Impact
        </h1>

        <p className="text-20 text-center font-georgia max-w-1000px">
          We are committed to championing the success of women in diverse
          industries by providing essential support and creating inclusive
          opportunities both within and beyond our community.
        </p>

        <div className="flex gap-24px items-center justify-center flex-wrap w-full">
          {summaryImpacts.map((card) => (
            <div
              key={card.img}
              className="p-24px bg-white-500 rounded-lg flex flex-col items-center justify-center gap-16px lg:max-w-360px w-full transition-all duration-500 ease-in-out hover:cursor-pointer hover:shadow-popUp"
            >
              <img src={`/png/${card.img}.png`} alt={card.img} />
              <h2 className="font-nunito text-violet-600 text-24 text-center font-bold capitalize max-w-200px">
                {card.title}
              </h2>
              <p className="text-16 font-georgia text-center lg:max-w-288px w-full">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/partnerships"
          className="bg-violet-500 rounded-4xl text-white text-16 w-fit px-24px py-16px mt-24px"
        >
          Lets work together
        </Link>
      </div>

      <div className="bg-[url(/png/impact-bg.png)] bg-cover p-24px lg:py-80px lg:px-140px">
        <h1 className="text-24 lg:text-36 text-violet-700 font-bold text-center">
          The HerSynergy Way: Our Impact
        </h1>

        <p className="text-20 text-center font-georgia mb-24px lg:mb-48px">
          Here’s how we’ve created impact across our core pillars.
        </p>

        <div className="flex flex-col gap-48px">
          {impacts.map((impact) => (
            <div key={impact.impact} className="flex flex-col gap-24px">
              <div className="border border-violet-500 bg-violet-50 rounded-xl p-8px">
                <h2 className=" text-18 lg:text-24 font-bold text-violet-500 capitalize">
                  {impact.impact}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24px">
                {impact.achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="bg-violet-900 rounded-xl p-12px lg:p-32px flex flex-col text-white gap-24px"
                  >
                    <img
                      src={`/png/${achievement.img}.png`}
                      alt={achievement.img}
                    />
                    <h4 className="text-24 font-bold">{achievement.title}</h4>
                    <p className="text-20 font-georgia">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurImpact;
