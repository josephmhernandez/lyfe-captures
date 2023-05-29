import { useState, useRef, useEffect } from "react";
import classes from "./FadeInSection.module.css";

const FadeInSection = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  let neededCssStyle = "fadeInSection";
  if (isVisible) {
    neededCssStyle = "fadeInSectionVisible";
  }

  return (
    <div className={neededCssStyle} ref={domRef}>
      {props.children}
    </div>
  );
};

export default FadeInSection;
