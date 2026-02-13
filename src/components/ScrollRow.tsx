import { ReactNode } from "react";

interface ScrollRowProps {
  children: ReactNode;
  direction: "left" | "right";
  duration: string;
}

const ScrollRow = ({ children, direction, duration }: ScrollRowProps) => {
  const animClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className="scroll-row overflow-hidden py-4">
      <div
        className={`flex gap-3 sm:gap-4 md:gap-5 w-max ${animClass}`}
        style={{ ["--scroll-duration" as string]: duration }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default ScrollRow;
