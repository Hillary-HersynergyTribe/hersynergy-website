import { PageHeader } from "../../components/PageHeader";

const founders = [
  {
    name: "Hilary Omitogun",
    img: "hillary-omitogun",
    role: "Co-Founder, C.E.O",
    description:
      "Hillary leads membership, community engagement, and sponsorships at HerSynergy Tribe. Known for her creative touch (yes, she’s the one behind those eye-catching graphics), she’s passionate about building relationships that matter. Hillary’s mission is simple: to make every member feel seen, supported, and unstoppable.",
    skills: [
      "Social Architect",
      "Business Operations",
      "Product Research & Strategy",
    ],
  },
  {
    name: "Tolu Ajibola",
    img: "tolu-ajibola",
    role: "Co-Founder, C.O.O",
    description:
      "Tolu is the backbone of HerSynergy’s operations, ensuring our events, mentorship programs, and partnerships run like clockwork. She’s the queen of spreadsheets (seriously, she’s our Excel queen) and brings a sense of order and clarity to everything we do.",
    skills: ["Operations", "Strategy", "Growth Architect"],
  },
];

const whyWeExist = [
  "63% of women report never having a formal mentor. We provide targeted mentorship programs to ensure no one has to navigate this journey alone.",
  "Networking can feel transactional and unrelatable. At HerSynergy, we’ve created a space where connections are genuine, and support is mutual.",
  "Women negotiate salaries less often and are less likely to receive raises. Our workshops equip members with the skills to negotiate effectively and secure the pay they deserve.",
];

const AboutUs = () => {
  return (
    <>
      <PageHeader title="about us" bgImage="about-us"></PageHeader>

      <section className="p-24px lg:p-80px">
        <h1 className="text-violet-500 text-28 lg:text-36 font-bold text-center mb-24px">
          HerSynergy Tribe: Bridging Gaps, Building Connections
        </h1>

        <p className="text-14 lg:text-20 font-georgia max-w-[1120px] mx-auto">
          Women make up only 28% of C-suite positions, with even fewer Black
          women represented. The path to senior leadership can feel isolating,
          with limited mentorship, fewer opportunities, and the constant
          challenge of negotiating for equitable pay.  <br />
          HerSynergy Tribe was founded in September 2023 to address these
          challenges by creating a supportive community where women can access
          mentorship, resources, and genuine connections to propel their careers
          forward.
        </p>
      </section>

      <section className="bg-[url(/png/hersynergy-tribe-bg.png)] bg-cover bg-center p-24px lg:p-80px">
        <div className="flex items-center justify-between max-md:flex-wrap gap-24px max-w-942px mx-auto">
          <p className="text-14 lg:text-20 font-georgia max-w-430px order-2 lg:order-1">
            <span className="font-bold text-violet-500">HerSynergy Tribe</span>{" "}
            creates a supportive community where women can access mentorship,
            resources, and genuine connections to propel their careers forward.
          </p>
          <img
            src="/png/hersynergy-tribe.png"
            alt="hersynergy tribe"
            className="order-1 lg:order-2"
          />
        </div>
      </section>

      <section className="bg-violet-50 p-24px lg:p-80px">
        <div className="max-w-934px mx-auto flex flex-col gap-24px">
          <h2 className="text-24 lg:text-32 font-bold text-violet-500">
            Why We Exist
          </h2>

          <p className="text-16 lg:text-20 font-georgia">
            HerSynergy Tribe is a private community designed to empower women
            navigating mid-senior level careers. We understand the unique
            challenges faced at this stage:
          </p>

          {whyWeExist.map((why) => (
            <div className="flex items-start gap-8px" key={why}>
              <img src="/svg/arrow-down.svg" alt="list icon" />
              <p className="text-16 lg:text-20 font-georgia">{why}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-24px lg:p-80px">
        <h1 className="text-violet-500 text-28 lg:text-36 font-bold text-center mb-24px">
          Meet The Founders
        </h1>
        <p className="text-14 lg:text-20 text-center font-georgia mb-24px">
          Meet the incredible women creating platforms and driving innovation in
          the tech space!
        </p>

        <div className="flex items-start gap-24px max-w-[1126px] mx-auto">
          {founders.map((founder) => (
            <div key={founder.img} className="max-w-552px w-full">
              <img
                src={`/png/${founder.img}.png`}
                alt={founder.img}
                className="mb-8px"
              />

              <div className="p-24px lg:p-32px flex flex-col gap-32px rounded-xl border border-violet-300 bg-violet-50 min-h-382px">
                <div className="text-violet-500">
                  <h3 className="text-18 lg:text-24 font-bold">
                    {founder.name}
                  </h3>
                  <p className="text-14 lg:text-16 capitalize">
                    {founder.role}
                  </p>
                </div>
                <p className="text-16 lg:text-18 font-georgia">
                  {founder.description}
                </p>

                <div className="flex items-center flex-wrap gap-8px mt-auto">
                  {founder.skills.map((skill) => (
                    <div
                      className="border border-violet-500 px-16px py-8px rounded-xl text-12 capitalize whitespace-nowrap"
                      key={skill}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-24px lg:p-80px">
        <div className="max-w-[1128px] mx-auto flex items-center max-md:flex-wrap justify-between gap-24px">
          <img
            src="/png/creating-a-sustainab;e-movement.png"
            alt="creating-a-sustainable-movement"
            className="max-w-full"
          />
          <div className="flex flex-col gap-24px max-w-480px w-full">
            <h2 className="text-24 lg:text-36 font-bold text-violet-500">
              Creating A Sustainable Movement
            </h2>
            <p className="text-14 lg:text-20">
              We’re building more than a community! We’re creating a movement
              where women support each other to achieve their dreams.
            </p>
            <button className="bg-violet-500 rounded-2xl text-white text-12 lg:text-18 lg:font-bold w-fit px-24px py-8px lg:py-16px">
              Start your journey
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
