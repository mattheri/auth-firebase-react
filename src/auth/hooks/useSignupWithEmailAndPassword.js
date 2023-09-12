import AuthService from '../service/AuthService'

const auth = new AuthService();

const useSignupWithEmailAndPassword = () => {
	const signupWithEmailAndPassword = (email, password) => {
		return auth.signupWithEmailAndPassword(email, password);
	}

	return signupWithEmailAndPassword;
}

export default useSignupWithEmailAndPassword;