import React from "react";

const WorkItem = ({ year, title, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          {/* inline block sets the the display property to be inline block, px-2 sets horizontal padding to 2, py-1 sets vertical padding to 1, font-semibold is semibold font, rounded-md sets the border radius to rounded */}
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#141B38] rounded-md">
            {year}
          </span>
          {/* text-lg sets text to large size, font-semibold is font weight semibold, text with custom color */}
          <span className="text-lg font-semibold txt-[#141B38]">{title}</span>
          {/* my-1 sets the margin on the vertical axis to 1px, text-sm sets the text to small size, font-normal sets the font size to 400px, leading none sets a tight line height without additional spacing,text-stone-400 sets the color to specific gray shade */}
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </span>
        </p>
        {/* my-2 sets margin on vertical axis to 2px */}
        {/* text-base sets the font size to the base size (predefined in tailwind)  */}
        {/* font normal applies a font size of 400px */}
        {/* text-stone-500 sets the text color to a specific shade of gray  */}
        <p className="my-2 text-base font-normal text-stone-500">{details}</p>
      </li>
    </ol>
  );
};

export default WorkItem;
