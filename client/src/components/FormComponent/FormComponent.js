import React from "react";

import "./FormComponent.css";

const FormComponent = (props) => {
  const {
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
  } = props;
  return (
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
  );
};

export default FormComponent;
