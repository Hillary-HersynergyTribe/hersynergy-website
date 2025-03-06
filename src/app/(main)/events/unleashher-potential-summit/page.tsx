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

const SummitPage = () => {
  return (
    <>
      <PageHeader
        title="events/unleashHER potential summit"
        bgImage="events"
      ></PageHeader>

      <section className="bg-violet-50 p-24px lg:p-80px">
        <div className="max-w-[1128px] mx-auto">
          <h1 className="text-24 lg:text-36 font-bold text-violet-500">
            A Transformative Summit for Women Ready to Achieve More
          </h1>

          <img src="/png/unleash-summit-lg.png" alt="unleashher image" />

          <button className="bg-violet-500 rounded-4xl text-white font-bold text-16 w-fit px-24px py-16px mt-24px flex items-center gap-8px">
            Download Sponsorship Deck
          </button>
        </div>
      </section>

      <section className="bg-[url(/png/hersynergy-tribe-bg.png)] bg-cover bg-center p-24px lg:p-80px">
        <div className="flex flex-col gap-24px items-center justify-center">
          <p className="text-violet-500 text-24 lg:text-36 font-bold text-center">
            UnleashHER Potential Summit 2025 is your chance to connect, learn,
            and grow with HerSynergy’s inspiring community of women.
          </p>
          <p className="text-violet-500 text-24 lg:text-36 font-bold text-center">
            Whether you’re scaling your business, navigating a pivot, or seeking
            clarity in your career, the insightful panels and workshops at this
            summit is designed to equip you with the knowledge, confidence, and
            connections to unlock your next chapter.
          </p>
          <button className="bg-violet-500 rounded-4xl text-white font-bold text-16 w-fit px-24px py-16px mt-24px flex items-center gap-8px">
            Get Your Ticket
          </button>
        </div>
      </section>

      <section className="bg-[url(/png/attend-summmit-bg.png)] bg-cover bg-center p-24px lg:p-80px">
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

                  <p className="text-14 lg:text-18 text-center">
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

      <section className="p-24px lg:p-80px bg-[url(/png/panel.png)] bg-cover bg-center">
        <div className="mx-auto max-w-[1128px]">
            <h2 className="font-bold text-24 lg:text-36 text-white">Panel and Keynote Topics</h2>

            <div className="grid grid-cols-3"></div>
        </div>
      </section>
    </>
  );
};

export default SummitPage;
