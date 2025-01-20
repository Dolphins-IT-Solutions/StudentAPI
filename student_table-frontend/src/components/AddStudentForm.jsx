import {useState} from "react";
import {addStudent} from "../api/studentApi.js";

//Component for a adding a new student to the database
const AddStudentForm = () => {
    // state to manage the form inputs for the student
    const[student, setStudent] = useState({
        studentName:'', //Stores the name of the student
        age: '', //Stores the age of the student
        email: '', //Stores the email of the student
        department: '',
        address: '',
        phoneNumber: ''
    });

    //Function to handle changes in form inputs
    const handleChange = (e) => {
        // Update the state with the input field's name and value
        setStudent({...student, [e.target.name]: e.target.value});
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            await addStudent(student); // Call the API to add the student
            alert('Student added successfully!'); // Display success message

            //Reset the form fields after successful submission
            setStudent({
                studentName: '',
                age: '',
                email: '',
                department: '',
                address: '',
                phoneNumber: ''
            });
        } catch (error) {
            alert('Failed to add student'); // Display error message
        }
    };

    return (
        <div>
            <h2>Add Student</h2>
            {/* Form to input student details */}
            <form onSubmit={handleSubmit}>
                {/* Input field for student name */}
                <input
                    type="text"
                    name="studentName"
                    placeholder="Name"
                    value={student.studentName}
                    onChange={handleChange}
                />

                {/* Input field for student age */}
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={student.age}
                    onChange={handleChange}
                />

                {/* Input field for student email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={student.email}
                    onChange={handleChange}
                />

                {/* Input field for student department */}
                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={student.department}
                    onChange={handleChange}
                />

                {/* Input field for student address */}
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={student.address}
                    onChange={handleChange}
                />

                {/* Input field for student phone number */}
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={student.phoneNumber}
                    onChange={handleChange}
                />

                {/* Button to submit the form */}
                <button type="submit">Add Student</button>
            </form>
        </div>
    )
}

export default AddStudentForm;