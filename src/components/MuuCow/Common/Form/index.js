import { Formik, Form as FormFormik } from "formik"
import React from "react"
import { Cols } from "./style"

export default function Form({ children, schema, onSubmit, cols, submitRef, width }) {
	const colsChilds = []
	let colsCount = 1
	return (
		<div style={{ width: `${width || "100%"}` }}>
			<Formik onSubmit={onSubmit} validationSchema={schema.validation} initialValues={schema.initialValues} innerRef={submitRef}>
				{({ errors }) => (
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
												return React.cloneElement(elem, { errors, noMarginTop: cols > 1 })
											})}
										</Cols>
									)

									colsChilds.splice(0, colsChilds.length)
									colsCount = 0
								}
							} else {
								finalRender = React.cloneElement(child, { errors })
							}

							return finalRender
						})}
					</FormFormik>
				)}
			</Formik>
		</div>
	)
}
