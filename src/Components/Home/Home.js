import React from "react";
import { useSpring, animated } from "react-spring";
import "./Home.css";

const Home = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props} className="home">
      <h1>Welcome to Our Website</h1>
      <p>This is the home page.</p>
    </animated.div>
  );
};

export default Home;
