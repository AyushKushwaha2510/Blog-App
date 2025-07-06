import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-12DKHLMRQC"); // your GA4 Measurement ID
};

export const trackPage = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};
