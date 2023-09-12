import { useField } from 'formik';

const Input = ({ id, label, type = 'text', ...props }) => {
	const [field, { error, touched }] = useField(id);
	return <div>
		{label && <label htmlFor={id} className='block mb-2 text-sm font-medium text-gray-900'>{label}</label>}
		<input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" {...props} {...field} id={id} type={type} />
		{touched && error && <div>{error}</div>}
	</div>
}

export default Input;