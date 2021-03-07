import React, { useState, useEffect } from "react";
import axios from "axios";

import "./SchoolInstancePage.css";

const SchoolInstancePage = (props) => {
  const [school, setSchool] = useState({});

  const getSchool = async () => {
    const res = await axios.get(
      `/api/school/instance/${props.match.params.id}`
    );
    setSchool(res.data);
  };

  useEffect(() => {
    getSchool();
  }, []);

  return (
    <div>
      <h1>{school.name}</h1>
      <h3>{school.about}</h3>
      <img src={school.image} alt="School image" />
    </div>
  );
};

export default SchoolInstancePage;
