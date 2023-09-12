import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import WeaponService from "../../service/WeaponService";
import { useDispatch } from "react-redux";
import { addWeapons } from "../../store/weaponSlice";

const weaponService = new WeaponService();

const GetWeaponsInitializer = () => {
  const [startQuery, setStartQuery] = useState(false);
  const onClick = () => setStartQuery(true);

  const { data } = useQuery({
    queryKey: ["weapons"],
    queryFn: () => weaponService.getAllWeapons(),
    enabled: startQuery,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(addWeapons(data.data));
    }
  }, [data, dispatch]);

  return (
    <button type="button" className='p-2 rounded-md text-white font-bold bg-lime-500 hover:bg-lime-600' onClick={onClick}>
      Start Query
    </button>
  );
};

export default GetWeaponsInitializer;
