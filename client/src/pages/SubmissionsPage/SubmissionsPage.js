import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./SubmissionsPage.css";
import FormComponent from "../../components/FormComponent/FormComponent";

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

  const props = {
    name,
    setName,
    about,
    setAbout,
    location,
    setLocation,
    admissions,
    setAdmissions,
    setFile,
    handleSubmit,
  };

  return (
    <div>
      <FormComponent {...props} />
    </div>
  );
};

export default SubmissionsPage;
