import axios from "axios";

export const fetchArticles = async () => axios.get("/api/articles").then((res) => res.data);
export const fetchBlogs = async () => axios.get("/api/blogs").then((res) => res.data);
export const fetchReports = async () => axios.get("/api/reports").then((res) => res.data);

export const fetchArticleById = async (id) =>
  axios.get(`/api/articles/${id}`).then((res) => res.data);
export const fetchBlogById = async (id) =>
  axios.get(`/api/blogs/${id}`).then((res) => res.data);
export const fetchReportById = async (id) =>
  axios.get(`/api/reports/${id}`).then((res) => res.data);
