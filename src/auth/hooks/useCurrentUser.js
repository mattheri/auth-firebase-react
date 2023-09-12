import AuthService from '../service/AuthService'

const auth = new AuthService();

const useCurrentUser = () => {
	return auth.getCurrentUser();	
}

export default useCurrentUser;