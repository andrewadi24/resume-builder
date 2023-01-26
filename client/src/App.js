import logo from './logo.svg';
import './App.css';
import PersonalDetails from './Components/PersonalDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import Templates from './Components/Result';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import Builder from './Components/Builder';
import Home from './Components/Home';
import Result from './Components/Result';
import Summary from './Components/Summary';
import Education from './Components/Education'
let detail = {
  job_title: "",
  first_name: "",
  last_name: "",
  email: "",
  summary: "",
  education: [],
  educationElement: {}
}
let testing = {
  job_title: "Developer",
  first_name: "John",
  last_name: "Smith",
  email: "johnsmith@gmail.com",
  phone: "+61 0422 264 891",
  summary: "Self-motivated and cheerful customer service professional with 2+ years of experience helping customers navigate websites and resolving product and service issues. Eager to support BookMe in building an impeccable online reputation by providing top-class customer support.",
  education: [
    {
      degree_name: "bachelor of science",
      school: "University of Sydney",
      startDate: "02 February 2018",
      endDate: "Present",

    },
    {
      degree_name: "bachelor of science",
      school: "University of Sydney",
      startDate: "02 February 2018",
      endDate: "Present",

    },
    {
      degree_name: "bachelor of science",
      school: "University of Sydney",
      startDate: "02 February 2018",
      endDate: "Present",
      
  }
  ],
  educationElement: {}
}
function App() {
  const [details, setdetails] = useState(detail)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}>
          </Route>
          <Route path="templates" element={<Builder />} />
          <Route path="personal_details" element={<PersonalDetails details={details} setdetails={setdetails} />} />
          <Route path="summary" element={<Summary details={details} setdetails={setdetails} />} />
          <Route path="education" element={<Education details={details} setdetails={setdetails} />} />
          <Route path="result" element={<Result details={testing} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
