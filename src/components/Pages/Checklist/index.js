import { useContext, useEffect, useState } from "react"
import { MdArrowForwardIos } from "react-icons/md"
import dayjs from "dayjs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import dynamic from "next/dynamic"
import MenuContext from "../../../contexts/MenuContext"
import ServiceBase from "../../../services/ServiceBase"
import {
	ChecklistContent,
	List,
	ListItem,
	ChecklistViewer,
	ListItemContent,
	ListItemArrow,
	Empty,
	ViewContent,
	ViewHeader,
	ViewMetrics,
	Infos,
	Info,
	Box,
	Type,
	CowMetric,
	ProductionMetric,
	ToolTipChart,
	Supervisors,
} from "./style"
import CowMusic from "../../MuuCow/Animations/CowMusic"
import ProductionService from "../../../services/ProductionService"
import Table from "../../MuuCow/Common/Table"

function CustomTooltip({ active, payload }) {
	if (active && payload && payload.length) {
		return (
			<ToolTipChart className='custom-tooltip'>
				<p className='label'>{`Total Produzido (L) : ${payload[0].value}`}</p>
			</ToolTipChart>
		)
	}

	return null
}

export default function Checklist() {
	const [checklists, setChecklists] = useState([])
	const [chartData, setChartData] = useState([])
	const [selectedChecklist, setSelectedChecklist] = useState({})
	const { activePage } = useContext(MenuContext)
	const service = ServiceBase("checklist")
	const serviceProduction = ProductionService()

	const getInitialData = async () => {
		const initialData = await service.getAllFull()
		setChecklists(initialData)
	}

	const MapComponent = dynamic(() => import("../../MuuCow/Common/Map"), { ssr: false })

	const changeChecklist = async (checklist) => {
		if (checklist._id === selectedChecklist._id) {
			setSelectedChecklist({})
		} else {
			setSelectedChecklist(checklist)

			const productions = await serviceProduction.getByFarm(checklist.farm._id)

			const tempChartData = [
				{ name: "Janeiro", value: 0 },
				{ name: "Fevereiro", value: 0 },
				{ name: "Março", value: 0 },
				{ name: "Abril", value: 0 },
				{ name: "Maio", value: 0 },
				{ name: "Junho", value: 0 },
				{ name: "Julho", value: 0 },
				{ name: "Agosto", value: 0 },
				{ name: "Setembro", value: 0 },
				{ name: "Outubro", value: 0 },
				{ name: "Novembro", value: 0 },
				{ name: "Dezembro", value: 0 },
			]

			productions.forEach((production) => {
				const productionMonth = dayjs(production.date).format("MM")
				tempChartData[parseInt(productionMonth) - 1].value += production.milkProduced
				setChartData([...chartData, {}])
			})

			setChartData(tempChartData)
		}
	}

	const cols = [
		{ id: "farmer.name", name: "Nome", center: false },
		{ id: "startDate", name: "Data Inicio", type: "date", center: true },
		{ id: "endDate", name: "Data Fim", type: "date", center: true },
		{ id: "current", name: "Atual", center: true },
	]

	useEffect(() => {
		getInitialData()
	}, [])

	return (
		<ChecklistContent>
			<List color={activePage.color}>
				{checklists.length > 0 &&
					checklists.map((checklist, key) => (
						<ListItem key={key} onClick={() => changeChecklist(checklist)} active={selectedChecklist?._id === checklist._id}>
							<ListItemContent active={selectedChecklist?._id === checklist._id} color={activePage.color}>
								<h4>{checklist.farm.farmers.find((farmer) => farmer.current).farmer.name}</h4>
								<span>
									{checklist.farm.name} - {checklist.farm.location.city.name}
								</span>
								<small>{dayjs(checklist.createdAt).format("DD/MM/YYYY")}</small>
							</ListItemContent>
							<ListItemArrow>
								<MdArrowForwardIos />
							</ListItemArrow>
						</ListItem>
					))}
			</List>

			<ChecklistViewer>
				{selectedChecklist?._id ? (
					<ViewContent>
						<Type>
							<span>
								Tipo de Checklist: <b>{selectedChecklist.checklistType.name}</b>
							</span>
							<span>{dayjs(selectedChecklist.createdAt).format("DD/MM/YYYY")}</span>
						</Type>
						<ViewHeader>
							<Infos>
								<Info>
									<b>Fazendeiro: </b>
									<p>{selectedChecklist.farm.farmers.find((farmer) => farmer.current).farmer.name}</p>
								</Info>
								<Info>
									<b>Fazenda: </b>
									<p>{selectedChecklist.farm.name}</p>
								</Info>
							</Infos>
							<Infos>
								<Info>
									<b>Cidade: </b>
									<p>{selectedChecklist.farm.location.city.name}</p>
								</Info>
								<Info>
									<b>Estado: </b>
									<p>{selectedChecklist.farm.location.state.name}</p>
								</Info>
							</Infos>
							<Infos>
								<Info>
									<b>Latitude: </b>
									<p>{selectedChecklist.farm.location.coordinates.latitude}</p>
								</Info>
								<Info>
									<b>Longitude: </b>
									<p>{selectedChecklist.farm.location.coordinates.longitude}</p>
								</Info>
							</Infos>
						</ViewHeader>
						<ViewMetrics>
							<Box flex={1}>
								<CowMetric color={activePage.color}>
									<h4>Total de Vacas</h4>
									<span>{selectedChecklist.farm.cowsHead}</span>
								</CowMetric>
							</Box>
							<Box flex={2}>
								<ProductionMetric>
									<h4>Produção de Leite em Litros/Mês</h4>
									<BarChart
										width={500}
										height={100}
										data={chartData}
										margin={{
											top: 5,
											right: 30,
											left: -20,
											bottom: -5,
										}}
									>
										<CartesianGrid strokeDasharray='3 3' />
										<XAxis dataKey='name' />
										<YAxis />
										<Tooltip content={<CustomTooltip />} />
										<Bar dataKey='value' fill='#8884d8' />
									</BarChart>
								</ProductionMetric>
							</Box>
						</ViewMetrics>
						<Supervisors>
							<h4>Supervisores</h4>
							<Table data={selectedChecklist.farm.supervisors} cols={cols} noPagination height='200px' />
						</Supervisors>
						<MapComponent lat={selectedChecklist.farm.location.coordinates.latitude} lng={selectedChecklist.farm.location.coordinates.longitude} />
					</ViewContent>
				) : (
					<Empty>
						<CowMusic /> <h2>Nenhum checklist selecionado!</h2> <p>Selecione um checklist para visualização.</p>
					</Empty>
				)}
			</ChecklistViewer>
		</ChecklistContent>
	)
}
