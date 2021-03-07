import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

import "./HomePage.css";

const HomePage = () => {
  const [schools, setSchools] = useState([]);

  const history = useHistory();

  const getSchools = async () => {
    const res = await axios.get("/api/school/all");
    setSchools(res.data);
  };

  useEffect(() => {
    getSchools();
  }, []);

  return (
    <div>
      <button onClick={() => history.push("/submit")}>Create</button>
      <ol>
        {schools.map((school) => {
          return <Link to={`/${school._id}`}>{school.name}</Link>;
        })}
      </ol>
    </div>
  );
};

export default HomePage;
