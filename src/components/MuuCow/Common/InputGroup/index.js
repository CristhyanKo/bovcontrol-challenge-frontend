import { Field } from "formik"
import dynamic from "next/dynamic"
import InputMask from "react-input-mask"
import { useEffect, useContext, useState } from "react"
import MapContext from "../../../../contexts/MapContext"
import Checkbox from "../Checkbox"
import { Error, GropuInputsCheckbox, Group, GroupCheckbox, Map } from "./style"
import MuuSelect from "../Select"
import ServiceBase from "../../../../services/ServiceBase"

export default function InputGroup({ id, name, type, title, placeholder, errors, disabled, mask, noMarginTop, values, setFieldValue, data }) {
	const { latitude, longitude } = useContext(MapContext)
	const [options, setOptions] = useState([])
	const service = ServiceBase(id)

	const maskInput = ({ field }) => {
		return <InputMask mask={mask} maskChar=' ' {...field} id={id} name={name} type={type} placeholder={placeholder} disabled={disabled} />
	}

	const MapComponent = dynamic(() => import("../Map"), { ssr: false })

	const getOptions = async () => {
		const opts = await service.getAllFull()

		setOptions(
			opts.map((option) => ({
				value: option._id,
				label: option.name,
			}))
		)
	}

	useEffect(() => {
		if (type === "select") {
			if (data) {
				setOptions(data)
			} else {
				getOptions()
			}
		}
	}, [id])

	if (type === "map") {
		return (
			<Map>
				<label>Localização (Clique e arraste o marcador para mudar o local)</label>
				<MapComponent lat={latitude} lng={longitude} />
				<Field id='latitude' name='latitude' type='number' value={latitude} disabled hidden />
				<Field id='longitude' name='longitude' type='number' value={longitude} disabled hidden />
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
				<MuuSelect id={id} value={values[id]} onChange={(value) => setFieldValue(id, value.value)} disabled={disabled} options={options} />
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
