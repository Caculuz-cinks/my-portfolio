export type Shot = {
  id: string;
  label: string;
  company: string;
  alt: string;
  aspect: "tall" | "wide" | "square";
};

export const shots: Shot[] = [
  {
    id: "veend-kyc",
    label: "Mobile app KYC",
    company: "Veend",
    alt: "Veend mobile onboarding screen listing BVN, Face ID, Identity Card, and Utility Bill verification steps",
    aspect: "tall",
  },
  {
    id: "veend-wallet",
    label: "Fund your wallet",
    company: "Veend",
    alt: "Veend mobile screen showing bank transfer details and alternative funding methods",
    aspect: "tall",
  },
  {
    id: "veend-instagram",
    label: "Instagram sales",
    company: "Veend",
    alt: "Veend mobile screen showing a paused payment link and Instagram sales payment details",
    aspect: "tall",
  },
  {
    id: "tride-web-subscription",
    label: "Web app — subscription",
    company: "Tride",
    alt: "Tride web application subscription management screen",
    aspect: "wide",
  },
  {
    id: "tride-admin-dashboard",
    label: "Admin metrics dashboard",
    company: "Tride",
    alt: "Tride admin dashboard showing conversion metrics and analytics charts",
    aspect: "wide",
  },
  {
    id: "tride-pin",
    label: "Mobile app — PIN entry",
    company: "Tride",
    alt: "Tride mobile app four digit PIN entry screen",
    aspect: "tall",
  },
  {
    id: "tride-signatories",
    label: "Corporate signatories",
    company: "Tride",
    alt: "Tride web app screen for adding digital signatories to a corporate bank account",
    aspect: "wide",
  },
  {
    id: "frelapay-contract",
    label: "Contract management",
    company: "Frelapay",
    alt: "Frelapay web app contract period and renewal settings screen",
    aspect: "wide",
  },
  {
    id: "frelapay-freelancers",
    label: "Cross-border payments",
    company: "Frelapay",
    alt: "Frelapay marketing screen for freelancer global payments",
    aspect: "wide",
  },
  {
    id: "restaurant-reservation",
    label: "Reservation software",
    company: "Circa City Life",
    alt: "Restaurant reservation confirmation and homepage screens",
    aspect: "wide",
  },
];
