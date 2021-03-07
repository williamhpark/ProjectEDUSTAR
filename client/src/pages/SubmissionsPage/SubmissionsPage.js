import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./SubmissionsPage.css";

const SubmissionsPage = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("");
  const [admissions, setAdmissions] = useState("");
  const [file, setFile] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("about", about);
    formData.append("location", location);
    formData.append("admissions", admissions);
    formData.append("file", file);

    // Post the data from the submitted form to the database
    await axios.post("/api/school/instance", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // Redirect user to home page
    history.push("/");
  };

  return (
    <div>
      <div className="submission-form-container">
        <form className="submission-form" onSubmit={handleSubmit}>
          <label htmlFor="image-input">Image (gif, jpeg, jpg, png):</label>
          <input
            id="image-input"
            name="image-input"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
          <label htmlFor="school-name-input">School Name:</label>
          <input
            id="school-name-input"
            name="school-name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="about-input">About:</label>
          <textarea
            id="about-input"
            name="about-input"
            type="textarea"
            rows={3}
            cols={50}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          <label htmlFor="location-input">Location:</label>
          <textarea
            id="location-input"
            name="location-input"
            type="textarea"
            rows={3}
            cols={50}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="admissions-input">Admissions:</label>
          <textarea
            id="admissions-input"
            name="admissions-input"
            type="textarea"
            rows={3}
            cols={50}
            value={admissions}
            onChange={(e) => setAdmissions(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default SubmissionsPage;
