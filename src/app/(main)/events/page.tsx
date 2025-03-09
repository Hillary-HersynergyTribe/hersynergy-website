import Link from "next/link";
import { PageHeader } from "../../components/PageHeader";

const EventsPage = () => {
  return (
    <>
      <PageHeader title="events" bgImage="events"></PageHeader>

      <section className="bg-violet-50 px-24px py-48px lg:p-80px">
        <div className="max-w-[1128px] mx-auto">
          <h1 className="text-24 lg:text-36 font-bold text-violet-500 mb-24px">
            Upcoming events
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

      <section className=" px-24px py-48px lg:p-80px"></section>
    </>
  );
};

export default EventsPage;
