import { useState } from "react";

function StudentMarks(props) {

    const [marks, setMarks] = useState(50);

    return (
        <div>
            <h2>Student Marks</h2>

            <p>Student Name: {props.name}</p>
            <p>Subject: {props.subject}</p>
            <p>Marks: {marks}</p>

            <button
                onClick={() => {
                    if (marks < 100) {
                        setMarks(marks + 1);
                    }
                }}
            >
                Increase Marks
            </button>

            <button
                onClick={() => {
                    if (marks > 0) {
                        setMarks(marks - 1);
                    }
                }}
            >
                Decrease Marks
            </button>
        </div>
    );
}

export default StudentMarks;