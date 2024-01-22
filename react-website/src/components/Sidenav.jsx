import React, { useState } from "react";
// import AiOutlineMenu which is a hamburger style icon
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

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
        {/* if nav is truthy will then display the following below */}
        {nav ? (
          // fixed position container that covers entire screen, has semi-transparent white background, flex container with contents that are vertically aligned and center, with a z index of 20 giving it's stacking
          <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
            {/* link to main with styling of flex container, centered items, shadow is gray, hover */}
            <a
              onClick={handleNav}
              href="#main"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              {/* AiOutlineHome icon from React icons with a size of 20 pixels */}
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>
            <a
              onClick={handleNav}
              href="#work"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              {/* GrProjects icon from React icons with a size of 20 pixels */}
              <GrProjects size={20} />
              <span className="pl-4">Work</span>
            </a>
            <a
              href="#projects"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              {/* AiOutlineProject icon from React icons with a size of 20 pixels */}
              <AiOutlineProject size={20} />
              <span className="pl-4">Projects</span>
            </a>
            <a
              onClick={handleNav}
              href="#main"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              {/* BsPerson icon from React icons with a size of 20 pixels */}
              <BsPerson size={20} />
              <span className="pl-4">Resume</span>
            </a>
            <a
              onClick={handleNav}
              href="#contact"
              className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              {/* AiOutlineMail icon from React icons with a size of 20 pixels */}
              <AiOutlineMail size={20} />
              <span className="pl-4">Contact</span>
            </a>
          </div>
        ) : (
          ""
        )}
        <div className="md:block hidden fixed top-[25%] z-10">
          <div className="flex flex-col">
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineHome size={20} />
            </a>
            <a
              href="#work"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <GrProjects size={20} />
            </a>
            <a
              href="#projects"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineProject size={20} />
            </a>
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <BsPerson size={20} />
            </a>
            <a
              href="#contact"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
