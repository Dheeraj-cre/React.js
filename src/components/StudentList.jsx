import React from 'react';

function StudentList({students}){

    return(
        <div>
        <h2>student list</h2>

        {students.length === 0 ? (<p>No students available</p>) : (

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                    </tr>
                </thead>

                <tbody>
                   
                   {students.map((students)=> (
                    <tr key={students._id}>
                        <td>{students.name}</td>
                        <td>{students.age}</td>
                        <td>{students.course}</td>
                        <td>{students.batch}</td>
                    </tr>
                   ))}
                    
                    </tbody>
            </table>
        )}

        </div>
    )
}
export default StudentList;