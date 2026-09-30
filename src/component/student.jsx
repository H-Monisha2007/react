import { useState } from "react";
function Student() {
    const [name, setName] = useState("Venkatesh");
    return (
        <div>
            <h2> Hello{name}</h2>
            <button onClick={ () => setName("Venkatesh")}>
                Change Name</button>
        </div>
    );
}
    export default Student;