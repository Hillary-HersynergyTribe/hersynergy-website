import { useState } from "react";

// const testimonials = [
//   {
//     img: "Nenjom Asuk",
//     name: "Nenjom Asuk",
//     role: "Legal Practitioner, Tech Innovation, Fintech",
//     title: "“Incredibly Helpful to my Growth!”",
//     description:
//       "“I’ve had the opportunity to meet people who have been incredibly helpful to my growth. The conversations have been so helpful and have pushed me to be bolder in my choices, e.g. the discussions on 10-year plans and salary negotiations. They’ve also provided valuable insights into certain back-end processes. I look forward to giving back to this community that has enriched my career.”",
//   },
//   {
//     img: "Florence Dairo",
//     name: "Florence Dairo",
//     role: "Co-Founder, Chief Product Officer, Zonda",
//     title: "“A Memorable and Impactful Platform!”",
//     description:
//       "“It has been both memorable and impactful for me. The bravery and openness of the women in the group have deeply inspired me, creating a space for reflection and growth. I’ve learned so much and am excited about opportunities to contribute more as we continue to build this amazing community together.”",
//   },
//   {
//     img: "Izzie Ekong",
//     name: "Izzie Ekong",
//     role: "Digital Creator, Temsi Africa",
//     title: "“A Safe Space for Every Woman in Tech!”",
//     description:
//       "“I love the honesty, vulnerability, and intelligence of the women in the community.”",
//   },
// ];

export const Testimonials = ({
  title,
  type,
  testimonials,
}: {
  title: string;
  type?: string;
  testimonials: any[];
}) => {
  const [count, setCount] = useState(0);

  const goToPrevioustestimonial = () => {
    const screenWidth = screen.width;
    const element = document.getElementById(
      `${type ? type : ""}testimonialSection`
    );
    let scrollLength = screenWidth > 630 ? 624 : 324;

    if (count === 0) {
      if (element) element.scrollLeft += scrollLength * testimonials.length;
      setCount(testimonials.length - 1);
    } else {
      if (element) element.scrollLeft -= scrollLength;
      setCount(count - 1);
    }
  };
  const goToNexttestimonial = () => {
    const screenWidth = screen.width;
    const element = document.getElementById(
      `${type ? type : ""}testimonialSection`
    );
    let scrollLength = screenWidth > 630 ? 624 : 324;

    if (count === testimonials.length - 1) {
      if (element) element.scrollLeft -= scrollLength * testimonials.length;
      setCount(0);
    } else {
      if (element) element.scrollLeft += scrollLength;
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-center justify-between px-26px mt-24px">
          <h2 className="text-violet-500 text-24 lg:text-32 font-bold max-w-600px">
            {title}
          </h2>
          {/* <div className="flex gap-4px">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-10px h-10px rounded-[20px] ${
                  count === i ? "bg-violet-400" : "bg-violet-50"
                }`}
              ></button>
            ))}
          </div> */}

          <div className="flex gap-10px">
            <button
              className="border border-violet-300 rounded-3xl h-40px w-40px"
              onClick={() => goToPrevioustestimonial()}
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-violet-400"
              >
                <path d="M9.1703 12.7103L13.4103 16.9503C13.5033 17.044 13.6139 17.1184 13.7357 17.1692C13.8576 17.22 13.9883 17.2461 14.1203 17.2461C14.2523 17.2461 14.383 17.22 14.5049 17.1692C14.6267 17.1184 14.7373 17.044 14.8303 16.9503C15.0166 16.7629 15.1211 16.5095 15.1211 16.2453C15.1211 15.9811 15.0166 15.7277 14.8303 15.5403L11.2903 12.0003L14.8303 8.4603C15.0166 8.27293 15.1211 8.01948 15.1211 7.75529C15.1211 7.49111 15.0166 7.23766 14.8303 7.05029C14.7369 6.95761 14.626 6.88429 14.5042 6.83452C14.3824 6.78476 14.2519 6.75953 14.1203 6.7603C13.9887 6.75953 13.8582 6.78476 13.7364 6.83452C13.6146 6.88429 13.5037 6.95761 13.4103 7.05029L9.1703 11.2903C9.07657 11.3833 9.00218 11.4939 8.95141 11.6157C8.90064 11.7376 8.8745 11.8683 8.8745 12.0003C8.8745 12.1323 8.90064 12.263 8.95141 12.3849C9.00218 12.5067 9.07657 12.6173 9.1703 12.7103Z" />
              </svg>
            </button>
            <button
              className="border border-violet-300 rounded-3xl h-40px w-40px"
              onClick={() => goToNexttestimonial()}
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-violet-400"
              >
                <path d="M14.8297 11.2897L10.5897 7.0497C10.4967 6.95598 10.3861 6.88158 10.2643 6.83081C10.1424 6.78004 10.0117 6.75391 9.8797 6.75391C9.74769 6.75391 9.61698 6.78004 9.49512 6.83081C9.37326 6.88158 9.26266 6.95598 9.1697 7.0497C8.98345 7.23707 8.87891 7.49052 8.87891 7.7547C8.87891 8.01889 8.98345 8.27234 9.1697 8.4597L12.7097 11.9997L9.1697 15.5397C8.98345 15.7271 8.87891 15.9805 8.87891 16.2447C8.87891 16.5089 8.98345 16.7623 9.1697 16.9497C9.26314 17.0424 9.37395 17.1157 9.49579 17.1655C9.61763 17.2152 9.74809 17.2405 9.8797 17.2397C10.0113 17.2405 10.1418 17.2152 10.2636 17.1655C10.3854 17.1157 10.4963 17.0424 10.5897 16.9497L14.8297 12.7097C14.9234 12.6167 14.9978 12.5061 15.0486 12.3843C15.0994 12.2624 15.1255 12.1317 15.1255 11.9997C15.1255 11.8677 15.0994 11.737 15.0486 11.6151C14.9978 11.4933 14.9234 11.3827 14.8297 11.2897Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex gap-24px w-full overflow-hidden p-24px"
        id={`${type ? type : ""}testimonialSection`}
      >
        {/* <div className="min-w-400px max-md:min-w-[80px] max-sm:hidden"></div> */}

        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="rounded-xl bg-violet-50 p-24px flex flex-col gap-24px min-w-460px max-sm:min-w-280px"
          >
            <div className="flex items-center gap-24px">
              <div className="rounded-full h-80px w-80px overflow-hidden">
                <img
                  src={`/png/${type ? `${type}/` : ""}${testimonial.img}.png`}
                  alt={testimonial.img}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-16">{testimonial.name}</h4>
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
    </>
  );
};
