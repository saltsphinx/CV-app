import { useState } from "react";
import Input from "./Input";
import PreviewField from "./PreviewField";

export default function General({ CV, handleSubmit, onClick, isEdit }) {
	return (
		<div>
			{isEdit ?
			<fieldset>
				<legend>General Info</legend>
				<Input label={"First Name"} name={"firstName"} defaultValue={CV.firstName} />
				<Input label={"Last Name"} name={"lastName"} defaultValue={CV.lastName} />
				<Input label={"Email"} name={"email"} defaultValue={CV.email} />
				<Input label={"Phone Number"} name={"phone"} defaultValue={CV.phone} />
			</fieldset>
			:
			<section>
				<h2>General Info</h2>
				<PreviewField label="First Name" value={CV.firstName} />
				<PreviewField label="Last Name" value={CV.lastName} />
				<PreviewField label="Email" value={CV.email} />
				<PreviewField label="Phone Number" value={CV.phone} />
			</section>
			}
		</div>
	)
}