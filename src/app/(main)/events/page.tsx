import Link from "next/link";
import { PageHeader } from "../../components/PageHeader";

const memberMeetups = [
  {
    img: "member-meetup-1",
    name: "EOY Brunch & Meet up",
    type: "Member Meetup",
    date: "Dec 2024",
    location: "Lagos",
  },
  {
    img: "member-meetup-2",
    name: "BTF 2024",
    type: "Member Meetup",
    date: "Oct 2024",
    location: "London",
  },
  {
    img: "member-meetup-3",
    name: "Paint & Sip",
    type: "Member Meetup",
    date: "March 2024",
    location: "Lagos",
  },
];

const philanthropicEvents = [
  {
    img: "philanthropy-outreach-1",
    name: "",
    type: "Philanthropic Outreach",
    date: "",
    location: "Lagos",
  },
  {
    img: "philanthropy-outreach-2",
    name: "",
    type: "Philanthropic Outreach",
    date: "",
    location: "Lagos",
  },
  {
    img: "philanthropy-outreach-3",
    name: "",
    type: "Philanthropic Outreach",
    date: "",
    location: "Lagos",
  },
  // {
  //   img: "philanthropy-outreach-4",
  //   name: "",
  //   type: "Philanthropic Outreach",
  //   date: "",
  //   location: "Lagos",
  // },
];

const pastEvents = [
  {
    img: "guest-speaking-1",
    name: "Adeola Adeyemi: Behind the Scenes",
    type: "IG Story Takeover",
    date: "July 2024",
    location: "IG Story",
  },
  {
    img: "guest-speaking-2",
    name: "Effective Communication for Career Advancement",
    type: "HS Webinar",
    date: "April 2024",
    location: "Google Meet",
  },
  {
    img: "guest-speaking-3",
    name: "Navigating the Tech Downturn: Strategies for Job Hunting & Positioning",
    type: "HS Webinar",
    date: "March 2024",
    location: "Google Meet",
  },
];

const EventsPage = () => {
  return (
    <>
      <PageHeader title="events" bgImage="events"></PageHeader>

      <section className="bg-violet-50 px-24px py-48px lg:p-80px">
        <div className="max-w-[1128px] mx-auto">
          <h1 className="text-24 lg:text-36 font-bold text-violet-500 mb-24px">
            Upcoming Event
          </h1>

          <img
            src="/png/unleash-summit-lg.png"
            alt="unleashher image"
            className="rounded-xl mb-24px"
          />

          <h3 className="text-violet-500 font-georgia text-24 lg:text-32">
            UnleashHer Potential Summit:
          </h3>
          <p className="text-violet-500 font-georgia text-20 lg:text-28">
            Catalyzing Growth for Rising Women Leaders in EMEA
          </p>
          <p className="text-violet-500 font-georgia text-16 lg:text-18 mt-24px">
            12th April, 2025
          </p>

          <Link
            href="/events/unleashher-potential-summit"
            className="bg-violet-500 rounded-4xl text-white font-bold text-16 w-fit px-24px py-16px mt-24px flex items-center gap-8px"
          >
            View Event Details
          </Link>
        </div>
      </section>

      <section className="py-48px lg:py-80px bg-blue-50">
        <h2 className="text-24 lg:text-36 font-bold text-violet-500 max-w-[1128px] mx-auto mb-24px lg:mb-48px px-24px">
          Previous Events
        </h2>
        <div className="slideshow">
          <div className="firstSlide gap-24px">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex gap-24px">
                {pastEvents.map((event) => (
                  <div
                    key={event.img}
                    className="rounded-xl max-w-240px min-w-240px lg:max-w-544px lg:min-w-544px"
                  >
                    <img src={`/png/events/${event.img}.png`} alt={event.img} />

                    <div className="flex flex-col gap-8px mt-24px">
                      <p className="text-14 font-georgia text-violet-400">
                        {event.type}
                      </p>
                      <p className="text-20 font-georgia text-violet-500 whitespace-normal">
                        {event.name}
                      </p>

                      <div className="flex items-center gap-12px">
                        <div className="flex items-center gap-4px">
                          <img src="/svg/calendar 2.svg" alt="calendar icon" />
                          <p className="font-georgia text-14">{event.date}</p>
                        </div>
                        <div className="flex items-center gap-4px">
                          <img src="/svg/location 2.svg" alt="location icon" />
                          <p className="font-georgia text-14">
                            {event.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-48px lg:py-80px bg-violet-50">
        <h2 className="text-24 lg:text-36 font-bold text-violet-500 max-w-[1128px] mx-auto mb-24px lg:mb-48px px-24px">
          Members Meetup Events
        </h2>
        <div className="slideshow">
          <div className="secondSlide gap-24px">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex gap-24px">
                {memberMeetups.map((event) => (
                  <div
                    key={event.img}
                    className="rounded-xl max-w-240px min-w-240px lg:max-w-544px lg:min-w-544px"
                  >
                    <img src={`/png/events/${event.img}.png`} alt={event.img} />

                    <div className="flex flex-col gap-8px mt-24px">
                      <p className="text-14 font-georgia text-violet-400">
                        {event.type}
                      </p>
                      <p className="text-20 font-georgia text-violet-500 whitespace-normal">
                        {event.name}
                      </p>

                      <div className="flex items-center gap-12px">
                        <div className="flex items-center gap-4px">
                          <img src="/svg/calendar 2.svg" alt="calendar icon" />
                          <p className="font-georgia text-14">{event.date}</p>
                        </div>
                        <div className="flex items-center gap-4px">
                          <img src="/svg/location 2.svg" alt="location icon" />
                          <p className="font-georgia text-14">
                            {event.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-48px lg:py-80px bg-black-50">
        <h2 className="text-24 lg:text-36 font-bold text-violet-500 max-w-[1128px] mx-auto mb-24px lg:mb-48px px-24px">
          Philanthropic Outreach
        </h2>
        <div className="slideshow">
          <div className="firstSlide gap-24px">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex gap-24px">
                {philanthropicEvents.map((event) => (
                  <div
                    key={event.img}
                    className="rounded-xl max-w-240px min-w-240px lg:max-w-544px lg:min-w-544px"
                  >
                    <img src={`/png/events/${event.img}.png`} alt={event.img} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
