import Link from "next/link";

const quickLinks = [
  { link: "/", title: "Home", type: "internal" },
  { link: "/about-us", title: "About Us", type: "internal" },
  // { link: "/", title: "Membership", type: "internal" },
  { link: "/events", title: "Events", type: "internal" },
  {
    link: "https://forms.gle/yu4JvcKMSfWWBPUm8",
    title: "Contact Us",
    type: "external",
  },
];

const getInvolvedLinks = [
  {
    link: "/membership",
    title: "Become a Member",
    type: "internal",
  },
  {
    link: "/mentorship",
    title: "Mentorship Program",
    type: "internal",
  },
  {
    link: "/partnerships",
    title: "Partner With Us",
    type: "internal",
  },
  // {
  //   link: "/",
  //   title: "Resources",
  //   type: "internal",
  // },
];

const socialLinks = [
  { social: "Instagram", link: "https://www.instagram.com/hersynergytribe/" },
  { social: "Twitter", link: "https://x.com/hersynergy/" },
  {
    social: "Linkedin",
    link: "https://www.linkedin.com/company/hersynergy-tribe/",
  },
];
export const Footer = () => {
  return (
    <div className="bg-white p-24px">
      <div className="flex items-start justify-between flex-wrap gap-24px max-w-[1280px] w-full mx-auto">
        <div className="lg:max-w-192px w-full">
          <div className="flex flex-col gap-12px mb-24px lg:mb-40px">
            <Link href="/">
              <img src="/png/her-logo.png" alt="hersynergy logo" className="h-30px" />
            </Link>
            <p className="text-violet-500 text-12 font-georgia">
              Empowering women in tech to connect, innovate, and lead.
            </p>
            <p className="text-violet-500 text-12 font-georgia">
              Join a vibrant community breaking barriers and shaping the future
              of tech.
            </p>

            <Link
              href="/about-us"
              className="bg-violet-500 rounded-2xl text-white text-14 w-fit px-16px py-8px"
            >
              Learn more about us
            </Link>
          </div>
          <p className="text-violet-500 text-16 font-semibold mb-12px">
            Connect With Us:
          </p>
          <div className="flex items-center gap-16px">
            {socialLinks.map((link) => (
              <a key={link.social} href={link.link} target="_blank">
                <img src={`/svg/${link.social}.svg`} alt={link.social} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8px">
          <p className="text-violet-500 text-16 font-semibold mb-12px">
            Quick Links
          </p>

          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="text-16 text-violet-500 font-georgia"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-8px">
          <p className="text-violet-500 text-16 font-semibold mb-12px">
            Get Involved
          </p>

          {getInvolvedLinks.map((link) => (
            <div key={link.title}>
              {link.type === "internal" ? (
                <Link
                  href={link.link}
                  className="text-16 text-violet-500 font-georgia"
                >
                  {link.title}
                </Link>
              ) : (
                <a
                  href={link.link}
                  target="_blank"
                  className="text-16 text-violet-500 font-georgia"
                ></a>
              )}
            </div>
          ))}
        </div>

        <div className="lg:max-w-264px w-full">
          <p className="text-violet-500 text-16 font-semibold mb-12px">
            Subscribe to our Newsletter
          </p>

          <form className="flex flex-col gap-8px mb-24px lg:mb-40px">
            <input
              type="text"
              placeholder="Enter email address"
              className="bg-black-50 rounded-2xl focus:outline-0 text-violet-600 text-16 placeholder:text-black-200 px-16px py-8px"
            />
            <button className="bg-violet-500 rounded-2xl text-white text-14 w-fit px-16px py-8px">
              Subscribe
            </button>
          </form>

          <p className="text-violet-500 text-16 font-semibold mb-12px">
            Contact Us
          </p>
          <p className="text-violet-500 text-16">
            Email: inquiries@hersynergytribe.com
          </p>
        </div>
      </div>
      <p className="flex items-center justify-center gap-4px flex-wrap mt-24px text-center text-16 max-lg:text-12 text-violet-500 uppercase">
        Copyright <img src="/svg/copyright.svg" alt="copyright" />{" "}
        <span>2024 HerSynergy. All Rights Reserved.</span>
      </p>
    </div>
  );
};
