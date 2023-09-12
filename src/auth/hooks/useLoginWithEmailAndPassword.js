import AuthService from '../service/AuthService'

const auth = new AuthService();

const useLoginWithEmailAndPassword = () => {
	const loginWithEmailAndPassword = (email, password) => {
		return auth.loginWithEmailAndPassword(email, password);
	}

	return loginWithEmailAndPassword;
}

export default useLoginWithEmailAndPassword;