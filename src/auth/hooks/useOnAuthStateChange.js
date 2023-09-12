import AuthService from '../service/AuthService'

const auth = new AuthService();

const useOnAuthStateChange = (callback) => {
	auth.onAuthStateChanged(callback);
}

export default useOnAuthStateChange;