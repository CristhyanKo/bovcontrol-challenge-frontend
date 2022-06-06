import Select from "react-select"

export default function MuuSelect({ onChange, options, value, className, ...props }) {
	const defaultValue = (optionsList, val) => {
		return optionsList ? optionsList.find((option) => option.value === val) : ""
	}

	return (
		<div className={className} style={{ zIndex: "99999" }}>
			<Select {...props} value={defaultValue(options, value)} onChange={(val) => onChange(val)} options={options} />
		</div>
	)
}
