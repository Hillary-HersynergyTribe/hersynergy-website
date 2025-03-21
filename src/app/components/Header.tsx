"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About Us",
    route: "/about-us",
  },
  {
    name: "Impact",
    route: "/our-impact",
  },
  {
    name: "Membership",
    route: "/membership",
  },
  {
    name: "Events",
    route: "/events",
    children: [
      {
        name: "UnleashHer Potential Summit",
        route: "/events/unleashher-potential-summit",
      },
    ],
  },
  {
    name: "Newsletter",
    route: "/#newsletter",
  },
  {
    name: "Get Involved",
    children: [
      { name: "Mentorship", route: "/mentorship" },
      { name: "Partnership", route: "/partnerships" },
    ],
  },
];

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("Home");
  const pathname = usePathname();

  const isChildrenRouteActive = (parentRoute: string) => {
    const childrenRoutes = menuItems.find(
      (item) => item.name === parentRoute
    )?.children;
    return childrenRoutes?.some((route) => route.route === pathname);
  };
  
  return (
    <header>
      <nav className="w-full py-16px px-24px z-50 fixed bg-white-100 shadow">
        <div className="flex justify-between items-center max-w-[1280px] w-full mx-auto">
          <Link href="/" className="w-150px">
            <img
              src="/png/her-logo.png"
              alt="hersynergy logo"
              className="w-full"
            />
          </Link>

          <button
            className="block lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            {!showMenu && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7H21"
                  stroke="#612351"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 12H21"
                  stroke="#612351"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 17H21"
                  stroke="#612351"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
            {showMenu && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#612351"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#612351"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          <ul
            className={`max-lg:absolute max-lg:top-68px max-lg:right-20px max-lg:text-left max-lg:bg-white-50 max-lg:shadow-sm max-lg:rounded-10px max-lg:min-w-[250px] lg:flex lg:items-center lg:justify-end lg:bg-transparent max-lg:rounded-xl transition-all duration-500 ${
              showMenu
                ? "max-lg:h-fit max-lg:block max-lg:z-50"
                : "max-lg:hidden max-lg:h-0"
            }`}
          >
            {menuItems.map((link) => (
              <li
                className="py-8px px-12px border-b border-b-violet-50 last-of-type:border-none lg:border-none relative"
                key={link.name}
                onClick={() => {
                  setCurrentRoute(link.name);
                  !link.children ? setShowMenu(false) : null;
                }}
              >
                <div
                  className={`flex items-center gap-8px relative transition-all duration-75 ${
                    (currentRoute === link.name ||
                      isChildrenRouteActive(link.name) ||
                      link.route === pathname) &&
                    link.route !== "/"
                      ? "lg:after:absolute lg:after:left-0 lg:after:inset-6 lg:after:block lg:after:h-2px lg:after:w-full lg:after:bg-violet-500"
                      : ""
                  }`}
                >
                  {link.route ? (
                    <Link
                      href={`${link.route}`}
                      className={`text-violet-500 text-16 ${
                        currentRoute === link.name
                          ? "max-lg:font-bold"
                          : "font-semibold"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <span
                      className={`text-violet-500 text-16 font-semibold hover:cursor-pointer ${
                        currentRoute === link.name
                          ? "max-lg:font-bold"
                          : "font-semibold"
                      }`}
                    >
                      {link.name}
                    </span>
                  )}

                  {link.children ? (
                    <button>
                      <img src="/svg/arrow-down.svg" alt="arrow-down icon" />
                    </button>
                  ) : null}
                </div>

                {currentRoute === link.name ? (
                  <div className="lg:absolute lg:top-[100%] lg:shadow lg:min-w-[228px] w-fit bg-white-100 rounded-md lg:z-10 transition-all ease-in-out duration-300 lg:h-fit max-lg:ml-20px">
                    <ul className="lg:pl-20px">
                      {link.children?.map((subRoute) => (
                        <li
                          className="py-8px lg:pr-20px not-last-of-type:lg:border-b not-last-of-type:lg:border-b-violet-50"
                          key={subRoute.name}
                          onClick={(event) => {
                            event.stopPropagation();
                            setCurrentRoute('');
                            setShowMenu(false);
                          }}
                        >
                          <Link
                            className="text-12 text-violet-500 transition-all duration-300 hover:font-bold"
                            href={subRoute.route}
                          >
                            {subRoute.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ))}

            <li className="px-12px py-8px block lg:hidden">
              <a
                href="https://forms.gle/XK5KF2oCxsSUc2oE6"
                target="_blank"
                className="bg-violet-500 rounded-2xl text-white text-12 w-fit px-24px py-8px"
              >
                Join Now
              </a>
            </li>
          </ul>

          <a
            href="https://forms.gle/XK5KF2oCxsSUc2oE6"
            target="_blank"
            className="bg-violet-500 rounded-3xl text-white font-semibold text-14 lg:block w-fit px-24px py-12px hidden whitespace-nowrap"
          >
            Join Now
          </a>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 backdrop-blur-[6px] transition-all duration-500 ${
          showMenu
            ? "pointer-events-all opacity-100 z-[2]"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setShowMenu(!showMenu)}
      ></div>

      {currentRoute === "Events" || currentRoute === "Get Involved" ? (
        <div
          className="fixed w-screen h-screen top-0 left 0"
          onClick={() => setCurrentRoute("")}
        ></div>
      ) : null}
    </header>
  );
};
