import useLogout from '../../hooks/useLogout'
import {useNavigate} from 'react-router-dom'

const Logout = () => {
	const logout = useLogout();
	const navigate = useNavigate();

	const onClick = async () => {
		await logout()
		navigate('/login')
	}
	return <button type='button' className='p-2 bg-slate-500 font-bold text-white rounded-md hover:bg-slate-600' onClick={onClick}>Logout</button>
}

export default Logout