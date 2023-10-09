import { TypeAnimation } from "react-type-animation";

const AnimatedText = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Developer.",
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        "Professional Coder.",
        2000,
      ]}
      wrapper="span"
      speed={5}
      repeat={Infinity}
    />
  );
};

export default AnimatedText;
