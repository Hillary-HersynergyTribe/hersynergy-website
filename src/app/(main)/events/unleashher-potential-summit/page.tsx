import { PageHeader } from "../../../components/PageHeader";

const summitActions = [
  {
    img: "sponsor",
    title: "sponsor",
    description:
      "Support the event through tailored sponsorship packages and gain brand recognition while showcasing your business to a dynamic audience of thriving women professionals.",
    buttonText: "Be a sponsor",
    link: "",
  },
  {
    img: "attend",
    title: "attend",
    description:
      "Join us to learn, network, and grow along side industry leaders and professionals. Seize the opportunity to pitch your ideas for a grant and take your career to new heights.",
    buttonText: "Register Now",
    link: "",
  },
  {
    img: "volunteer 2",
    title: "volunteer",
    description:
      " Make a difference by contributing your time and skills to the success of this event. Gain valuable experience while connecting with inspiring individuals",
    buttonText: "Be a volunteer",
    link: "",
  },
];

const topics = [
  { img: "Topic 1", topic: "Finding & Following Your Purpose" },
  { img: "Topic 2", topic: "Building Influential Professional Relationships" },
  { img: "Topic 3", topic: "Funding Strategies For Business Owners" },
  { img: "Topic 4", topic: "Crafting An Authentic Personal Brand" },
  {
    img: "Topic 5",
    topic: "Strategies for Women to Build Generational Wealth",
  },
  { img: "Topic 6", topic: "Prioritizing Self-Care & Preventing Burnout" },
];

const sponsorTips = [
  {
    img: "sponsor-1",
    title: "Access to Diverse Talent Pool",
    class: "bg-green-50",
    description:
      "By sponsoring, you gain immediate access to a network of accomplished women professionals, most of whom are entrepreneurs.",
  },
  {
    img: "sponsor-2",
    title: "Gain Brand Visibility",
    class: "bg-white-300",
    description:
      "As a sponsor, your brand will be prominently displayed across all event materials, and social media platforms.",
  },
  {
    img: "sponsor-3",
    title: "Empower Women Entrepreneurs",
    class: "bg-blue-50",
    description:
      "Your sponsorship directly fuels initiatives like the EmpowerHER Grant program, fostering female talent and innovation.",
  },
];

const attendees = [
  {
    title: "Founders or Early Employees at Startups:",
    description:
      "E-commerce business owners, tech startup founders, and operations leads looking to scale their businesses.",
  },
  {
    title: "Early to Mid-Career Professionals in Non - Tech Industries:",
    description:
      "Marketing  specialists, HR managers,  financial analysts, and social media managers focused on  advancing their careers and building leadership skills.",
  },
  {
    title: "Mid to Senior - Level Professionals in Creative Industries:",
    description:
      "Brand strategists,  product managers, UX designers, CTOs , and consultants aiming to drive  innovation and expand their impact.",
  },
];

const SummitPage = () => {
  return (
    <>
      <PageHeader
        title="events/unleashHER potential summit"
        bgImage="events"
      ></PageHeader>

      <section className="bg-violet-50 px-24px py-48px lg:p-80px">
        <div className="max-w-[1128px] mx-auto">
          <h1 className="text-24 lg:text-36 font-bold text-violet-500 mb-24px">
            A Transformative Summit for Women Ready to Achieve More
          </h1>

          <img
            src="/png/unleash-summit-lg.png"
            alt="unleashher image"
            className="rounded-xl"
          />

          <button className="bg-violet-500 rounded-4xl text-white font-bold text-16 w-fit px-24px py-16px mt-24px flex items-center gap-8px">
            Download Sponsorship Deck
            <img src="/svg/download.svg" alt="download icon" />
          </button>
        </div>
      </section>

      <section className="bg-[url(/png/hersynergy-tribe-bg.png)] bg-cover bg-center px-24px py-48px lg:p-80px">
        <div className="flex flex-col gap-24px items-center justify-center max-w-[1128px]">
          <p className="text-violet-500 text-24 lg:text-36 font-bold text-center">
            UnleashHER Potential Summit 2025 is your chance to connect, learn,
            and grow with HerSynergy’s inspiring community of women.
          </p>
          <p className="text-violet-500 text-24 lg:text-36 font-bold text-center">
            Whether you’re scaling your business, navigating a pivot, or seeking
            clarity in your career, the insightful panels and workshops at this
            summit are designed to equip you with the knowledge, confidence, and
            connections to unlock your next chapter.
          </p>
          <button className="bg-violet-500 rounded-4xl text-white font-bold text-16 w-fit px-24px py-16px mt-24px flex items-center gap-8px">
            Get Your Ticket
          </button>
        </div>
      </section>

      <section className="bg-[url(/png/hersynergy-tribe-bg.png)] bg-cover bg-center ">
        <div className="bg-[rgba(0,0,0,0.6)] px-24px py-48px lg:p-80px">
          <div className="mx-auto max-w-704px flex flex-col gap-12px lg:gap-24px">
            <h2 className="text-20 lg:text-32 font-bold text-white text-center">
              UnleashHer Potential Summit, 2025
            </h2>

            <p className="text-16 lg:text-20 text-white text-center">
              Where Ambition Meets Opportunity: Building Future - Ready Careers
              & Businesses
            </p>

            <div className="bg-violet-50 rounded-xl flex items-center gap-12px p-16px">
              <img src="/svg/calendar.svg" alt="calendar icon" />
              <p className="text-16 lg:text-24 text-violet-500">
                April 12, 2025
              </p>
            </div>
            <div className="bg-violet-50 rounded-xl flex items-center gap-12px p-16px">
              <img src="/svg/location.svg" alt="location icon" />
              <p className="text-16 lg:text-24 text-violet-500">
                Radisson Blu Anchorage Hotel, V.I, Lagos
              </p>
            </div>
            <div className="flex items-center gap-12px lg:gap-24px">
              <div className="bg-violet-50 rounded-xl flex flex-col items-center gap-12px w-full p-16px">
                <p className="text-24 lg:text-36 text-violet-500 font-bold">
                  10+
                </p>
                <p className="text-16 font-semibold">Speakers</p>
              </div>
              <div className="bg-violet-50 rounded-xl flex flex-col items-center gap-12px w-full p-16px">
                <p className="text-24 lg:text-36 text-violet-500 font-bold">
                  250
                </p>
                <p className="text-16 font-semibold">Attendees</p>
              </div>
              <div className="bg-violet-50 rounded-xl flex flex-col items-center gap-12px w-full p-16px">
                <p className="text-24 lg:text-36 text-violet-500 font-bold">
                  5+
                </p>
                <p className="text-16 font-semibold">Grants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url(/png/attend-summmit-bg.png)] bg-cover bg-center px-24px py-48px lg:p-80px">
        <div className="max-w-[1128px] mx-auto">
          <h2 className="text-white font-bold text-24 lg:text-36 text-center mb-24px lg:mb-48px">
            Be a part of the summit
          </h2>

          <div className="flex max-md:flex-wrap gap-24px">
            {summitActions.map((action) => (
              <div
                key={action.img}
                className="rounded-xl lg:max-w-360px w-full bg-violet-50"
              >
                <img src={`/png/${action.img}.png`} alt={action.title} />
                <div className="p-24px flex flex-col gap-12px lg:gap-24px items-center justify-center">
                  <h3 className="text-violet-500 font-bold text-16 lg:text-24 text-center uppercase">
                    {action.title}
                  </h3>

                  <p className="text-14 lg:text-18 text-center font-georgia">
                    {action.description}
                  </p>

                  <button className="bg-violet-500 rounded-3xl text-white text-12 lg:text-18 lg:font-bold w-fit px-24px py-8px lg:py-16px mt-auto">
                    {action.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-600 px-24px py-48px lg:p-80px">
        <div className="max-w-[1128px] mx-auto flex flex-col items-center justify-center gap-24px lg:gap-48px">
          <h2 className="text-violet-500 font-bold text-24 lg:text-36 text-center">
            Who Can Attend?
          </h2>
          <p className="text-14 lg:text-18 text-center font-georgia">
            This summit is designed for women from all walks of life who are
            eager to level up in their careers, learn from industry experts, and
            connect with like-minded women across various sectors. Whether
            you’re looking to grow your skills, expand your network, or gain
            fresh perspectives, this event is for you.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24px">
            {attendees.map((attendee) => (
              <div
                key={attendee.title}
                className="bg-white rounded-xl p-24px flex flex-col gap-24px"
              >
                <h3 className="text-20 lg:text-24 text-violet-500 font-bold">
                  {attendee.title}
                </h3>
                <p className="text-14 lg:text-20 font-georgia">
                  {attendee.description}
                </p>
              </div>
            ))}
          </div>

          <button className="bg-violet-500 rounded-3xl text-white text-12 lg:text-18 lg:font-bold w-fit px-24px py-8px lg:py-16px mt-auto">
            Get Your Tickets
          </button>
        </div>
      </section>

      <section className="px-24px py-48px lg:p-80px bg-[url(/png/panel.png)] bg-cover bg-center">
        <div className="mx-auto max-w-[1128px]">
          <h2 className="font-bold text-24 lg:text-36 text-white text-center mb-24px lg:mb-48px">
            Panel and Keynote Topics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24px">
            {topics.map((topic) => (
              <div className="relative h-174px" key={topic.topic}>
                <img src={`/png/${topic.img}.png`} alt={topic.topic} />
                <div className="bg-violet-50 rounded-xl p-8px absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:min-w-200px">
                  <p className="text-center font-bold text-violet-500 text-14">
                    {topic.topic}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-50 px-24px py-48px lg:p-80px">
        <div className="mx-auto max-w-1128px flex flex-col items-center gap-48px">
          <h2 className="text-24 lg:text-36 font-bold text-violet-500 text-center">
            Why Sponsor Us?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24px">
            {sponsorTips.map((tip) => (
              <div
                key={tip.img}
                className={`rounded-xl p-24px flex flex-col items-center gap-8px ${tip.class}`}
              >
                <img src={`/png/${tip.img}.png`} alt={tip.title} />

                <h3 className="text-16 lg:text-24 font-bold text-violet-500 text-center max-w-226px">
                  {tip.title}
                </h3>

                <p className="text-14 lg:text-16">{tip.description}</p>
              </div>
            ))}
          </div>

          <button className="bg-violet-500 rounded-3xl text-white text-12 lg:text-18 lg:font-bold w-fit px-24px py-8px lg:px-48px lg:py-16px">
            Become a sponsor
          </button>
        </div>
      </section>
    </>
  );
};

export default SummitPage;
