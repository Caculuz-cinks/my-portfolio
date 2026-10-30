export type Shot = {
  id: string;
  label: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  aspect: "tall" | "wide" | "square";
};

// Interleave devices and disciplines rather than grouping by product or format.
const catalog: [string, string, number, number][] = [
  ["Healthcare AI web app - Oasis AI","healthcare-ai-web-app-oasis-ai.svg",901,563],
  ["Rivy - Home Mobile App","rivy-home-mobile-app.svg",393,946],
  ["Adverio Login","adverio-login.svg",1440,900],
  ["Illustration  Omniwire - Card Issuance","illustration-omniwire-card-issuance.svg",802,563],
  ["Mobile app redesign - Instacart","mobile-app-redesign-instacart.png",260,563],
  ["Web app - B2B Restaurant reservation management","web-app-b2b-restaurant-reservation-management.svg",1093,605],
  ["ilarna - Profile Setup - Tablet","ilarna-profile-setup-tablet.svg",834,1194],
  ["Crushing It in Tech Book - Hero","crushing-it-in-tech-book-hero.svg",1076,572],
  ["Payment Link - Veend","payment-link-veend.svg",261,563],
  ["A:B Test dashboard","a-b-test-dashboard.svg",1080,592],
  ["Brand design -  AfroOrganic","brand-design-afroorganic.svg",418,563],
  ["Dreamify Login","dreamify-login.svg",1440,900],
  ["IOT Based Mobile app - Anomaly","iot-based-mobile-app-anomaly.svg",258,563],
  ["Web app - Ecommerce","web-app-ecommerce.svg",997,563],
  ["Illustration  Omniwire - Core Banking","illustration-omniwire-core-banking.svg",802,563],
  ["Rivy - KYC Mobile App","rivy-kyc-mobile-app.svg",393,852],
  ["Liroad Home Page","liroad-home-page.svg",1440,900],
  ["ilarna - Profile Page - Tablet","ilarna-profile-page-tablet.svg",834,1198],
  ["Crushing in Tech - Newsletter","crushing-in-tech-newsletter.svg",1076,572],
  ["Mobile app KYC - Veend","mobile-app-kyc-veend.svg",261,563],
  ["Website Landing page & Custom Illustration","website-landing-page-custom-illustration.svg",790,563],
  ["Heep - Login","heep-login.svg",1440,900],
  ["Packaging design - AfroOrganic","packaging-design-afroorganic.svg",751,563],
  ["Rivy - Offer Mobile App","rivy-offer-mobile-app.svg",393,946],
  ["Web app - B2B Restaurant onboarding","web-app-b2b-restaurant-onboarding.svg",1059,567],
  ["Illustration  Omniwire - Payments","illustration-omniwire-payments.svg",1076,572],
  ["Signup - Instacart redesign","signup-instacart-redesign.svg",260,563],
  ["Crushing It in Tech Book - Module","crushing-it-in-tech-book-module.svg",1076,572],
  ["ilarna - Profile Details - Tablet","ilarna-profile-details-tablet.svg",834,1194],
  ["Rivy-Web App Signup","rivy-web-app-signup.svg",1440,900],
  ["Receive Money - Veend","receive-money-veend.svg",261,563],
  ["IOT Based Web app - Anomaly","iot-based-web-app-anomaly.svg",901,563],
  ["Zenbooker Login","zenbooker-login.svg",1440,900],
  ["IOT Based Mobile app - BT Connected","iot-based-mobile-app-bt-connected.svg",258,563],
  ["Modals","modals.svg",1076,572],
  ["Liroad Login Page","liroad-login-page.svg",1440,900],
  ["Crushing It in Tech Book - Pricing","crushing-it-in-tech-book-pricing.svg",1076,572],
];

export const shots: Shot[] = catalog.map(([label, file, width, height]) => ({
  id: file.replace(/\.[^.]+$/, ""),
  label,
  src: `/ui-shots/${file}`,
  alt: label,
  width,
  height,
  aspect: height > width * 1.2 ? "tall" : width > height * 1.2 ? "wide" : "square",
}));
