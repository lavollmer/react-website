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

//defining functional component Work
const Work = () => {
  return (
    // tailwind styling is maximum width of the element is set to the custom value of 1040px
    //  m-auto sets the element's margin to auto which horizontally centers the item in the container in tailwind
    // md:pl-20 sets the left padding of the element to 20px on medium-sized screens and above
    //py-16 sets the vertical padding to 16px on all sides (tailwind applies property to top and bottom)
    <div id="Work" className="max-width-[1040px] m-auto md:pl-20 py-16">
      <h1 className="text-4xl font-bold text-center text-[#3D304C]">Work</h1>
      {/* map function on the data array -> iterates over each item in the array and returns a new array of WorkItem component */}
      {/* map function takes 2 callback parameters (item and idx), for each item in the data array */}
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
