import { Field } from "formik"
import dynamic from "next/dynamic"
import InputMask from "react-input-mask"
import MapContext from "../../../../contexts/MapContext"
import Checkbox from "../Checkbox"
import { Error, GropuInputsCheckbox, Group, GroupCheckbox, Map } from "./style"
import MuuSelect from "../Select"
import ServiceBase from "../../../../services/ServiceBase"
import { useEffect, useContext, useState } from "react"

export default function InputGroup({ id, name, type, title, placeholder, errors, disabled, mask, noMarginTop }) {
	const { latitude, longitude } = useContext(MapContext)
	const [options, setOptions] = useState([{ value: "", label: "Selecione..." }])
	const service = ServiceBase(id)

	const maskInput = ({ field }) => {
		return <InputMask mask={mask} maskChar=' ' {...field} id={id} name={name} type={type} placeholder={placeholder} disabled={disabled} />
	}

	const MapComponent = dynamic(() => import("../Map"), { ssr: false })

	useEffect(() => {
		if (type === "select") {
			getOptions()
		}
	}, [id])

	const getOptions = async () => {
		const opts = await service.getAllFull()

		setOptions(opts.map((option) => ({
			value: option._id,
			label: option.name,
		})))
	}

	if (type === "map") {
		return (
			<Map>
				<label>Localização</label>
				<MapComponent lat={latitude} lng={longitude} />
				<Field id='latitude' name='latitude' value={latitude} disabled hidden />
				<Field id='longitude' name='longitude' value={longitude} disabled hidden />
			</Map>
		)
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

	if (type === "select") {
		return (
			<Group noMarginTop={noMarginTop}>
				<label htmlFor={id}>{title}</label>
				<Field id={id} name={name} type={type} disabled={disabled}>
					{({ field }) => <MuuSelect {...field} id={id} name={name} options={options} />}
				</Field>

				{errors[name] && (
					<Error>
						<span>{errors[name]}</span>
					</Error>
				)}
			</Group>
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
