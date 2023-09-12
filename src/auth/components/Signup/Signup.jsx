import { Form, Formik } from 'formik'
import Input from '../../../components/Input/Input'
import useLoginWithGoogle from '../../hooks/useLoginWithGoogle'
import { useNavigate } from 'react-router-dom'
import useSignupWithEmailAndPassword from '../../hooks/useSignupWithEmailAndPassword'
import useOnAuthStateChange from '../../hooks/useOnAuthStateChange'

const initalValues = {
	email: '',
	password: ''
}

const Signup = () => {
	const signupUserWithEmailAndPassword = useSignupWithEmailAndPassword();
	const loginWithGoogle = useLoginWithGoogle();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { email, password } = values;
		await signupUserWithEmailAndPassword(email, password);
	}

	const onLoginWithGoogle = async () => {
		await loginWithGoogle();
	}

	useOnAuthStateChange(user => {
		if (user) {
			navigate('/');
		}
	})

	return (
		<div className='w-full max-w-xl mx-auto flex flex-col gap-4'>	
			<Formik initialValues={initalValues} validateOnChange onSubmit={onSubmit}>
				<Form className='flex flex-col gap-4'>
					<Input id="email" label="Email" />
					<Input id="password" label="Password" type="password" />
					<button type="submit" className='p-2 rounded-md text-white font-bold bg-blue-500 hover:bg-blue-600'>Signup</button>
				</Form>
			</Formik>
			<button type='button' className='p-2 rounded-md text-white font-bold bg-red-500 hover:bg-red-600' onClick={onLoginWithGoogle}>Signup with Google</button>
		</div>
	);
}

export default Signup