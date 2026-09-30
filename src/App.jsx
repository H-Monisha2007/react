import LoginForm from "./component/LoginForm.jsx";
import StudentProfile from "./component/StudentProfile.jsx";
import StudentMarks from "./component/StudentMarks.jsx";

function App() {
    return (
        <div className="app">

            <h1>Student Management System</h1>

            <div className="container">

                <div className="card">
                    <LoginForm />
                </div>

                <div className="card">
                    <StudentProfile
                        name="Rahul"
                        rollNo="101"
                        course="BCA"
                        college="ABC College"
                    />
                </div>

                <div className="card">
                    <StudentMarks
                        name="Rahul"
                        subject="Java"
                    />
                </div>

            </div>

        </div>
    );
}

export default App;