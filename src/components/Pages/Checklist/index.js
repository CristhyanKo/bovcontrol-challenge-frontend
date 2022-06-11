import { useContext, useEffect, useState } from "react"
import { MdArrowForwardIos } from "react-icons/md"
import dayjs from "dayjs"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
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
} from "./style"
import CowMusic from "../../MuuCow/Animations/CowMusic"
import ProductionService from "../../../services/ProductionService"

export default function Checklist() {
	const [checklists, setChecklists] = useState([])
	const [selectedChecklist, setSelectedChecklist] = useState({})
	const { activePage } = useContext(MenuContext)
	const service = ServiceBase("checklist")

	const data = [
		{
			name: "Page A",
			pv: 2400,
			amt: 2400,
		},
		{
			name: "Page B",
			pv: 1398,
			amt: 2210,
		},
		{
			name: "Page C",
			pv: 9800,
			amt: 2290,
		},
		{
			name: "Page D",
			pv: 3908,
			amt: 2000,
		},
		{
			name: "Page E",
			pv: 4800,
			amt: 2181,
		},
		{
			name: "Page F",
			pv: 3800,
			amt: 2500,
		},
		{
			name: "Page G",
			pv: 4300,
			amt: 2100,
		},
	]

	const getInitialData = async () => {
		const initialData = await service.getAllFull()
		setChecklists(initialData)
	}

	const changeChecklist = async (checklist) => {
		if (checklist._id === selectedChecklist._id) {
			setSelectedChecklist({})
		} else {
			setSelectedChecklist(checklist)

			// const serviceProduction = ProductionService()

			// console.log(serviceProduction)
			// const production = await serviceProduction.getByFarm(checklist.farm._id)
			// console.log(production[0].milkProduced)
		}
	}

	useEffect(() => {
		getInitialData()
	}, [])

	return (
		<ChecklistContent>
			<List color={activePage.color}>
				{checklists.length > 0 &&
					checklists.map((checklist) => (
						<ListItem onClick={() => changeChecklist(checklist)} active={selectedChecklist?._id === checklist._id}>
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
							Tipo de Checklist: <b>{selectedChecklist.checklistType.name}</b>
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
									<h4>Produção</h4>
									<BarChart
										width={500}
										height={100}
										data={data}
										margin={{
											top: 5,
											right: 30,
											left: 20,
											bottom: 5,
										}}
									>
										<CartesianGrid strokeDasharray='3 3' />
										<XAxis dataKey='name' />
										<YAxis />
										<Tooltip />
										<Bar dataKey='pv' fill='#8884d8' />
									</BarChart>
								</ProductionMetric>
							</Box>
						</ViewMetrics>
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
