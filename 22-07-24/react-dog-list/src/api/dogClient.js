export const getDogList = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(() => {
				return [
					{
                        id: "68f47c5a-5115-47cd-9849-e45d3c378f12",
                        type: "breed",
                        name: "Caucasian Shepherd Dog",
                        description: "The Caucasian Shepherd Dog is a large and powerful breed of dog from the Caucasus Mountains region. These dogs are large in size, with a thick double coat to protect them from the cold. They have a regal bearing, with a proud and confident demeanor. They are highly intelligent and loyal, making them excellent guard dogs. They are courageous and alert, with an instinct to protect their family and property. They are highly trainable, but require firm and consistent training."
					},
				];
			});
		}, 2000);
	});
};


/* export const getDogList = async () => {
	try {

		const res = await fetch("https://dogapi.dog/api/v2/breeds");
		return res.json()

	} catch (error) {
		throw new Error("Error:", error)

	}
};  */