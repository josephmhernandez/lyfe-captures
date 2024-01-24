import classes from "./index.module.css";

const AboutUs = () => {
  const about_us_description = "";
  return (
    <div className="container mx-auto p-[3vh] px-[10vh]">
      <h1 className="font-bold text-center pt-[3vh] pb-[1vh] text-1xl md:text-2xl lg:text-3xl">
        Thanks for your interest!
      </h1>
      <p className="py-3 text-base leading-relaxed sm:text-lg md:text-xl">
        {`Welcome to MapYourMemory! We're passionate about creating unique,
        high-quality maps that help you celebrate your special moments and
        adventures. Our maps are perfect for commemorating your favorite travel
        destinations, your hometown, or any location that holds special meaning
        to you.`}
      </p>
      <p className="py-3 text-base leading-relaxed sm:text-lg md:text-xl">
        {`Our team of experienced designers and print technicians work together to
        create maps with exceptional resolution and sharp detailing. Our maps
        are customizable, allowing you to choose the colors, styles, and even
        add text or pins to create a truly personalized piece of wall art. We're
        dedicated to ensuring your map is not only beautiful, but also durable,
        using only high-quality materials in the printing and finishing process.`}
      </p>
      <p className="py-3 text-base leading-relaxed sm:text-lg md:text-xl">
        {`We understand that our maps are more than just a product - they
        represent cherished memories and experiences. That's why we take pride
        in our excellent customer service, ensuring that each map is crafted
        with care and precision. We're constantly striving to improve and expand
        our product offerings to meet the needs of our customers.`}
      </p>
      <p className="py-3 text-base leading-relaxed sm:text-lg md:text-xl">
        {`Thank you for choosing MapYourMemory and allowing us to be a part of
        your journey.`}
      </p>
    </div>
  );
};
export default AboutUs;
