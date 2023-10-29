import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div
      className={`container md:max-lg:max-w-[41.875rem] xxl:max-w-[69.375rem] ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
