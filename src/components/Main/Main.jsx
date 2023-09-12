import Logout from '../../auth/components/Logout/Logout'
import GetWeaponsInitializer from "../../weapons/components/GetWeaponsInitializer/GetWeaponsInitializer"
import Weapons from "../../weapons/components/Weapons/Weapons"

const Main = () => {
	return (
		<main>
			<Logout />
			<GetWeaponsInitializer />
			<Weapons />
		</main>
	)
}

export default Main