import { lazy } from "react";
import { Route } from "react-router-dom";

/* User Screens */
const About = lazy(() => import("../components/about/About"));
const Contact = lazy(() => import("../components/contact/Contact"));
const FAQ = lazy(() => import("../components/faq/FAQ"));
const Pricing = lazy(() => import("../components/pricing/Pricing"));

const appRoutes = () =>
  [
    {
      Component: About,
      name: "About",
      path: "/about",
      title: "About",
    },
    {
      Component: Contact,
      name: "Contact",
      path: "/contact",
      title: "Contact",
    },
    {
      Component: FAQ,
      name: "FAQ",
      path: "/faq",
      title: "FAQ",
    },
    {
      Component: Pricing,
      name: "Pricing",
      path: "/pricing",
      title: "Pricing",
    },
  ].map(({ Component, ...details }, i) => (
    <Route
      exact
      key={`cd-route-${i}`}
      path={details.path}
      render={(props) => <Component helmet={details} {...props} />}
    />
  ));

export default appRoutes;
