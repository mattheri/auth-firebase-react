import { getApps, getApp, initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import config from '../../config';

class AuthService {
	app() {
		if (getApps().length) {
			return getApp();
		}

		return initializeApp({
			apiKey: config.apiKey,
			authDomain: config.authDomain,
			projectId: config.projectId,
			storageBucket: config.storageBucket,
			messagingSenderId: config.messagingSenderId,
			appId: config.appId,
		})
	}

	auth() {
		return getAuth(this.app());
	}

	loginWithEmailAndPassword(email, password) {
		return signInWithEmailAndPassword(this.auth(), email, password);
	}

	signupWithEmailAndPassword(email, password) {
		return createUserWithEmailAndPassword(this.auth(), email, password);
	}

	loginWithGoogle() {
		const provider = new GoogleAuthProvider();
		return signInWithRedirect(this.auth(), provider);
	}

	logout() {
		return this.auth().signOut();
	}

	onAuthStateChanged(callback) {
		return this.auth().onAuthStateChanged(callback);
	}

	getCurrentUser() {
		return this.auth().currentUser;
	}
}

export default AuthService;