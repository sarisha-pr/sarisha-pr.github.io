import React from "react";

interface HeadingProps {
  size: "xl" | "l" | "m" | "s";
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ size, className, children }) => {
  let classSize = "";

  switch (size) {
    case "xl":
      classSize = "text-[6rem] leading-[0.91]";
      break;
    case "l":
      classSize = "text-[4.375rem] leading-none";
      break;
    case "m":
      classSize = "text-[3.75rem] leading-none";
      break;
    case "s":
      classSize = "text-[36px] leading-none";
      break;
  }

  return (
    <span
      className={`font-big-shoulders uppercase break-words ${classSize} ${
        className ?? ""
      }`}
    >
      {children}
    </span>
  );
};

export default Heading;
