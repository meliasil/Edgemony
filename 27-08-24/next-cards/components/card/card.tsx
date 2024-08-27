

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
  }

function Card(props: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
    <img src={props.imageUrl} alt={props.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{props.title}</h2>
      <p className="text-gray-700 mb-4">{props.description}</p>
      <a href={props.linkUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Learn more
      </a>
    </div>
  </div>
  )
}

export default Card
