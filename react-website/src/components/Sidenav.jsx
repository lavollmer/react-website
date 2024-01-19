import React, { useState } from "react";
// import AiOutlineMenu which is a hamburger style icon
import { AiOutlineMenu } from "react-icons/ai";

function Sidenav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      {/* absolute means positioned to its closest relative */}
      {/* top offset to 4 units, right offset of 4 units */}
      {/* Z-index determines stack order of elements thus element will appear above others */}
      <AiOutlineMenu className="absolute top-4 right-4 z-[99]" />
    </div>
  );
}

export default Sidenav;
