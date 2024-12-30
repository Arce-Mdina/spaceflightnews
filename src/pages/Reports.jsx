import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchReports } from "../services/api";

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const loadReports = async () => {
      const data = await fetchReports();
      setReports(data);
    };
    loadReports();
  }, []);

  return (
    <div>
      <h1>Reports</h1>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            <Link to={`/reports/${report.id}`}>{report.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;