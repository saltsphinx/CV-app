export default function Input({ label, name, defaultValue, type="text"}) {
	return <div>
		<label htmlFor={name}>{label}</label>
		<input type={type} name={name} id={name} defaultValue={defaultValue} />
	</div>
}