import React from "react";

const DiplomaText = ({isPhone}) => {
  return (
    <div
      className="diploma-text"
      style={{
        fontSize: isPhone.isPhone? "3vw": "0.9vw",
        
      }}
    >
      <p>
        My Diploma Thesis focused on making the{" "}
        <i>debates of the Greek Parliament</i>{" "}
        <strong>more accessible and useful</strong> to everyone.
      </p>

      <br />

      <p>
        Imagine being able to <strong>easily search</strong> through
        parliamentary discussions, <strong>explore</strong> different topics,
        and <strong>understand</strong> the arguments made by different parties.
        That's what I aimed to achieve by converting the debates into a special
        format called <strong>Linked Open Data (LOD)</strong>.
      </p>
      <br />
      <p>This allows researchers, journalists, and even regular citizens to:</p>

      <ul className="list-disc list-inside">
        <li>
          <strong>Find specific information</strong> from the debates quickly
          and easily.
        </li>
        <li>
          <strong>Analyze</strong> the discussions in new ways, like identifying
          trends or comparing different viewpoints.
        </li>
        <li>
          <strong>Develop tools and applications</strong> based on the data,
          helping people understand the work of the parliament better.
        </li>
      </ul>
      <br />
      <p>
        While I focused on the technical aspects and possibilities, my project
        paves the way for making parliamentary information{" "}
        <strong>more transparent and engaging</strong> for everyone.
      </p>
      <br />
      <p className="flex flex-col  items-center md:items-end">
        You can find more information about the project on my GitHub repository:
        <p className="text-[#eb0028] italic bold font-bold hover:cursor-pointer underline underline-offset-2">
          <a
            href="https://github.com/john-papani/diploma"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/john-papani/diploma
          </a>
        </p>
        or by contacting me directly.
      </p>
    </div>
  );
};

export default DiplomaText;
