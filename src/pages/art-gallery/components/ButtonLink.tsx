import React from "react";
import arrowRightImage from "../../../assets/art-gallery/images/icon-arrow-right.svg";
import arrowLeftImage from "../../../assets/art-gallery/images/icon-arrow-left.svg";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isLeft?: boolean;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  className,
  isLeft,
  children,
}) => {
  return (
    <a
      href={href}
      className={`
        group/button 
        max-w-[16.25rem]
        relative flex text-center py-6 overflow-hidden 
        font-big-shoulders font-extrabold text-[1.25rem] tracking-[0.18em]
        ${className ?? ""}
      `}
    >
      <span
        className={`
          absolute inset-0 
          ${
            isLeft ? "bg-gradient-to-l" : "bg-gradient-to-r"
          } from-80% from-artGallery-black to-0% to-artGallery-gold duration-500
          `}
      ></span>
      <span
        className={`
          absolute inset-0 -translate-y-full 
          ${
            isLeft ? "bg-gradient-to-l" : "bg-gradient-to-r"
          } from-80% from-artGallery-gold to-0% to-artGallery-black duration-500
          group-hover/button:translate-y-0
        `}
      ></span>

      <span
        className={`relative flex-grow text-[1.25rem] text-white ${
          isLeft ? "order-1" : ""
        }`}
      >
        {children}
      </span>
      <span className={`relative basis-1/5 flex items-center justify-center`}>
        <img
          src={isLeft ? arrowLeftImage : arrowRightImage}
          alt="Icon Arrow Right"
        />
      </span>
    </a>
  );
};

export default ButtonLink;
