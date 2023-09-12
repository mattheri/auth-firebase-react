import AuthService from '../service/AuthService'

const auth = new AuthService();

const useLoginWithGoogle = () => {
	const loginWithGoogle = () => {
		return auth.loginWithGoogle();
	}

	return loginWithGoogle;
}

export default useLoginWithGoogle;