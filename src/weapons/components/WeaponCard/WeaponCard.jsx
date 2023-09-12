const WeaponCard = ({ name, image, description, effect }) => {
  return (
    <div className="flex flex-col gap-4 max-w-[300px] p-2 rounded bg-white">
      <img
        src={image}
        alt={name}
        className="w-full h-auto rounded"
        loading="lazy"
      />
      <h2 className="text-2xl">{name}</h2>
      <p>{description}</p>
      <small>{effect}</small>
    </div>
  );
};

export default WeaponCard;
