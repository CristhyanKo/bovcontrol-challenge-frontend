import { useContext, useEffect, useState } from "react"
import * as Yup from "yup"
import MapContext from "../../../../contexts/MapContext"
import ModalContext from "../../../../contexts/ModalContext"
import Form from "../../../MuuCow/Common/Form"
import InputGroup from "../../../MuuCow/Common/InputGroup"
import Fabricas from "./_modals/Fazenda/Fabricas"
import Fazendeiro from "./_modals/Fazenda/Fazendeiros"
import Supervisores from "./_modals/Fazenda/Supervisores"

export default function FazendaForm({ data, width, type, onCancel, onSubmit, backButton, cols }) {
	const { setLatitude, setLongitude } = useContext(MapContext)
	const { setShowModal } = useContext(ModalContext)
	const [farmersData, setFarmersData] = useState([])
	const [supervisorsData, setSupervisorData] = useState([])
	const [factoriesData, setFactoriesData] = useState([])
	const schema = {
		validation: Yup.object().shape({
			name: Yup.string().required("O nome é obrigatório"),
		}),

		initialValues: {
			name: data ? data.name : "",
			state: data ? data.location.state._id : "",
			city: data ? data.location.city._id : "",
			cowsHead: data ? data.cowsHead : 0,
		},
	}

	useEffect(() => {
		setLatitude(data ? data.location?.coordinates?.latitude : 0)
		setLongitude(data ? data.location?.coordinates?.longitude : 0)

		return () => {
			setLatitude(0)
			setLongitude(0)
		}
	}, [data])

	const submitFarmer = (values) => {
		setFarmersData([...farmersData, values])
		setShowModal(false)
	}

	const removeFarmer = (values) => {
		setFarmersData(farmersData.filter((farmer) => farmer.tableId !== values.tableId))
	}

	const submitSupervisors = (values) => {
		setSupervisorData([...supervisorsData, values])
		setShowModal(false)
	}

	const removeSupervisors = (values) => {
		setSupervisorData(supervisorsData.filter((farmer) => farmer.tableId !== values.tableId))
	}

	const submitFactories = (values) => {
		setFactoriesData([...factoriesData, values])
		setShowModal(false)
	}

	const removeFactories = (values) => {
		setFactoriesData(factoriesData.filter((farmer) => farmer.tableId !== values.tableId))
	}

	return (
		<Form width={width} schema={schema} onSubmit={onSubmit} cols={cols || 0} type={type} onCancel={onCancel} backButton={backButton}>
			<InputGroup id='name' name='name' type='text' title='Nome' placeholder='Informe o nome' />
			<InputGroup id='state' name='state' type='select' title='Estado' placeholder='Digite ao menos 3 caracteres' />
			<InputGroup id='city' name='city' type='select' title='Cidade' placeholder='Digite ao menos 3 caracteres' />
			<InputGroup id='map' name='map' title='Localização' type='map' />
			<InputGroup id='cowsHead' name='cowsHead' type='number' title='Vacas' placeholder='Informe a quantidade de vacas' />
			<InputGroup
				data={farmersData}
				id='farmers'
				name='farmers'
				type='array'
				title='Fazendeiros'
				height='200px'
				onRemove={removeFarmer}
				cols={[
					{ id: "farmer.name", name: "Nome", center: false },
					{ id: "startDate", name: "Data Inicio", type: "date", center: true },
					{ id: "endDate", name: "Data Fim", type: "date", center: true },
					{ id: "current", name: "Atual", center: true },
				]}
				modal={<Fazendeiro onSubmit={submitFarmer} />}
			/>
			<InputGroup
				data={supervisorsData}
				id='supervisors'
				name='farmerSupervisor'
				type='array'
				title='Supervisores'
				height='200px'
				onRemove={removeSupervisors}
				cols={[
					{ id: "farmer.name", name: "Nome", center: false },
					{ id: "startDate", name: "Data Inicio", type: "date", center: true },
					{ id: "endDate", name: "Data Fim", type: "date", center: true },
					{ id: "current", name: "Atual", center: true },
				]}
				modal={<Supervisores onSubmit={submitSupervisors} />}
			/>

			<InputGroup
				data={factoriesData}
				id='factories'
				name='farmerSupervisor'
				type='array'
				title='Fábricas'
				height='200px'
				onRemove={removeFactories}
				cols={[
					{ id: "factory.name", name: "Nome", center: false },
					{ id: "factoryDistance", name: "Distancia", type: "date", center: true },
				]}
				modal={<Fabricas onSubmit={submitFactories} />}
			/>
		</Form>
	)
}
