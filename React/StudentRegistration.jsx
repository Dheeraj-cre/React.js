import React,{useState} from 'react'
import {useForm} from 'react-hook-form'

/*--- Defining a functional component ---*/
function StudentRegistration()
{
	/*---- initializing useForm hook ----*/
	const {register,handleSubmit,formState:{errors}} = useForm()

	//creating a function to handle submit event of form
	function submithandler(formdata)
	{
		// prevent default page load on submit event
		//formdata.preventDefault()
		alert("Student id : "+formdata.stdid+"\n Student Name :"+ formdata.stdname+"\n Age : "+formdata.age+" year")
	}

	/*--- UI designing ---*/
	return(
		<div>
			<form onSubmit = {handleSubmit(submithandler)}>
				<table>
					<thead>
						<tr>
							<th colSpan = "2">Registration Form</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td> Student id</td>
							<td> <input type="text" {...register("stdid",{
								required:"Enter Student id",
								minLength:{value:4,message:"student id must have more than 3 character"}
							})} />
							<br />
							{errors.stdid && <p>{errors.stdid.message}</p>}</td>
						</tr>
						<tr>
							<td> Student Name</td>
							<td> <input type="text" {...register("stdname",{
								required:"Enter Student name",
								minLength:{value:5,message:"student name must have more than 3 character"}
							})} />
							<br />
							{errors.stdname && <p>{errors.stdname.message}</p>}</td>
						</tr>
						<tr>
							<td> Age(in Year)</td>
							<td> <input type="number" {...register("age",{
								required:"Enter Student name",
								min:{value:15,message:"Age must have more than 15 year"},
								max:{value:30,message:"Age must be less than 31 year"}
							})} />
							<br />
							{errors.age && <p>{errors.age.message}</p>}</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colSpan="2"><input type="submit" value = "Submit" /></td>
						</tr>
					</tfoot>
				</table>
			</form>
		</div>
		)
}
export default StudentRegistration