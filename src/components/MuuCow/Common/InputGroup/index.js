import { Field } from "formik"
import dynamic from "next/dynamic"
import InputMask from "react-input-mask"
import React, { useEffect, useContext, useState } from "react"
import { FaRegTrashAlt } from "react-icons/fa"
import { BsPlusLg } from "react-icons/bs"
import DatePicker from "react-datepicker"
import MapContext from "../../../../contexts/MapContext"
import Checkbox from "../Checkbox"
import { AarrayTable, ArrayTableHeader, Error, GropuInputsCheckbox, Group, GroupCheckbox, Map } from "./style"
import MuuSelect from "../Select"
import ServiceBase from "../../../../services/ServiceBase"
import Button from "../Button"
import Table from "../Table"
import ModalContext from "../../../../contexts/ModalContext"

export default function InputGroup({
	id,
	name,
	type,
	title,
	placeholder,
	errors,
	disabled,
	mask,
	noMarginTop,
	values,
	setFieldValue,
	data,
	cols,
	formType,
	height,
	modal,
	returnObjectFromSelect,
	onRemove,

	...props
}) {
	const { latitude, longitude } = useContext(MapContext)
	const [options, setOptions] = useState([])
	const service = ServiceBase(id)
	const { setShowModal, setModalData } = useContext(ModalContext)

	const maskInput = ({ field }) => {
		return <InputMask mask={mask} maskChar=' ' {...field} id={id} name={name} type={type} placeholder={placeholder} disabled={disabled} />
	}

	const MapComponent = dynamic(() => import("../Map"), { ssr: false })

	const getOptions = async () => {
		const opts = await service.getAllFull()

		setOptions(
			opts.map((option) => ({
				object: option,
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
	}, [data, id])

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
				<MuuSelect
					id={id}
					value={values[id]}
					onChange={(value) => setFieldValue(id, returnObjectFromSelect ? value.object : value.value)}
					disabled={disabled}
					options={options}
				/>
				{errors[name] && (
					<Error>
						<span>{errors[name]}</span>
					</Error>
				)}
			</Group>
		)
	}

	if (type === "datepicker") {
		return (
			<Group noMarginTop={noMarginTop}>
				<label htmlFor={id}>{title}</label>
				<Field id={id} name={name} type={type} disabled={disabled}>
					{({ field }) => (
						<DatePicker
							{...field}
							dateFormat='dd/MM/yyyy'
							selected={(field.value && new Date(field.value)) || null}
							onChange={(val) => {
								setFieldValue(id, val)
							}}
						/>
					)}
				</Field>

				{errors[name] && (
					<Error>
						<span>{errors[name]}</span>
					</Error>
				)}
			</Group>
		)
	}

	if (type === "array") {
		const tableAction = (rowValue) => {
			return (
				<Button
					color='#00AB77'
					onClick={() => {
						onRemove(rowValue, setFieldValue)
					}}
					type='button'
				>
					<FaRegTrashAlt />
				</Button>
			)
		}

		return (
			<AarrayTable>
				<ArrayTableHeader>
					<p>{title}</p>
					{formType === "create" && (
						<Button
							onClick={() => {
								setShowModal(true)
								setModalData({
									title: formType === "create" ? `Cadastro ${title}` : `Editar ${title}`,
									content: React.cloneElement(modal, { setFieldValue }),
								})
							}}
							type='button'
							color='#00AB77'
						>
							<BsPlusLg />
						</Button>
					)}
				</ArrayTableHeader>
				<Table height={height} data={data} cols={cols} actions={tableAction} noPagination width='auto' />
			</AarrayTable>
		)
	}

	return (
		<Group noMarginTop={noMarginTop}>
			<label htmlFor={id}>{title}</label>
			<Field id={id} name={name} type={type} placeholder={placeholder} disabled={disabled} {...props}>
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
