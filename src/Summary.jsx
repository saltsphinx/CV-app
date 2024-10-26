import { useState } from "react"
import TextArea from "./TextArea";
import PreviewField from "./PreviewField";

export default function Summary({ CV, isEdit }) {
	return (
		<div>
			{isEdit ?
			<fieldset>
				<legend>Summary</legend>
				<TextArea label={""} name={"summary"} defaultValue={CV.summary} />
			</fieldset>
			:
			<section>
				<h2>Summary</h2>
				<PreviewField label="" value={CV.summary} />
			</section>
			}
		</div>
	)
}
