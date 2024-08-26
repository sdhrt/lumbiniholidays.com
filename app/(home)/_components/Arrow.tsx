"use client";
import { ChevronsDown } from "lucide-react";
import { useRef } from "react";

export const Arrow = () => {
  const targetRef = useRef<HTMLElement>(null);
  const handleClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative hidden md:block">
      <ChevronsDown
        ref={targetRef}
        size={96}
        onClick={handleClick}
        className="absolute left-[50%] top-[50%] animate-arrow-bounce stroke-gray-600 hover:stroke-black"
      />
    </div>
  );
};
