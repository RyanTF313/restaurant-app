type CardProps = {
    title: string;
    description: string;
}

function Card(props: CardProps) {
  return (
    <div className="px-8 py-4 bg-black rounded-lg hover:bg-gray-900 transition">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
  )
}

export default Card