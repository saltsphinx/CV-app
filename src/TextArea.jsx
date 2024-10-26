export default function TextArea({ label, name, defaultValue}) {
	return <>
		<label htmlFor={name}>{label}</label>
		<textarea name={name} id={name} defaultValue={defaultValue} >
		</textarea>
	</>
}
