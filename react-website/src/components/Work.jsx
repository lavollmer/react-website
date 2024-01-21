import React from "react";
import { WorkItem } from "./WorkItem";

//array of objects of data
const data = [
  {
    year: 2023,
    title: "Floral Designer",
    duration: "9 months",
    details: "lorem ipsum",
  },
  {
    year: 2020,
    title: "Content Manager",
    duration: "1.5 years",
    details: "lorem ipsum",
  },
  {
    year: 2017,
    title: "Clinical Pharmacy Specialist",
    duration: "1.5 years",
    details: "lorem ipsum",
  },
];
const Work = () => {
  return (
    <div id="Work" className="max-width-[1040px] m-auto md:pl-20 py-16">
      <h1 className="text-4xl font-bold text-center text-[#3D304C]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
