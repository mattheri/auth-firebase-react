import {Outlet, useNavigate} from 'react-router-dom'
import useOnAuthStateChange from '../../hooks/useOnAuthStateChange';

const AuthLayout = () => {
	const navigate = useNavigate();
	useOnAuthStateChange(user => {
		if (!user) {
			navigate('/login');
		}
	});

	return <Outlet />
};

export default AuthLayout;