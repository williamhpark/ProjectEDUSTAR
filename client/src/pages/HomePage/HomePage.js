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
    <div className="home-page-container">
      <button onClick={() => history.push("/submit")}>Create</button>
      {schools
        .slice()
        .reverse()
        .map((school) => {
          return (
            <Link
              className="link school-link"
              key={school._id}
              to={`/${school._id}`}
            >
              <h3>{school.name}</h3>
            </Link>
          );
        })}
    </div>
  );
};

export default HomePage;
