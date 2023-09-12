import AuthService from '../service/AuthService'

const auth = new AuthService();

const useLogout = () => {
	const logout = async () => {
		return auth.logout();
	}

	return logout;
}

export default useLogout;