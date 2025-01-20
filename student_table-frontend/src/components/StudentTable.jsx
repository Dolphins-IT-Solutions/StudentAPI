import {useState, useEffect} from "react";
import {getAllStudents, updateStudent, deleteStudent} from "../api/studentApi.js";

const StudentTable = () => {
    const [students, setStudents] = useState([]); //State to store the list of students
    const [selectedRow, setSelectedRow] = useState(null); //State to track the selected row for update or delete
    const [editMode, setEditMode] = useState(false); //State to toggle edit mode

    //Fetch students when component loads
    useEffect(() => {
        fetchStudents();
    }, []);

    //Function to fetch student data from the API
    const fetchStudents = async () => {
        try {
            const response = await getAllStudents(); // API call to fetch students
            setStudents(response.data); // Update state with the fetched students
        } catch (error) {
            alert('Failed to fetch students'); // Handle Errors
        }
    };

    // Function to handle row selection via checkbox
    const handleCheckboxChange = (id) => {
        setSelectedRow((prev) => (prev === id ? null : id)); // Toggle the selected row
    };

    // Function to enable editing the selected row
    const handleUpdate = () => {
        if (!selectedRow) {
            alert('Please select a row to update'); // Alert if no row is selected
            return;
        }
        setEditMode(true);
    };

    // Function to save changes to the selected row
    const handleSaveChanges = async () => {
        const updatedStudent = students.find((s) => s.id === selectedRow); // Get the updated student data
        try {
            await updateStudent(updatedStudent); // API call to save updates
            alert('Student updated successfully'); // Show success message
            setEditMode(false); // Exit edit mode
            setSelectedRow(null); // Clear selected row
            fetchStudents(); // Refresh the table
        } catch (error) {
            alert('Failed to update student'); // Handle Errors
        }
    };

    // Function to delete the selected row
    const handleDelete = async () => {
        if (!selectedRow) {
            alert('Please select a row to delete'); // Alert if no row is selected
            return;
        }
        try {
            await deleteStudent(selectedRow); // API call to delete student
            alert('Student deleted successfully'); // Show success message
            setSelectedRow(null); // Clear selected row
            fetchStudents(); // Refresh the table
        } catch (error) {
            alert('Failed to delete student'); // Handle Errors
        }
    };

    return (
        <div>
            <h2>Student Database</h2>
            {/* Buttons to toggle edit or delete mode */}
            <button onClick={handleUpdate}>Update</button>
            {editMode && <button onClick={handleSaveChanges}>Save Changes</button>}
            <button onClick={handleDelete}>Delete</button>

            {/* Table displaying student data */}
            <table border="1">
                <thead>
                <tr>
                    <th>Select</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedRow === student.id} // Checkbox for selecting a row
                                onChange={() => handleCheckboxChange(student.id)}
                            />
                        </td>
                        <td>{student.id}</td>
                        <td>
                            {editMode && selectedRow === student.id ? (
                                <input
                                    type="text"
                                    value={student.studentName} // Editable field for name
                                    onChange={(e) =>
                                        setStudents((prev) =>
                                            prev.map((s) =>
                                                s.id === student.id
                                                    ? {...s, studentName: e.target.value}
                                                    : s
                                            ))
                                    }
                                />
                            ) : (
                                student.studentName
                            )}
                        </td>
                        <td>
                            {editMode && selectedRow === student.id ? (
                                <input
                                    type="number"
                                    value={student.age} // Editable field for age
                                    onChange={(e) =>
                                        setStudents((prev) =>
                                            prev.map((s) =>
                                                s.id === student.id ? {...s, age: e.target.value} : s
                                            )
                                        )
                                    }
                                />
                            ) : (
                                student.age
                            )}
                        </td>
                        <td>{student.email}</td>
                        <td>{student.department}</td>
                        <td>{student.address}</td>
                        <td>{student.phoneNumber}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;