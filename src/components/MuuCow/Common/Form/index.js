import { Formik, Form as FormFormik } from "formik"
import React from "react"
import { useRouter } from "next/router"
import Button from "../Button"
import { Actions, Cols } from "./style"

export default function Form({ children, schema, onSubmit, cols, width, type, onCancel, backButton }) {
	const colsChilds = []
	const route = useRouter()
	const formType = type || "create"

	let colsCount = 1
	return (
		<div style={{ width: `${width || "100%"}` }}>
			<Formik onSubmit={onSubmit} validationSchema={schema.validation} initialValues={schema.initialValues}>
				{({ errors, values, isValid, setFieldValue }) => (
					<FormFormik>
						{React.Children.map(children, (child) => {
							let finalRender = null
							if (cols) {
								colsCount += 1
								colsChilds.push(child)

								if (colsCount === cols) {
									finalRender = (
										<Cols>
											{colsChilds.map((elem) => {
												return React.cloneElement(elem, { errors, noMarginTop: cols > 1, values, setFieldValue, formType })
											})}
										</Cols>
									)

									colsChilds.splice(0, colsChilds.length)
									colsCount = 0
								}
							} else {
								finalRender = React.cloneElement(child, { errors, noMarginTop: cols > 1, values, setFieldValue, formType })
							}

							return finalRender
						})}
						<Actions>
							{backButton && (
								<Button color='#525252' onClick={() => route.back()} type='button'>
									Voltar
								</Button>
							)}
							{onCancel && (
								<Button color='#525252' onClick={() => onCancel(values)} type='button'>
									Cancelar
								</Button>
							)}
							<Button disabled={!isValid} color='#00AB77' type='submit'>
								{type === "update" ? "Salvar" : "Criar"}
							</Button>
						</Actions>
					</FormFormik>
				)}
			</Formik>
		</div>
	)
}
