import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./UpdateSchoolPage.css";
import FormComponent from "../../components/FormComponent/FormComponent";

const UpdateSchoolPage = (props) => {
  const [nameModified, setNameModified] = useState("");
  const [aboutModified, setAboutModified] = useState("");
  const [locationModified, setLocationModified] = useState("");
  const [admissionsModified, setAdmissionsModified] = useState("");
  const [fileModified, setFileModified] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", nameModified);
    formData.append("about", aboutModified);
    formData.append("location", locationModified);
    formData.append("admissions", admissionsModified);
    formData.append("file", fileModified);

    // Post the data from the submitted form to the database
    await axios.put(`/api/school/instance/${props.match.params.id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // Redirect user to home page
    history.push("/");
  };

  // Populate the input fields with the previous values, which will be edited
  const initializeSchoolData = async () => {
    await axios
      .get(`/api/school/instance/${props.match.params.id}`)
      .then((response) => {
        setNameModified(response.data.name);
        setAboutModified(response.data.about);
        setLocationModified(response.data.location);
        setAdmissionsModified(response.data.admissions);
      });
  };

  useEffect(() => {
    initializeSchoolData();
  }, []);

  const passedProps = {
    name: nameModified,
    setName: setNameModified,
    about: aboutModified,
    setAbout: setAboutModified,
    location: locationModified,
    setLocation: setLocationModified,
    admissions: admissionsModified,
    setAdmissions: setAdmissionsModified,
    setFile: setFileModified,
    handleSubmit,
  };

  return (
    <div>
      <FormComponent {...passedProps} />
    </div>
  );
};

export default UpdateSchoolPage;
