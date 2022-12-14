import Layout from "../../components/layout/Layout";
import classes from "./index.module.css";

const AboutUs = () => {
  const about_us_description = "";
  return (
    <div className={classes.aboutus}>
      <h1>Thanks for your interest!</h1>
      <p>
        Our mission at Map Your Memory is to spark creativity and deliver
        unique, meaningful, and premium products. We do this by providing you
        the tools to captures your memories.
      </p>
      <p>
        Memories last a lifetime, but moments are fleeting. We hope you'll take
        the time and create a custom map. It will always serve as a reminder of a favorite
        a favorite place or event!
      </p>
      <p>
        We intitially created the map as a gift for our loved ones. We made maps
        as reminders of old homes. We made maps of our favorite places. We made maps 
        to commemorate special events. We made maps to celebrate our travels. We always 
        love to hear what your map means to you! Let us know at INSERT_EMAIL_HERE. We 
        read them daily! 
      </p>
    </div>
  );
};
export default AboutUs;
