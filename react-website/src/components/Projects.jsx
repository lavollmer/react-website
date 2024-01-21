import React from "react";
import ProjectItem from "./ProjectItem";
import giftifyImg from "../assets/giftify.jpg";
import murderymysteryImg from "../assets/murdermystery.jpg";
import reactwebsiteImg from "../assets/reactwebsite.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
        corporis non laudantium veritatis temporibus perspiciatis ipsam facere
        maxime numquam reiciendis. Est ullam hic distinctio vero accusantium!
        Eaque error molestias hic.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default Projects;
