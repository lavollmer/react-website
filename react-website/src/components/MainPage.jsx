import React from "react";
import { TypeAnimation } from "react-type-animation";

function MainPage() {
  return (
    <div id="MainPage">
      <img
        className="w-full h-screen object-cover object-left scale-x-[1]"
        src="https://images.unsplash.com/photo-1705600196560-9e58cc3e18f4?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>
      <div className="w-full h-screen top-0 left-0 bg-white/50">
        <div>
          <h1>I'm Laura</h1>
          <h2>
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "We produce food for Mice",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "We produce food for Hamsters",
                1000,
                "We produce food for Guinea Pigs",
                1000,
                "We produce food for Chinchillas",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
