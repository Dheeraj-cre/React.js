import React,{useState} from 'react'
/*--- creating a functional component ---*/
function CourseRegistration()
{
	/*--- creating a state variable of object type ----*/
	const [courseData,setCourseData] = useState({courseid:'',coursename:'',duration:0,fee:0})

	/*---- defining a function to be triggerred for handling onchange event -----*/
	function updateData(event)
	{
		//extracting name and value from the element from which event has been triggerred
		const {name,value} = event.target
		// calling function to update state variable
		setCourseData((prevData) => ({
			// retaining the remaining data
			...prevData,
			[name]:value, // updating current data
		}))
	}
	/*----------------------------------------------------------------------*/
	/*---- Defining a function to handle on submit event of form element ---*/
	function handleSubmit(event)
	{
		//prevent default page reload 
		event.preventDefault()
	}
	/*------------------------------------------------------------*/
	/*---- UI design -------*/
	return (
			<div>
			<form onSubmit={handleSubmit}>
				<table>
					<thead>
					<tr>
						<th colSpan="2">Course Registration</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>Course id</td>
						<td><input type="text" name="courseid" value={courseData.courseid} onChange={updateData} placeholder="Enter course id" /></td>
					</tr>
					<tr>
						<td>Course Name</td>
						<td><input type="text" name="coursename" value={courseData.coursename} onChange={updateData} placeholder="Enter course id" /></td>
					</tr>
					<tr>
						<td>Duration(in Hours)</td>
						<td><input type="text" name="duration" value={courseData.duration} onChange={updateData} placeholder="Enter course id" /></td>
					</tr>
					<tr>
						<td>Fee(in Rs)</td>
						<td><input type="text" name="fee" value={courseData.fee} onChange={updateData} placeholder="Enter course id" /></td>
					</tr>
					</tbody>
					<tfoot>
					<tr>
						<td colSpan="2"><input type="submit" value="Register" /></td>
					</tr>
					</tfoot>
				</table>
			</form>
			</div>
		)
}
export default CourseRegistration