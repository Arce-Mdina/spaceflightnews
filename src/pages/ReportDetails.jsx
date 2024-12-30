import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReportById } from "../services/api";

const ReportDetails = () => {
  const { id } = useParams();
  const [report, setReport] = useState(null);

  useEffect(() => {
    const loadReport = async () => {
      const data = await fetchReportById(id);
      setReport(data);
    };
    loadReport();
  }, [id]);

  if (!report) return <p>Loading...</p>;

  return (
    <div>
      <h1>{report.title}</h1>
      <p>{report.summary}</p>
      <a href={report.url} target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  );
};

export default ReportDetails;
