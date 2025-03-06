export const PageHeader = ({
  title,
  bgImage,
}: {
  title: string;
  bgImage: string;
}) => {
  const bgImages: any = {
    "about-us": "bg-[url(/png/about-us-header.png)]",
    "our-impact": "bg-[url(/png/our-impact-header.png)]",
    events: "bg-[url(/png/events-header.png)]",
    partnerships: "bg-[url(/png/partnerships-header.png)]",
    mentorship: "bg-[url(/png/mentorship-header.png)]",
    membership: "bg-[url(/png/membership-header.png)]",
  };

  return (
    <div className={`p-140px max-lg:px-24px max-lg:py-24px bg-cover ${bgImages[bgImage]}`}>
      <h1 className="text-16 md:text-40 text-white font-bold capitalize">
        {title}
      </h1>
    </div>
  );
};
