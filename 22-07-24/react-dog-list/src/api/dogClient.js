export const getDogList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(() => {
        return [
          {
            id: "68f47c5a-5115-47cd-9849-e45d3c378f12",
            type: "breed",
            name: "Caucasian Shepherd Dog",
            description:
              "The Caucasian Shepherd Dog is a large and powerful breed of dog from the Caucasus Mountains region. These dogs are large in size, with a thick double coat to protect them from the cold. They have a regal bearing, with a proud and confident demeanor. They are highly intelligent and loyal, making them excellent guard dogs. They are courageous and alert, with an instinct to protect their family and property. They are highly trainable, but require firm and consistent training.",
          },
          {
            id: "4ddbe251-72af-495e-8e9d-869217e1d92a",
            type: "breed",
            name: "Bouvier des Flandres",
            description:
              "The Bouvier des Flandres is a large and powerful breed of dog from the Flanders region of Belgium. These dogs are very large in size, with a thick double coat of wire-haired fur. They have a dignified but energetic demeanor, making them excellent working dogs. They are highly intelligent and trainable, with an instinct to protect their family and property. They are brave and loyal, with an independent nature that makes them well suited for herding and guard work.",
          },
        ];
      });
    }, 2000);
  });
};

export const getDogDetail = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(() => {
        return (
          {
            id: "68f47c5a-5115-47cd-9849-e45d3c378f12",
            type: "shepherd",
            name: "Caucasian Shepherd Dog",
            description:
              "The Caucasian Shepherd Dog is a large and powerful breed of dog from the Caucasus Mountains region. These dogs are large in size, with a thick double coat to protect them from the cold. They have a regal bearing, with a proud and confident demeanor. They are highly intelligent and loyal, making them excellent guard dogs. They are courageous and alert, with an instinct to protect their family and property. They are highly trainable, but require firm and consistent training.",
            cover:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Owczarek_kaukaski_65556.jpg/1024px-Owczarek_kaukaski_65556.jpg",
          },
          {
            id: "4ddbe251-72af-495e-8e9d-869217e1d92a",
            type: "shepherd",
            name: "Bouvier des Flandres",
            description:
              "The Bouvier des Flandres is a large and powerful breed of dog from the Flanders region of Belgium. These dogs are very large in size, with a thick double coat of wire-haired fur. They have a dignified but energetic demeanor, making them excellent working dogs. They are highly intelligent and trainable, with an instinct to protect their family and property. They are brave and loyal, with an independent nature that makes them well suited for herding and guard work.",
            cover:
              "https://www.akc.org/wp-content/uploads/2017/11/Bouvier-des-Flandres-standing-atop-a-hill.jpg",
          }
        );
      });
    }, 500);
  });
};


export const addDog = (body) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(
				{
					...body, id: self.crypto.randomUUID(),
				}
			)
		}, 3000)
	})
}
