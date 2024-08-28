import Card, {ICard} from "./components/Card/Card";

const card: ICard = {
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Owczarek_kaukaski_65556.jpg/1024px-Owczarek_kaukaski_65556.jpg",
  title: "Caucasian Shepherd Dog",
  description:
    "The Caucasian Shepherd Dog is a large and powerful breed of dog from the Caucasus Mountains region. These dogs are large in size, with a thick double coat to protect them from the cold. They have a regal bearing, with a proud and confident demeanor. They are highly intelligent and loyal, making them excellent guard dogs. They are courageous and alert, with an instinct to protect their family and property. They are highly trainable, but require firm and consistent training.",
};

export default function Home() {
  return <Card card={card} />;
}
