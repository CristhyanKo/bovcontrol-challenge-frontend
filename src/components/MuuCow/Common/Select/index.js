import { useState } from "react"
import Select, { createFilter } from "react-select"

export default function MuuSelect({ onChange, options, value, className, ...props }) {
	const [openMenu, setOpenMenu] = useState(false)

	const defaultValue = (opt, vl) => {
		return opt ? opt.find((option) => option.value === vl) : ""
	}

	const hideMenu = () => {
		setOpenMenu(false)
	}

	const checkMin = (search) => {
		if (search.length >= 3) {
			setOpenMenu(true)
		} else {
			setOpenMenu(false)
		}
	}

	return (
		<div className={className}>
			<Select
				filterOption={createFilter({ ignoreAccents: false })}
				noOptionsMessage={() => "Nenhum resultado encontrado"}
				placeholder='Digite ao menos 3 letras para pesquisar'
				{...props}
				onBlur={hideMenu}
				onInputChange={checkMin}
				value={defaultValue(options, value)}
				onChange={(val) => onChange(val)}
				options={options}
				menuIsOpen={openMenu}
				styles={{
					menu: (provided) => ({ ...provided, zIndex: 9999 }),
				}}
			/>
		</div>
	)
}
