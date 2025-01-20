import { useState } from "react";
import StudentTable from "./StudentTable.jsx";
import AddStudentForm from "./AddStudentForm.jsx";

const MainPage = () => {
    const [view, setView] = useState('');

    return(
        <div>
            <h1>Admin Dashboard</h1>
            {/* Buttons to switch between viewing the student database and adding a student */}
            <button onClick={() => setView('view')}>View Student Database</button>
            <button onClick={() => setView('add')}>Add Student</button>

            {/* Conditionally render StudentTable or AddStudentForm based on the selected view */}
            {view === 'view' && <StudentTable/>}
            {view === 'add' && <AddStudentForm/>}
        </div>
    );
};

export default MainPage;