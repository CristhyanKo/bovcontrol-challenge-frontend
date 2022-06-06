import Select from 'react-select'

export default function MuuSelect({ onChange, options, value, className, ...props }) {
	const defaultValue = (options, value) => {
		return options ? options.find(option => option.value === value) : ""
	}

	return <div className={className} style={{ zIndex: "99999" }}>
		<Select {...props} value={defaultValue(options, value)} onChange={value => onChange(value)} options={options} />
	</div>

}