import { Form, Formik } from 'formik'
import Input from '../../../components/Input/Input'
import useLoginWithEmailAndPassword from '../../hooks/useLoginWithEmailAndPassword'
import useLoginWithGoogle from '../../hooks/useLoginWithGoogle'
import useOnAuthStateChange from '../../hooks/useOnAuthStateChange'
import { useNavigate } from 'react-router-dom'

const initalValues = {
	email: '',
	password: ''
}

const Login = () => {
	const loginWithEmailAndPassword = useLoginWithEmailAndPassword();
	const loginWithGoogle = useLoginWithGoogle();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { email, password } = values;
		await loginWithEmailAndPassword(email, password);
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
					<button type="submit" className='p-2 rounded-md text-white font-bold bg-blue-500 hover:bg-blue-600'>Login</button>
				</Form>
			</Formik>
			<button type='button' className='p-2 rounded-md text-white font-bold bg-red-500 hover:bg-red-600' onClick={onLoginWithGoogle}>Login with Google</button>
		</div>
	);
}

export default Login