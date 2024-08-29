"use client";

import { ICard } from "../Card/Card";

interface ButtonProps {
  card: ICard;
}

function Button({ card }: ButtonProps) {
  return (
    <button
      className="text-m text-white underline cursor-pointer"
      onClick={() => {
        console.log(card.description);
      }}
    >
      View description
    </button>
  );
}

export default Button;
