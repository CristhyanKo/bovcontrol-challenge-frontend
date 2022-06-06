import { Field } from "formik"
import InputMask from "react-input-mask"
import Checkbox from "../Checkbox"
import { Error, GropuInputsCheckbox, Group, GroupCheckbox } from "./style"

export default function InputGroup({ id, name, type, title, placeholder, errors, disabled, mask, noMarginTop }) {
	const maskInput = ({ field }) => {
		return <InputMask mask={mask} maskChar=' ' {...field} id={id} name={name} type={type} placeholder={placeholder} disabled={disabled} />
	}

	if (type === "checkbox") {
		return (
			<GroupCheckbox noMarginTop={noMarginTop}>
				<label>{title}</label>
				<GropuInputsCheckbox>
					<Field id={id} name={name} type={type} disabled={disabled}>
						{({ field }) => <Checkbox id={id} name={name} type={type} disabled={disabled} {...field} />}
					</Field>
					<label htmlFor={id}>{placeholder}</label>
				</GropuInputsCheckbox>
			</GroupCheckbox>
		)
	}

	return (
		<Group noMarginTop={noMarginTop}>
			<label htmlFor={id}>{title}</label>
			<Field id={id} name={name} type={type} placeholder={placeholder} disabled={disabled}>
				{mask && maskInput}
			</Field>
			{errors[name] && (
				<Error>
					<span>{errors[name]}</span>
				</Error>
			)}
		</Group>
	)
}
