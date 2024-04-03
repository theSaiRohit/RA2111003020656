import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const response = await axios.get("/api/companies");
        const data = response.data;
        setCompanies(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch companies:", error);
      }
    }

    fetchCompanies();
  }, []);

  return (
    <div>
      <h1>Companies</h1>
    </div>
  );
}

export default HomePage;
