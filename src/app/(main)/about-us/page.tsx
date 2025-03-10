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
  "Lack of mentorship: 63% of women have never had a formal mentor. We bridge this gap with targeted mentorship programs.",
  "Meaningful connections: Networking shouldn’t feel transactional. We foster genuine relationships and mutual support.",
  "Fair compensation: Women negotiate less and receive fewer raises. Our workshops and conversations equip members to advocate for the pay they deserve.",
];

const conversations = [
  `“Hi Ladies!
  Just got a new job and wanted to give a public shoutout to <span className="!text-green-700">@Tamilore</span> for the Remote Buddy bot. It helped a lot in my applications. Also @Chidubem I followed your portfolio (with some ideas for the company) hack and got a call back).<br/>
  
  Also big thanks to <span className="!text-green-700">@Hillary</span> and <span className="!text-green-700">@Tolu Ajibola</span> for creating this group. You’re adding so so much valueeeee...”`,
  `“I had such an amazing time! Thank you so much all for the vulnerability with sharing your stories from Tochi’s story to learning “scaring efficient” to our crypto argument. It was really the best way to end the year for me. Looking forward to our wins in 2025 and more physical meet ups.”`,
  
  `“I never ever regret joining any session. So much and quality. So much value and quality. Thank you! <span className="!text-green-700">@Hillary Omitogun</span>`,
  
  
  `“Thank you <span className="!text-green-700">@Hillary Omitogun</span> and <span className="!text-green-700">@Tolu A.</span>  for organising and driving this! The kids were really excited to receive the items. I’m honestly, really excited about the impact we can make with this community!`,

  `Hiii! The email🥹🥹🥹 -- I love it so much! It's the perfect start to my morning. I'm looking forward to all we achieve as a community in 2025 ✨🎉🎉❤️❤️`,
  
  `@Hillary just wanted to let you know that the group is such a great idea. i’m so inspired by you and your attention to detail! 

  It’s so great seeing all you’re doing, and looking fabulous while doing it!`,
  
  `It was refreshing hearing everyone talk about their gratitude list & catch word for 2025. I was excited to meet everyone especially my new connections @ ~Temi F. @ ~ Toun
  Adereni
  + everyone looked so good, omggg
  Thank you @Tolu Ajibola for putting this together.`,
];

const notes = [
  {
    class: "bg-blue-100",
    title: "Impactful Community",
    description:
      "Received hundreds of member applications, carefully selecting to maintain a tight-knit and impactful community.",
  },
  {
    class: "bg-red-100",
    title: "Organic Growth",
    description:
      "Grown organically, fueled by genuine connections without any paid promotions.",
  },
  {
    class: "bg-green-100",
    title: "Recognition Programs",
    description:
      "Launched initiatives like a Recognition Program to celebrate outstanding women & philanthropic efforts.",
  },
  {
    class: "bg-violet-100",
    title: "Guest Speaker Series",
    description:
      "Hosted several engaging monthly Guest Speaker Series open to all, featuring inspiring women.",
  },
  {
    class: "bg-white-100",
    title: "Opportunities Shared",
    description:
      "Publicly shared exclusive opportunities - internships, jobs & fellowships - sourced through our network.",
  },
];

const AboutUs = () => {
  return (
    <>
      <PageHeader title="about us" bgImage="about-us"></PageHeader>

      <section className="px-24px py-48px lg:p-80px">
        <h1 className="text-violet-500 text-24 lg:text-36 font-bold text-center mb-24px">
          HerSynergy Tribe: Bridging Gaps, Building Connections
        </h1>

        <p className="text-14 lg:text-20 font-georgia max-w-[1120px] mx-auto">
          Women make up only 28% of C-suite positions, with even fewer Black
          women represented. The path to senior leadership can feel isolating,
          with limited mentorship, fewer opportunities, and the constant
          challenge of negotiating for equitable pay.  <br />
          <br />
          HerSynergy Tribe was founded in September 2023 to address these
          challenges by creating a supportive community where women can access
          mentorship, resources, and genuine connections to propel their careers
          forward.
        </p>
      </section>

      <section className="bg-[url(/png/hersynergy-tribe-bg.png)] bg-cover bg-center px-24px py-48px lg:p-80px">
        <div className="flex items-center justify-between max-md:flex-wrap gap-24px max-w-942px mx-auto">
          <div className="max-w-480px flex flex-col gap-24px order-2 lg:order-1">
            <h2 className="text-24 lg:text-32 font-bold text-violet-500">
              Why We Exist
            </h2>

            <p className="text-14 lg:text-18 font-georgia">
              HerSynergy Tribe empowers women navigating mid-senior careers by
              addressing the challenges that often hold them back:
            </p>

            {whyWeExist.map((why) => (
              <div className="flex items-start gap-8px" key={why}>
                <img
                  src="/svg/Ellipse.svg"
                  alt="list icon"
                  className="mt-8px h-10px w-10px"
                />
                <p className="text-14 lg:text-18 font-georgia">{why}</p>
              </div>
            ))}
          </div>
          <img
            src="/png/hersynergy-tribe.png"
            alt="hersynergy tribe"
            className="order-1 lg:order-2"
          />
        </div>
      </section>

      <section className="px-24px py-48px lg:p-80px">
        <h1 className="text-violet-500 text-24 lg:text-36 font-bold text-center mb-24px">
          Meet The Founders
        </h1>

        <div className="flex max-sm:flex-wrap items-start gap-24px max-w-[1126px] mx-auto">
          {founders.map((founder) => (
            <div key={founder.img} className="max-w-552px w-full">
              <img
                src={`/png/${founder.img}.png`}
                alt={founder.img}
                className="mb-8px rounded-xl"
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
                <p className="text-14 lg:text-18 font-georgia">
                  {founder.description}
                </p>

                <div className="flex items-center flex-wrap gap-8px mt-auto">
                  {founder.skills.map((skill) => (
                    <div
                      className="border border-violet-500 text-violet-500 px-8px lg:px-16px py-8px rounded-xl text-12 capitalize whitespace-nowrap"
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

      <section className="bg-[url(/png/notes-bg.png)] bg-center bg-cover">
        <div className="bg-[rgba(0,0,0,0.8)] flex flex-col justify-center lg:min-h-350px overflow-hidden">
          <div className="slideshow">
            <div className="firstSlide gap-24px min-h-300px">
              {[0, 1, 2].map((index) => (
                <div key={index} className="flex items-center gap-24px">
                  {notes.map((note, i) => (
                    <div
                      key={note.title}
                      className={`rounded-xl p-16px flex flex-col gap-12px max-w-200px min-w-200px lg:max-w-264px lg:min-w-264px min-h-158px w-full transition-all duration-300 ease-in-out hover:scale-[114%] hover:cursor-pointer ${note.class}`}
                    >
                      <p className="text-16 text-black-200">{i + 1}.</p>

                      <h3 className="text-16 text-violet-500 font-georgia capitalize">
                        {note.title}
                      </h3>

                      <p className="text-12 font-georgia text-wrap">
                        {note.description}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-24px py-48px lg:p-80px">
        <div className="max-w-[1128px] mx-auto flex items-center max-md:flex-wrap justify-between gap-24px lg:gap-48px">
          <div className="w-full max-nav:max-w-400px">
            <img
              src="/png/creating-a-sustainable-movement.png"
              alt="creating-a-sustainable-movement"
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-24px max-w-480px w-full">
            <h2 className="text-24 lg:text-36 font-bold text-violet-500">
              Creating A Sustainable Movement
            </h2>
            <p className="text-14 lg:text-20">
              We’re building more than a community. We’re creating a movement
              where women support each other to achieve their dreams.
            </p>
            <a
              href="https://forms.gle/XK5KF2oCxsSUc2oE6"
              target="_blank"
              className="bg-violet-500 rounded-3xl text-white text-12 lg:text-18 lg:font-bold w-fit px-24px py-8px lg:py-16px"
            >
              Start your journey
            </a>
          </div>
        </div>
      </section>

      <section className="bg-violet-50 p-24px lg:p-80px">
        <h2 className="text-center font-bold text-violet-500 text-24 lg:text-36 capitalize mb-24px">
          conversations that drive change
        </h2>

        <div className="gap-12px columns-1 nav:columns-4 max-nav:columns-3 max-md:columns-2 max-sm:columns-1">
          {conversations.map((conversation, i) => (
            <div
              key={i}
              className="bg-[url(/png/whatsapp-bg.png)] bg-center bg-cover rounded-xl h-fit flex flex-col gap-24px p-24px break-inside-avoid mb-12px"
            >
              <img
                src="/png/whatsapp-icon.png"
                alt="whatsapp icon"
                className="max-sm:-48px h-64px w-fit"
              />
              <div
                className="text-white text-14 max-sm:text-16 font-georgia"
                dangerouslySetInnerHTML={{ __html: conversation }}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
