import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Paper from "./components/Paper";
import papers from "./papers/index";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black p-4">
        <header className="mb-8">
          <h3 className="text-md">We value your opinion</h3>
          <p className="text-sm italic">Contact us at fc45@cornell.edu</p>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <div className="space-y-4">
                {papers.map((paper, i) => (
                  <div key={i} className="border-b pb-2">
                    <Link className="text-blue-700 hover:underline" to={paper.route}>
                      {paper.title}
                    </Link>
                    <p className="text-sm text-gray-600">{paper.author} — {paper.date}</p>
                  </div>
                ))}
              </div>
            }
          />
{papers.map((paper, i) => (
  <Route
    key={i}
    path={paper.route}
    element={<Paper file={paper.file} title={paper.title} abstract={paper.abstract} />}
  />
))}

        </Routes>
      </div>
    </Router>
  );
}
