import Input from "./Input";
import PreviewField from "./PreviewField";

export default function Education({ education, isEdit }) {
	return (
		<div>
			{isEdit ?
			<fieldset>
				<legend>Education</legend>
				<Input label={"School: "} name={"school"} defaultValue={education.school} />
				<Input label={"Study: "} name={"study"} defaultValue={education.study} />
			</fieldset>
			:
			<section>
				<h2>Education</h2>
				<PreviewField label="School: " value={education.school} />
				<PreviewField label="Study: " value={education.study} />
			</section>
			}
		</div>
	)
};
