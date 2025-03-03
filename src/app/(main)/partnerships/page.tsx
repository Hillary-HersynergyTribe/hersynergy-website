import { PageHeader } from "../../components/PageHeader";

const missions = [
  { icon: "support-1", text: "Provide free tutorials and tech education" },
  { icon: "support-2", text: "Create networking opportunities" },
  { icon: "support-3", text: "Mentor emerging female tech leaders" },
  { icon: "support-4", text: "Host industry events and workshops" },
];

const partnershipOpportunities = [
  {
    title: "Corporate Partnership Opportunities",
    bg: "",
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
        class: "",
        title: "Leadership & Coaching",
        description:
          "If you have 10+ years of experience, we’d love for you to share your knowledge and guidance with our members as a mentor and coach, helping them navigate their careers.",
      },
      {
        img: "volunteer-opportunities-2",
        class: "",
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
        class: "",
        title: "Contribute to Social Impact",
        description:
          "Help us create lasting change, by donating to the causes that empower women and support the growth of our community.",
      },
      {
        img: "support-our-impact-2",
        class: "",
        title: "Show Appreciation to Our Founders",
        description:
          "Celebrate the work and dedication of our Founders by contributing to a thoughtful gift that acknowledge their ongoing commitment to our mission.",
      },
    ],
  },
];

const PartnershipsPage = () => {
  return (
    <>
      <PageHeader title="partnerships" bgImage="partnerships"></PageHeader>

      <section className="bg-[url(/png/partnership-bg-1.png)] bg-cover bg-center p-140px max-lg:px-24px max-lg:py-24px">
        <div className="flex flex-col gap-16px lg:gap-32px">
          <h1 className="text-violet-500 text-28 lg:text-36 font-bold">
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
            {missions.map((mission) => (
              <div
                key={mission.icon}
                className="bg-violet-200 rounded-xl px-24px py-8px flex items-center gap-24px"
              >
                <img src={`/svg/${mission.icon}.svg`} alt={mission.text} />

                <span className="text-18">{mission.text}</span>
              </div>
            ))}
          </div>
          <button className="bg-violet-500 rounded-3xl text-white font-bold text-16 w-fit px-24px py-16px mt-24px">
            Donate Now
          </button>
        </div>
      </section>

      <section className="bg-[url(/png/partnership-bg-2.png)] bg-cover bg-center p-24px lg:py-80px flex flex-col items-center gap-16px lg:gap-32px">
        <h2 className=" text-24 lg:text-32 font-bold text-white text-center">
          Ready to Create Impact?
        </h2>
        <p className="text-14 lg:text-18 text-white font-georgia text-center max-w-400px lg:max-w-744px">
          Whether through partnership or volunteering, involvement creates
          opportunities for women to thrive in tech and business.
        </p>
        <div className="flex items-center gap-24px">
          <button className="bg-violet-500 rounded-4xl text-white font-semibold lg:font-bold text-16 w-fit px-24px py-8px lg:py-16px">
            Partner With Us
          </button>
          <button className="bg-white rounded-4xl text-violet-500 font-semibold lg:font-bold text-16 w-fit px-24px py-8px lg:py-16px">
            Volunteer Now
          </button>
        </div>
      </section>
    </>
  );
};

export default PartnershipsPage;
