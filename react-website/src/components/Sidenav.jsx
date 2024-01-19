import React, { useState } from "react";
// import AiOutlineMenu which is a hamburger style icon
import { AiOutlineMenu } from "react-icons/ai";

function Sidenav() {
  // state variable = nav, setNav updates the function of nav variable, initial value of nav is set to false
  // when handleNav is called, it will update the function of nav to the opposite of its current value
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    // testing => every time click then will log state changed in console
    console.log("state changed");
  };
  return (
    <>
      <div>
        {/* absolute means positioned to its closest relative */}
        {/* top offset to 4 units, right offset of 4 units */}
        {/* Z-index determines stack order of elements thus element will appear above others */}
        {/* anything above medium breakpoint is hidden */}
        <AiOutlineMenu
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden"
        />
        {nav ? (
          <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
            <a href="#main"></a>
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default Sidenav;
