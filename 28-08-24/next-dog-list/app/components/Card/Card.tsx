import Button from "../Button/button";


export interface ICard {
  image: string;
  title: string;
  description: string;
}

interface CardProps {
  card: ICard;
}

function Card({ card }: CardProps) {
  return (
    <div className="group relative block bg-black w-96 h-80 rounded-lg">
      <img
        alt={card.title}
        src={card.image}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-lg"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          {card.title}
        </p>

        <div className="bottom-0 left-0 p-4 w-full">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <Button card={card}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;