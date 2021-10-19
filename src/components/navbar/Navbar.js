/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  InformationCircleIcon,
  GlobeIcon,
  LightningBoltIcon,
  TrendingUpIcon,
  MenuIcon,
  CashIcon,
  BanIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const solutions = [
  {
    name: "Competitive Rates",
    description:
      "Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.",
    icon: CashIcon,
  },
  {
    name: "No Hidden Fees",
    description:
      "Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.",
    icon: BanIcon,
  },
  {
    name: "Highly Responsive Design",
    description:
      "Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.",
    icon: LightningBoltIcon,
  },
  {
    name: "Analytics",
    description:
      "Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.",
    icon: TrendingUpIcon,
  },
  {
    name: "Social media marketing",
    description:
      "Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.",
    icon: GlobeIcon,
  },
  {
    name: "24/7 Support",
    description:
      "Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.",
    icon: InformationCircleIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://i.imgur.com/Mh8CXPO.png"
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500",
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel
                        static
                        className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 elevate"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden elevate">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href="/#features"
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                  <item.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="p-5 bg-gray-50 sm:p-8">
                            <a
                              href="#"
                              className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100"
                            >
                              <div className="flex items-center">
                                <div className="text-base font-medium text-gray-900">
                                  Discounted Rate
                                </div>
                                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
                                  New
                                </span>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                Empower your entire team with even more advanced
                                tools.
                              </p>
                            </a>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                <Link to={"/pricing"}>Pricing</Link>
              </a>
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                <Link to={"/faq"}>FAQs</Link>
              </a>
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                <Link to={"/about"}>About</Link>
              </a>
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                <Link to={"/contact"}>Contact Us</Link>
              </a>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden elevate"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://i.imgur.com/Mh8CXPO.png"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href="\#features"
                          className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      <Link to={"/pricing"}>Pricing</Link>
                    </a>
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      <Link to={"/faqs"}>FAQs</Link>
                    </a>
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      <Link to={"/about"}>About</Link>
                    </a>
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      <Link to={"/contact"}>Contact Us</Link>
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
