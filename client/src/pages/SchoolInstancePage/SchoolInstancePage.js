import React, { useState, useEffect } from "react";
import axios from "axios";

import "./SchoolInstancePage.css";

const SchoolInstancePage = (props) => {
  const [school, setSchool] = useState({});

  const getSchool = async () => {
    const res = await axios.get(`/api/school/${props.match.params.id}`);
    setSchool(res.data);
  };

  useEffect(() => {
    getSchool();
  }, []);

  return <div></div>;
};

export default SchoolInstancePage;
