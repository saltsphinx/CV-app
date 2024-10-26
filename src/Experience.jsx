import { useState } from "react"
import Input from "./Input";
import TextArea from "./TextArea";
import PreviewField from "./PreviewField";


export default function Experience({ experience, isEdit, handleAddExperience, handleRemoveExperience }) {
	return (
		<>
			<h2>Work Experience</h2>
			{isEdit && <input type="button" value="Add Experience" onClick={handleAddExperience}/>}
			{experience.map((job, index) => <ExperienceSection key={job.id} job={job} index={index} isEdit={isEdit} handleRemoveExperience={() => handleRemoveExperience(job.id)}/>)}
		</>
	)
}

function ExperienceSection({ job, index, isEdit, handleRemoveExperience }) {
	return (
		<div>
			<input type="button" value="Remove" onClick={handleRemoveExperience}/>
			{isEdit ?
			<fieldset>
				<legend>Experience {index + 1}</legend>
				<Input label={"Company: "} name={"company" + index} defaultValue={job.company} />
				<Input label={"Position: "} name={"position" + index} defaultValue={job.position} />
				<TextArea label={"Responsibilities: "} name={"responsibilities" + index} defaultValue={job.responsibilities} />
				<Input label={"From: "} name={"start" + index} defaultValue={job.from} />
				<Input label={"To: "} name={"to" + index} defaultValue={job.to} />
				<input name={"id" + index} type="hidden" value={job.id} />
			</fieldset>
			:
			<section>
				<h2>Experience {index + 1}</h2>
				<PreviewField label="Company: " value={job.company} />
				<PreviewField label="Position: " value={job.position} />
				<PreviewField label="Responsibilities: " value={job.responsibilities} />
				<PreviewField label="From: " value={job.from} />
				<PreviewField label="To: " value={job.to} />
			</section>
			}
		</div>
	);
}