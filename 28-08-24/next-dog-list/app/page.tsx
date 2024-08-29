import Card, { ICard } from "./components/Card/Card";

const card: ICard[] = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Owczarek_kaukaski_65556.jpg/1024px-Owczarek_kaukaski_65556.jpg",
    title: "Caucasian Shepherd Dog",
    description:
      "The Caucasian Shepherd Dog is a large and powerful breed of dog from the Caucasus Mountains region. These dogs are large in size, with a thick double coat to protect them from the cold. They have a regal bearing, with a proud and confident demeanor. They are highly intelligent and loyal, making them excellent guard dogs. They are courageous and alert, with an instinct to protect their family and property. They are highly trainable, but require firm and consistent training.",
  },
  {
    image:
      "https://www.akc.org/wp-content/uploads/2017/11/Bouvier-des-Flandres-standing-atop-a-hill.jpg",
    title: "Bouvier des Flandres",
    description:
      "The Bouvier des Flandres is a large and powerful breed of dog from the Flanders region of Belgium. These dogs are very large in size, with a thick double coat of wire-haired fur. They have a dignified but energetic demeanor, making them excellent working dogs. They are highly intelligent and trainable, with an instinct to protect their family and property. They are brave and loyal, with an independent nature that makes them well suited for herding and guard work.",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Border_Collie_rojo_mirlo_tricolor_%28Birdy_de_los_Baganicos%29.jpg/330px-Border_Collie_rojo_mirlo_tricolor_%28Birdy_de_los_Baganicos%29.jpg",
    title: "Border Collie",
    description:
      "The Border Collie is a breed of dog that originated along the English-Scottish border. It is one of the most intelligent dog breeds. They have been used to herd livestock for over 300 years. It is also famous for a pet or show-dog. As with other herding and sheepdogs, border collies can be fiercely protective of their territory and their owners. If a border collie notices anything new, they will always alert the family by barking loudly.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-row justify-center">
        <h1 className="font-bold text-6xl p-10 text-pink-500">Dog List</h1>
      </div>
      <div className="flex flex-row p-10 gap-20">
        {card.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}
