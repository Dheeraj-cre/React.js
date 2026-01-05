import { useForm } from "react-hook-form";

function AddStudent({addstudent}) {

     const {register,handleSubmit,reset, formState:{ errors }} = useForm();

    function submitHandler(data){
        addstudent(data);
        reset();
        alert("Student Added Successfully");

}

return(
    <div>
          <h2>add student</h2>

        <div>
          <label>Name:</label>
          <input {...register("name",{required:true})} />
          {errors.name && <p>Name is required</p>}
        </div>
        <div>
          <label>Age:</label>
          <input type="number" {...register("age",{required:true, min:1})} />
            {errors.age && <p>Valid age is required</p>}    
          </div>
        <div>
            <label>Course:</label>
            <input {...register("course",{required:true})} />
            {errors.course && <p>Course is required</p>}
            </div>
            <div>
            <label>Batch:</label>
            <input {...register("batch",{required:true})} />    
            {errors.batch && <p>Batch is required</p>}
            </div>
            <div>
                <input type="submit" onClick={handleSubmit(submitHandler)} value="Add Student"/>
            </div>
    </div>
)

}

export default AddStudent;