import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetails from "./pages/ArticleDetails";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Reports from "./pages/Reports";
import ReportDetails from "./pages/ReportDetails";
import './App.css'

const RouterConfig = () => {
  const routes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '*',
      element: (
        <>
          <BackButton />
          <div className="content">
            {useRoutes([
              { path: "/articles", element: <Articles /> },
              { path: "/articles/:id", element: <ArticleDetails /> },
              { path: "/blogs", element: <Blogs /> },
              { path: "/blogs/:id", element: <BlogDetails /> },
              { path: "/reports", element: <Reports /> },
              { path: "/reports/:id", element: <ReportDetails /> },
            ])}
          </div>
        </>
      ),
    },
  ];

  return useRoutes(routes);
};

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <ScrollToTop />
        <RouterConfig />
      </BrowserRouter>
    </>
  )
}

export default App