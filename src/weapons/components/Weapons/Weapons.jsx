import { useSelector } from "react-redux";
import { weaponsSelector } from "../../store/weaponSelectors";
import WeaponCard from "../WeaponCard/WeaponCard";

const Weapons = () => {
  const weapons = useSelector(weaponsSelector);

  return (
    <div className="grid grid-cols-4">
      {weapons.map((weapon) => (
        <WeaponCard
          name={weapon.name}
          image={weapon.image}
          description={weapon.description}
          effect={weapon.effect}
          key={weapon.id}
        />
      ))}
    </div>
  );
};

export default Weapons;
