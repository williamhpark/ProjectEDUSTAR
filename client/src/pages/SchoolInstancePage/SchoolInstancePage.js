import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./SchoolInstancePage.css";

const SchoolInstancePage = (props) => {
  const [school, setSchool] = useState({});

  const history = useHistory();

  const getSchool = async () => {
    const res = await axios.get(
      `/api/school/instance/${props.match.params.id}`
    );
    setSchool(res.data);
  };

  const handleDelete = async () => {
    await axios.delete(`/api/school/instance/${props.match.params.id}`);
    history.push("/");
  };

  useEffect(() => {
    getSchool();
  }, []);

  return (
    <div className="instance-page-container">
      <h1>{school.name}</h1>
      {school.about && <p>{school.about}</p>}
      {school.location && (
        <p>
          <b>Location:</b> {school.location}
        </p>
      )}
      {school.admissions && (
        <p>
          <b>Admissions:</b> {school.admissions}
        </p>
      )}
      <img className="school-image" src={school.image} alt="School image" />
      <div className="button-container">
        <button
          onClick={() => history.push(`/${props.match.params.id}/update`)}
        >
          Update
        </button>
        <button onClick={() => handleDelete()}>Delete</button>
      </div>
    </div>
  );
};

export default SchoolInstancePage;
