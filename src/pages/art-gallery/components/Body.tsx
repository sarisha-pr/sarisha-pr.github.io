import React from "react";

interface BodyProps {
  size: "m" | "s";
  children: React.ReactNode;
  className?: string;
}

const Body: React.FC<BodyProps> = ({ size, className, children }) => {
  let classSize = "";

  switch (size) {
    case "m":
      classSize = "text-[22px] leading-normal";
      break;
    case "s":
      classSize = "text-[1.125rem] leading-normal";
      break;
  }

  return (
    <p
      className={`text-artGallery-grey break-words ${classSize} ${
        className ?? ""
      }`}
    >
      {children}
    </p>
  );
};

export default Body;
