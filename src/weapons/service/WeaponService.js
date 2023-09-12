import config from '../../config';

class WeaponService {
	base = config.baseUrl;
	endpoint = "weapons";

	async getAllWeapons() {
		const response = await fetch(`${this.base}/${this.endpoint}`);
		if (!response.ok) {
			throw new Error(`${response.status}: ${response.statusText}`);
		}

		const data = await response.json();
		return data;
	}
}

export default WeaponService;