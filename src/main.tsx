import React from "react";
import ReactDOM from "react-dom";

import "./style/main.css";

import logo from "./logo.png";

const App = () => {
  return (
    <div className="group max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl  hover:shadow-lg hover:border-transparent">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={logo}
            alt="FireFox Logo"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Firefox Browser
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            fast, private & safe web browser
          </a>
          <p className="mt-2 text-gray-500">
            This was followed by a series of aggressive marketing campaigns
            starting in 2004 with a series of events Blake Ross and Asa Dotzler
            called "marketing weeks".
          </p>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
