import { ReactNode } from "react";
import clsx from "clsx";

type CardProps = { children: ReactNode; className?: string };

const Card = ({ children, className }: CardProps) => {
  const cardClasses = clsx(
    "bg-black/75 border border-white/30 rounded p-4 gap-6",
    className
  );

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
