import React, { useState } from "react";

const About = () => {
    const [college, updateCollege] = useState("KEC");

    const handleCollegeUpdate = () => {
        updateCollege("Kongu Engineering College");
    };

    return (
        <div>
            <h1>This is your About Page</h1>
            <h2>Welcome to {college}</h2>
            <button onDoubleClick={handleCollegeUpdate}>Update College name</button>
        </div>
    );
};

export default About;
