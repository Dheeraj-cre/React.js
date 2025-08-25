import React from 'react'

function Student_details(props) {
	return (
		<div>
			<h3>Name of Student: {props.name}</h3>
			<h3>Standard of Student: {props.standard}</h3>
			<h3>Age of Student: {props.stdage}</h3>
		</div>
		)
}
export default Student_details;